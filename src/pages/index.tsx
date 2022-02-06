import type { NextPage } from 'next'
import Layout from '../components/templates/Layout'

const Home: NextPage = () => {
  return (
    <h1 className="text-3xl font-bold">
      <Layout titulo='Home' subtitulo='Deboa?'/>
    </h1>
  )
}

export default Home
