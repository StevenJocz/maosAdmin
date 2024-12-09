import style from './Items.module.css'
import {
    IoCalendarNumber,
    IoHelpCircle,
    IoMedal,
    IoChatboxEllipses
} from "react-icons/io5";

const Items = () => {
    return (
        <div className={style.Items}>
            <h4>Recursos</h4>
            <div className={style.Items_Content}>
                <div className={style.Items_Content_Card}>
                    <div className={style.Curso_circulo}>
                        <IoCalendarNumber className={style.Curso_Icono} />
                    </div>
                    <h5>Asistencia</h5>
                </div>
                <div className={style.Items_Content_Card}>
                    <div className={style.Curso_circulo}>
                        <IoChatboxEllipses className={style.Curso_Icono} />
                    </div>
                    <h5>Grupo de conversación</h5>
                </div>
                <div className={style.Items_Content_Card}>
                    <div className={style.Curso_circulo}>
                        <IoHelpCircle className={style.Curso_Icono} />
                    </div>
                    <h5>Ayuda</h5>
                </div>
                <div className={style.Items_Content_Card}>
                    <div className={style.Curso_circulo}>
                        <IoMedal className={style.Curso_Icono} />
                    </div>
                    <h5>Calificaciones</h5>
                </div>
            </div>
        </div>
    )
}

export default Items