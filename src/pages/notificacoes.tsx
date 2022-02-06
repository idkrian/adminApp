import type { NextPage } from 'next'
import Layout from '../components/templates/Layout'

const notificacoes: NextPage = () => {
  return (
    <h1 className="text-3xl font-bold ">
      <Layout titulo='Notificações' subtitulo='Aqui serão as notificações'/>
    </h1>
  )
}

export default notificacoes
