import Titulo from './Titulo'
import AlternarTema from '../templates/AlternarTema'
import useAppData from '../../data/hook/useAppData'


interface TopbarProps{
    titulo: string,
    subtitulo: string
}

export default function Topbar(props: TopbarProps){

    const {tema, alternarTema} = useAppData()

    return(
        <div className={`flex`}>
            <div className={`flex`}>
                <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
            </div>
                <div className={`flex flex-grow justify-end`}>
                    <AlternarTema tema='dark' alternarTema={alternarTema}/>
                </div>
        </div>
    )
    
}