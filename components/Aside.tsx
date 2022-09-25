import classNames from "classnames"
import { useContext, useState } from "react"
import Clients from "../assets/Clients"
import Home from "../assets/Home"
import RegisterIcon from "../assets/RegisterIcon"
import { AsideContext } from "../services/asideContext"
import BoxHover from "./BoxHover"
import IconSidebar from "./IconSidebar"

export const Aside = () => {

    const [hoverHome, setHome] = useState(false)
    const [hoverClients, setClients] = useState(false)
    const [hoverRegister, setRegister] = useState(false)

    const { active } = useContext(AsideContext)

    return (
        <aside className={classNames('bg-blue-400 min-h-screen flex flex-col gap-6 items-center py-24', {
            'col-span-1': !active,
            'col-span-2 animate-show-aside': active
        })}>
            <IconSidebar
                icon={<Home />}
                hoverBox={<BoxHover text={'Página Inicial'} />}
                hoverActive={hoverHome}
                setHover={setHome}
                path={'/main'}
                text={'Página Inicial'}
            />
            <IconSidebar
                icon={<Clients />}
                hoverBox={<BoxHover text={'Pacientes'} />}
                hoverActive={hoverClients}
                setHover={setClients}
                path={'/clients'}
                text={'Pacientes'}
            />
            <IconSidebar
                icon={<RegisterIcon />}
                hoverBox={<BoxHover text={'Cadastrar'} />}
                hoverActive={hoverRegister}
                setHover={setRegister}
                path={'/register'}
                text={'Cadastrar'}
            />
        </aside>
    )
}