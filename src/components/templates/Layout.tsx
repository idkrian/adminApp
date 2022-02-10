import MenuLateral from './MenuLateral'
import Topbar from './Topbar'
import Conteudo from './Conteudo'
import useAppData from '../../data/hook/useAppData'

interface LayoutProps{
    titulo: string,
    subtitulo: string,
    children?: any
}

export default function Layout(props: LayoutProps){
    const {tema} = useAppData()

    return(
        <div className={`${tema} flex h-screen w-screen`}>
            <MenuLateral/>
            <div className={`flex flex-col dark:bg-gray-800 bg-gray-200 bg-gray w-full p-7`}>
                <Topbar titulo={props.titulo} subtitulo={props.subtitulo} />
                <Conteudo> 
                    {props.children}
                </Conteudo>
            </div>
        </div>
    )
    
}