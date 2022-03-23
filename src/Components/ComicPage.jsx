import '../Style/comicPage.css'
import { Link } from 'react-router-dom'
import iconEnter from '../statics/images/ingresar.png'

const SectionComic = () => {
  return (
    <section className='comicPage' id='Comic'>
      <h1 className='title-section'>Comic</h1>
      <h5>¡El comic interactivo que te ofrecemos!</h5>
      <div className='cover-page'>
        <h3>2022</h3>
        <p>Es un webcomic que ofrece
          interactividad y revive la historia
          del dios mas poderoso Zeus  y da
          conocer la historia fundamentada
          por los griegos
        </p>
        <button className='enter'>
          <picture>
            <img className='iconEnter' src={iconEnter} alt='' />
          </picture>
          <Link className='link-comic' to='/Comic'>Ingresar</Link>
        </button>
      </div>
    </section>
  )
}

export default SectionComic
