import { lazy, Suspense } from 'react'

import Nav from '../Components/NavPage'
import Loading from '../Components/Loading'
import Footer from '../Components/Footer'

const Home = lazy(() => import('../Components/Home'))
const AboutUs = lazy(() => import('../Components/About'))
const Proyect = lazy(() => import('../Components/Proyect'))
const Reviews = lazy(() => import('../Components/Reviews'))
const SectionComic = lazy(() => import('../Components/ComicPage'))
const Contact = lazy(() => import('../Components/Contact'))
// const Footer = lazy(() => import('../Components/Footer'))

const LandingPage = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<Loading />}>
        <Home />
        <AboutUs />
        <Proyect />
        <Reviews />
        <SectionComic />
        <Contact />
      </Suspense>
      <Footer />
    </>
  )
}

export default LandingPage
