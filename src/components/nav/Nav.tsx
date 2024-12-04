import Link from 'next/link'
import style from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={style.Nav}>
      <Link href="/">
        <h3>Mao's Word</h3>
      </Link>
    </nav>
  )
}

export default Nav