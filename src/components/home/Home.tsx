import style from './Home.module.css'
import HomeNav from './Home.nav'

import bg from '../../../public/svg/bg.svg'
import linea from '../../../public/svg/svgLinea.svg'
import Image from 'next/image'

const Home = () => {
    return (
        <section className={style.Home}>
            <h1>¡Hola, <span>Steven Jocz!</span></h1>
            <p>¡Bienvenid@! ¿Qué vas a aprender hoy?</p>
            <HomeNav />

            <Image
                src={bg}
                className={style.svgImagen}
                alt="svg"
                width={900}
                height={900}
                placeholder="blur" // Activa el efecto de desenfoque
                blurDataURL="data:image/svg+xml;base64,..." // Agrega una URL de baja resolución
            />
            <Image
                src={linea}
                className={style.Linea}
                alt="svg"
                width={500}
                height={400}
                placeholder="blur" // Activa el efecto de desenfoque
                blurDataURL="data:image/svg+xml;base64,..." // Agrega una URL de baja resolución
            />
        </section>
    )
}

export default Home