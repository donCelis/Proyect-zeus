import '../Style/Home.css'
import iconHome from '../statics/images/icon-home.png'

const Home = () => {
  return (
    <section className='home' id='Home'>
      <div className='aspect'>
        <div className='text-home'>
          <img src={iconHome} alt='' />
          <h1 className='title-home'>Bienvenidos</h1>
          <p className='subtext-home'>
            ...................
          </p>
        </div>
      </div>

    </section>
  )
}

export default Home
