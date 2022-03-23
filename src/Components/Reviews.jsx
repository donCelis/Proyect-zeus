import '../Style/Reviews.css'
import fotohombre from '../statics/images/hombre.jpg'
import iconestrellalle from '../statics/images/estrella-llena.png'
import iconestrellava from '../statics/images/estrella-vacia.png'
import { reviewsInfoDiego } from '../data/reviews'

const { NameClient, Descrition, profession } = reviewsInfoDiego

const Cards = ({ client, occupation, commentary, photo }) => {
  return (
    <div className='card'>
      <div className='head'>
        <div className='circulo' />
        <div className='img'>
          <img src={photo} alt='' />
        </div>
      </div>

      <div className='description'>
        <h3>{client}</h3>
        <h4>{occupation}</h4>
        <p>{commentary}</p>
      </div>

      <div className='calificacion'>
        <img src={iconestrellalle} alt='' />
        <img src={iconestrellalle} alt='' />
        <img src={iconestrellalle} alt='' />
        <img src={iconestrellava} alt='' />
        <img src={iconestrellava} alt='' />
      </div>
    </div>
  )
}

const Reviews = () => {
  return (
    <section className='reviews-section' id='Reviews'>
      <h1 className='title-section'>RESEÑAS</h1>
      <h5>...........................</h5>
      <div className='contenerdor-cards'>
        <Cards photo={fotohombre} client={NameClient} occupation={profession} commentary={Descrition} />
        <Cards photo={fotohombre} client={NameClient} occupation={profession} commentary={Descrition} />
        <Cards photo={fotohombre} client={NameClient} occupation={profession} commentary={Descrition} />
      </div>
    </section>
  )
}

export default Reviews
