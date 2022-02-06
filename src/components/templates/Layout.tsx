import MenuLateral from './MenuLateral'
import Topbar from './Topbar'
import Conteudo from './Conteudo'

interface LayoutProps{
    titulo: string,
    subtitulo: string,
    children?: any
}

export default function Layout(props: LayoutProps){
    return(
        <div className={`dark flex h-screen w-screen`}>
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