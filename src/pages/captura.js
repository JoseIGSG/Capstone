import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useImageContext } from '../context/ImageContext'; // Importar el contexto
import styles from '../styles/Home.module.css';

export default function Captura() {
    const [isCameraOn, setIsCameraOn] = useState(false);
    const videoRef = useRef(null);
    const router = useRouter();
    const { setCapturedImage } = useImageContext(); // Usar el setter del contexto

    useEffect(() => {
        async function setupCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error al acceder a la cámara:', error);
            }
        }

        if (isCameraOn) {
            setupCamera();
        }

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, [isCameraOn]);

    const captureImage = () => {
        if (!videoRef.current) return;

        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
            if (!blob) return;

            setCapturedImage(blob); // Guardar la imagen en el contexto
            router.push('/ReviewImage'); // Redirigir a la página de revisión
        });
    };

    return (
        <div className={styles.container}>
            <h1>Captura una Etiqueta</h1>
            {isCameraOn ? (
                <>
                    <video ref={videoRef} autoPlay playsInline className={styles.video}></video>
                    <button onClick={captureImage} className={styles.captureButton}>
                        Capturar
                    </button>
                </>
            ) : (
                <button onClick={() => setIsCameraOn(true)} className={styles.button}>
                    Iniciar Cámara
                </button>
            )}
            <button className={styles.backButton} onClick={() => router.push('/')}>
                ← Volver
            </button>
        </div>
    );
}
