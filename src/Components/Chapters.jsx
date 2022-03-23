import '../Style/Chapters.css'
import { Link } from 'react-router-dom'
import logo from '../statics/images/Logo.png'
import chapterImg from '../data/chapterImg'
import Loading from './Loading'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'

// import required modules
import { EffectCube, Pagination } from 'swiper'
import { useState } from 'react'
const Chapters = () => {
  const PagesChapters = ({ thumbnails, chapterText, ChapterName, linksEpisodes }) => {
    return (
      <div className='card-chapter'>
        <picture>
          <img className='img-chapter' src={thumbnails} alt='' />
        </picture>
        <Link to={linksEpisodes} className='link-episiodios'>
          <article className='chapter-text'>
            <h1>{chapterText}</h1>
            <p>¡{ChapterName}!</p>
          </article>
        </Link>
      </div>
    )
  }

  // const [loading, setLoading] = useState(true)

  /* if (loading === true) {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    return (
      <Loading />
    )
  } else { */
  return (
    <section>
      <div className='container-chapter'>
        <nav className='Chapters'>
          <picture>
            <img src={logo} alt='' />
          </picture>
          <article>
            <Link to='/' className='link-page'>
              Regresar
            </Link>
          </article>
        </nav>
        <Swiper
          effect='cube'
          grabCursor
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
          }}
          pagination
          modules={[EffectCube, Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <PagesChapters
              thumbnails={chapterImg[0]}
              chapterText='Capitulo 1'
              ChapterName='El dios legendario'
              linksEpisodes='/Comic/Episode-1'
            />
          </SwiperSlide>
          <SwiperSlide>
            <PagesChapters
              thumbnails={chapterImg[1]}
              chapterText='Capitulo 2'
              ChapterName='El entrenamiento'
              linksEpisodes='/Comic/Episode-2'
            />
          </SwiperSlide>
          <SwiperSlide>
            <PagesChapters
              thumbnails={chapterImg[2]}
              chapterText='Capitulo 3'
              ChapterName='El regreso'
              linksEpisodes='/Comic/Episode-3'
            />
          </SwiperSlide>
          <SwiperSlide>
            <PagesChapters
              thumbnails={chapterImg[3]}
              chapterText='Capitulo 4'
              ChapterName='La batalla'
              linksEpisodes='/Comic/Episode-4'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Chapters
