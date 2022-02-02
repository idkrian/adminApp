import Titulo from './Titulo'

interface TopbarProps{
    titulo: string,
    subtitulo: string
}

export default function Topbar(props: TopbarProps){
    return(
        <div>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
        </div>
    )
    
}