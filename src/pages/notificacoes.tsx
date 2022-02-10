import type { NextPage } from 'next'
import Layout from '../components/templates/Layout'
import useAppData from '../data/hook/useAppData'

const notificacoes: NextPage = () => {
  const dados = useAppData()
  
  return (
    <h1 className="text-3xl font-bold ">
      <Layout titulo='Notificações' subtitulo='Aqui serão as notificações'>
        <p>{dados.tema}</p>
        <button onClick={dados.alternarTema}>Click</button>
      </Layout>
      
    </h1>
  )
}

export default notificacoes
