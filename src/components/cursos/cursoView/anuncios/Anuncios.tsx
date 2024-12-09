import style from './Anuncios.module.css'
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const Anuncios = () => {
    return (
        <>
            <div className={style.Anuncios}>
                <IoChatboxEllipsesOutline className={style.Anuncios_Icono} />
                <p>Ver anuncios</p>
            </div>
            <p className={style.Anuncios_P}>Hay 10 anuncios</p>
        </>
    )
}

export default Anuncios