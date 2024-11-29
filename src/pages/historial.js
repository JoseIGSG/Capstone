import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/historial.module.css';
import { useRouter } from 'next/router';

export default function Historial() {
    const [encomiendas, setEncomiendas] = useState([]);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://34.29.123.189/encomiendas/');
                const encomiendasData = response.data;

                console.log('Datos del backend (encomiendas):', encomiendasData);

                const formattedData = encomiendasData.map((encomienda) => {
                    return {
                        id: encomienda.id,
                        fechaLlegada: encomienda.Fecha_Llegada || "Fecha no disponible",
                        fechaRecepcion: encomienda.Fecha_Recepcion || "Fecha no disponible",
                        departamento: encomienda.departamento || "Sin información",
                        residente: encomienda.residente || "Sin información",
                        estado: encomienda.Fecha_Recepcion ? "Entregado" : "Pendiente",
                    };
                });

                // Ordenar primero por estado (Pendiente primero) y luego por fecha (más reciente primero)
                const sortedData = formattedData.sort((a, b) => {
                    if (a.estado === b.estado) {
                        return new Date(b.fechaLlegada) - new Date(a.fechaLlegada); // Más reciente primero
                    }
                    return a.estado === "Pendiente" ? -1 : 1; // Pendientes primero
                });

                console.log('Datos formateados y ordenados:', sortedData);
                setEncomiendas(sortedData);
            } catch (error) {
                console.error('Error al obtener los datos de encomiendas:', error.message);
                setError('No se pudieron cargar las encomiendas.');
            }
        };

        fetchData();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString || dateString === "Fecha no disponible") return "Fecha no disponible";
        const date = new Date(dateString);
        return isNaN(date.getTime())
            ? "Fecha inválida"
            : date.toLocaleString("es-CL", { timeZone: "America/Santiago" });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Historial de Encomiendas</h1>
            {error ? (
                <p className={styles.error}>{error}</p>
            ) : (
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Fecha de Llegada</th>
                                <th>Departamento</th>
                                <th>Residente</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {encomiendas.map((encomienda) => (
                                <tr key={encomienda.id}>
                                    <td>{formatDate(encomienda.fechaLlegada)}</td>
                                    <td>{encomienda.departamento}</td>
                                    <td>{encomienda.residente}</td>
                                    <td
                                        className={
                                            encomienda.estado === 'Pendiente'
                                                ? styles.pendiente
                                                : styles.entregado
                                        }
                                    >
                                        {encomienda.estado}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <div className={styles.backButtonContainer}>
                <button className={styles.backButton} onClick={() => router.push('/')}>
                    ← Volver
                </button>
            </div>
        </div>
    );
}
