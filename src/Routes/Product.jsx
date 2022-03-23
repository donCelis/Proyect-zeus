// import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Loading from '../Components/Loading'
// import Chapters from '../Components/Chapters'

const Chapters = lazy(() => import('../Components/Chapters'))

const ProductComic = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Chapters />
    </Suspense>
  )
}

export default ProductComic
