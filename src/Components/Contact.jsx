import '../Style/Contact.css'
import localidad from '../statics/images/map_icon.svg'
import correo from '../statics/images/email_icon.svg'
import telefono from '../statics/images/phone-volume.svg'
import facebook from '../statics/images/facebook_icon.svg'

const Contact = () => {
  return (
    <section className='contenerdor-contact' id='Contact'>
      <div className='card-contact'>
        <div className='contact-info'>
          <div className='titulo-zeus'>
            <h1>ZEUS</h1>
          </div>
          <div className='description-form'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facilis minus amet repudiandae sapiente dolor. </p>
          </div>
          <div className='localidad'>
            <img src={localidad} alt='' />
            <p>Sena Complejo Central</p>
          </div>
          <div className='correo-from'>
            <img src={correo} alt='' />
            <p>Sena Complejo Central</p>
          </div>
          <div className='telefono-from'>
            <img src={telefono} alt='' />
            <p>Sena Complejo Central</p>
          </div>
          <div className='tex-redes'>
            <p>Lorem ipsum:</p>
          </div>
          <div className='social-icons'>
            <a href='#'>
              <img src={localidad} alt='' />
            </a>
            <a href='#'>
              <img src={correo} alt='' />
            </a>
            <a href='#'>
              <img src={telefono} alt='' />
            </a>
            <a href='#'>
              <img src={facebook} alt='' />
            </a>
          </div>
        </div>
        <form className='contact-form'>
          <div className='tex-contactanos'>
            <h1>Contactanos</h1>
          </div>
          <div className='container-info-from'>
            <input type='text' name='name' className='input' />
            <label>Nombre</label>
            <span>Nombre</span>
          </div>
          <div className='container-info-from'>
            <input type='email' name='email' className='input' />
            <label>Email:</label>
            <span>Email</span>
          </div>
          <div className='container-info-from'>
            <input type='tel' name='phone' className='input' />
            <label>Teléfono:</label>
            <span>Teléfono</span>
          </div>
          <div className='container-info-from textarea'>
            <textarea name='message' className='input' />
            <label>Mensaje:</label>
            <span>Mensaje</span>
          </div>
          <input type='submit' value='Enviar' className='btn' />
        </form>
      </div>
    </section>
  )
}

export default Contact
