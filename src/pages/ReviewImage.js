import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useImageContext } from '../context/ImageContext'; // Usa contexto si es necesario
import axios from 'axios';
import styles from '../styles/ReviewImage.module.css';

export default function ReviewImage() {
    const router = useRouter();
    const { capturedImage } = useImageContext();
    const [imageURL, setImageURL] = useState(null);

    useEffect(() => {
        if (capturedImage) {
            const url = URL.createObjectURL(capturedImage);
            setImageURL(url);

            return () => URL.revokeObjectURL(url);
        }
    }, [capturedImage]);

    const handleError = (message) => {
        router.push({
            pathname: '/ups',
            query: { message: encodeURIComponent(message) },
        });
    };

    const sendToBackend = async () => {
        try {
            if (!capturedImage) {
                throw new Error('No se encontró la imagen para enviar al backend.');
            }

            // Paso 1: Enviar la imagen a Google Vision AI
            const formData_ImageProcessing = new FormData();
            formData_ImageProcessing.append('image', capturedImage, 'photo.jpg');
            const url_ImageProcessing = 'http://34.46.252.163/api/process-image/';

            const response_ImageProcessing = await axios.post(url_ImageProcessing, formData_ImageProcessing);
            const texto_google = response_ImageProcessing.data.text;
            console.log('Respuesta de Google Vision AI:', texto_google);

            // Paso 2: Enviar el texto procesado a OpenAI GPT
            const url_TextAnalysis = 'http://35.193.164.187/api/analyze-text/';
            const response_TextAnalysis = await axios.post(url_TextAnalysis, { text: texto_google });

            const codigo_depto = response_TextAnalysis.data.openai_depto;
            console.log('Respuesta de OpenAI:', codigo_depto);

            // Paso 3: Consultar los datos del residente
            const url_ManagementService = 'http://34.29.123.189/api/residente/';
            const response_ManagementService = await axios.get(url_ManagementService, {
                params: { codigo_departamento: codigo_depto },
            });

            const nombre_residente = response_ManagementService.data.nombre_completo;
            console.log('Respuesta de Management:', response_ManagementService.data);

            // Paso 4: Enviar la notificación
            const url_Notification = 'http://146.148.75.57/api/notifications/send/';
            const formData_Notification = new FormData();
            formData_Notification.append('codigo_departamento', codigo_depto);
            formData_Notification.append('image', capturedImage, 'photo.jpg');

            const response_Notification = await axios.post(url_Notification, formData_Notification, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            console.log('Respuesta de Notificaciones:', response_Notification.data);

            // Mensaje de éxito y redirección
            const mensaje_Notificacion = `Se ha notificado a ${nombre_residente}, residente del departamento ${codigo_depto}.`;
            alert(mensaje_Notificacion);

            router.push('/envio-confirmacion');
        } catch (error) {
            console.error('Error en el flujo:', error);
            handleError('Error en la comunicación con el backend. Intente nuevamente.');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Revisión de Imagen</h1>
            {imageURL ? (
                <div>
                    <img src={imageURL} alt="Preview de la imagen" className={styles.imagePreview} />
                    <div className={styles.buttonContainer}>
                        <button onClick={() => router.push('/captura')} className={styles.captureButton}>
                            Volver a Captura
                        </button>
                        <button onClick={sendToBackend} className={styles.sendButton}>
                            Enviar
                        </button>
                    </div>
                </div>
            ) : (
                <p>No se encontró una imagen para revisar.</p>
            )}
            <button className={`${styles.backButton} ${styles.backButtonFullWidth}`} onClick={() => router.push('/')}>
                ← Volver al Inicio
            </button>
        </div>
    );
}
