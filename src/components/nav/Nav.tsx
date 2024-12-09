import Link from 'next/link'
import { IoChevronDownOutline } from "react-icons/io5";
import style from './Nav.module.css'
import Navigator from '../routes/Navigator'
import { Routes } from '@/models'

interface NavProps {
  theme: 'dark' | 'light';  // Prop para definir el tema
}

const Nav: React.FC<NavProps> = ({ theme }) => {
  return (
    <nav className={`${style.Nav} ${theme === 'dark' ? style.dark : ''}`}>
      <Link href={Routes.HOME.path}>
        <h3>Mao's Word</h3>
      </Link>
      <ul className={style.Nav_Link}>
        <Navigator pathNames={[Routes.DASHBOARD, Routes.PRODUCTOS, Routes.MAOS, Routes.BLOG, Routes.CONTACTENOS]} />
        <li>En</li>
      </ul>
      <div className={style.Nav_Perfil}>
        <h2>¡Hola, Steven Jocz!</h2>
        <IoChevronDownOutline className={style.Nav_Perfil_Icono}/>
      </div>
    </nav>
  )
}

export default Nav;
