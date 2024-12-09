"use client";
import { useParams } from 'next/navigation';
import {
    IoBookmarkOutline,
    IoCloudDoneOutline,
    IoFolderOpenOutline,
    IoChatboxEllipsesOutline
} from "react-icons/io5";
import style from './Curso.module.css'
import { Anuncios } from './anuncios';
import { Items } from './items';
import { Mao } from '@/components/mao';
import { ModulosYTemas } from './modulosYTemas.tsx';

const Curso = () => {
    const { student } = useParams();
    const decoded = Buffer.from(student as string, 'base64').toString();
    const [id] = decoded.split('|');

    const handleTemaSeleccionado = (temaId: string) => {
        if (temaId.startsWith("quizz")) {
            console.log("Quizz seleccionado:", temaId);
        } else {
            console.log("Tema seleccionado:", temaId);
        }
    };

    return (
        <div className={style.Curso}>
            <div className={style.Curso_Nav}>
                <h4>Principales</h4>
                <ul className={style.Curso_Nav_Ul}>
                    <li className={style.Curso_Nav_Ul_Li}>
                        <IoBookmarkOutline className={style.Curso_Nav_Icono} />
                        Información general
                    </li>
                    <li className={style.Curso_Nav_Ul_Li}>
                        <IoCloudDoneOutline className={style.Curso_Nav_Icono} />
                        PDF's y Recursos
                    </li>
                </ul>
                <h4>Recursos</h4>
                <ul className={style.Curso_Nav_Ul}>
                    <li className={style.Curso_Nav_Ul_Li}>
                        <IoFolderOpenOutline className={style.Curso_Nav_Icono} />
                        Temario
                    </li>
                    <ModulosYTemas cursoId={id} onTemaSeleccionado={handleTemaSeleccionado} />
                    <li className={style.Curso_Nav_Ul_Li}>
                        <IoChatboxEllipsesOutline className={style.Curso_Nav_Icono} />
                        Grupo de conversación
                    </li>
                </ul>
            </div>
            <div className={style.Curso_Content}>

            </div>
            <div className={style.Curso_Recursos}>
                <Anuncios />
                <Items />
                <Mao />
            </div>
        </div>
    );
};

export default Curso;