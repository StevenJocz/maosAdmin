import Button from '../button/Buttton';
import style from './Inicio.module.css'
import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string().email('Correo inválido').required('El correo es obligatorio'),
    password: Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .required('La contraseña es obligatoria'),
});

const Inicio = () => {
    const handleSubmit = (values: { email: string; password: string }) => {
        console.log('Datos del formulario:', values);
        // Aquí puedes llamar a tu API para autenticar al usuario
    };
    return (
        <div className={style.Inicio}>
            <div className={style.Inicio_Content}>
                <div className={style.Inicio_Content_Body}>
                    <h2><span>Inicia sesión</span></h2>
                    <form >
                        <div className='Formulario_Input'>
                            <label htmlFor="email">Correo electrónico</label>
                            <input name="email" type="email" placeholder="Correo electrónico" />
                        </div>
                        <div className='Formulario_Input'>
                            <label htmlFor="password">Contraseña</label>
                            <input name="password" type="password" placeholder="Contraseña"/>
                        </div>
                        <Button type={1} text='Iniciar sesión' />
                    </form>
                </div>
            </div>
            <footer className={style.Footer}>
                <p>© 2024 desarrollado por Hamilton Espinal para MAO'S WORD. Todos los derechos reservados.</p>
            </footer>
        </div>
    )
}

export default Inicio