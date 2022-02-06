interface ConteudoProps{
    children?: any
}

export default function Conteudo(props: ConteudoProps){
    return(
        <div className={` 
            flex flex-col mt-7 text-md
            dark:text-gray-200
        `} >
            <h1>{props.children}</h1>
            <p>Olalalalala</p>
        </div>
    )
    
}