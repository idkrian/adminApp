import MenuItem from "./MenuItem"
import { HomeIcon, ConfigIcon, NotificationIcon, ExitIcon } from "../icons"
import Logo from './Logo'

export default function MenuLateral() {
  return (
        <aside className={` flex flex-col 
        dark:bg-gray-900 dark:text-gray-200
        bg-gray-00 text-gray-900
        `}>
          <div className={`flex flex-col h-20 w-20 bg-gradient-to-r from-indigo-500 
          to bg-purple-500 justify-center items-center`
          }>
            <Logo/>
          </div>
          <ul className={` flex-grow `}>
            <MenuItem url="/" texto="Inicio" icone={HomeIcon}></MenuItem>
            <MenuItem url="/configuracoes" texto="Configurações" icone={ConfigIcon}></MenuItem>
            <MenuItem url="/notificacoes" texto="Notificações" icone={NotificationIcon}></MenuItem>
          </ul>
          <ul>
            <MenuItem url="/" texto="Sair" onClick={() => console.log('Clicou')} 
            icone={ExitIcon} className={`text-red-600 hover:bg-red-400 hover:text-white`}
            ></MenuItem>
          </ul>
        </aside>
  )
}



