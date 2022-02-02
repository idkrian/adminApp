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
        <div className={`flex h-screen w-screen`}>
            <MenuLateral/>
            <div className={`flex flex-col bg-red-500 w-full p-7`}>
                <Topbar titulo={props.titulo} subtitulo={props.subtitulo} />
                <Conteudo> 
                    {props.children}
                </Conteudo>
            </div>
        </div>
    )
    
}