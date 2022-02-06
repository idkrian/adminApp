import type { NextPage } from 'next'
import Layout from '../components/templates/Layout'

const configuracoes: NextPage = () => {
  return (
    <h1 className="text-3xl font-bold">
      <Layout titulo='Configurações' subtitulo='Aqui serão as configurações'/>
    </h1>
  )
}

export default configuracoes
