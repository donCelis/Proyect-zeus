import '../Style/Proyect.css'
import iconProyect from '../statics/images/proyect.png'
import iconContent from '../statics/images/content.png'
import iconComic from '../statics/images/comic.png'

const Proyect = () => {
  return (
    <section className='proyect' id='Proyect'>
      <h1 className='title-section'>PROYECTO</h1>
      <h5>¡Nuestro proyecto es exclusivo para ti!</h5>
      <div className='flex'>
        <div className='info-proyect'>
          <figure className='circle'>
            <img className='icon-proyect' src={iconProyect} alt='' />
          </figure>
          <h1>Nuestro Proyecto</h1>
          <p>
            Nuestro proyecto es promover el conocimiento de la mitologia griega,
            a travez de un comic digital interactivo con el cual queremos
            enseñarte y que la vez disfrutes
          </p>
        </div>
        <div className='info-content'>
          <figure className='circle'>
            <img src={iconContent} className='icon-content' alt='' />
          </figure>
          <h1>Nuestro Contenido</h1>
          <p>
            Nuestro contenido, esta relacionado con la mitología griega, en este
            caso se habla de la historia de zeus
          </p>
        </div>
        <div className='info-comic'>
          <figure className='circle'>
            <img src={iconComic} className='icon-comic' alt='' />
          </figure>
          <h1>Comic interactivo</h1>
          <p>
            El comic que esta relacionado con la mitologia griega, donde este
            llevará aprendizaje para aquellas personas que no tengan
            conociemiento de la mitología griega.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Proyect
