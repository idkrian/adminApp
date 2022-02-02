import type { NextPage } from 'next'
import Layout from '../components/templates/Layout'

const Home: NextPage = () => {
  return (
    <h1 className="text-3xl font-bold underline">
      <Layout titulo='Olá mundo' subtitulo='Deboa?'/>
    </h1>
  )
}

export default Home
