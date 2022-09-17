import { useContext } from "react"
import List from "../assets/List"
import UserCircle from "../assets/UserCircle"
import { AsideContext } from "../services/asideContext"
import classNames from 'classnames'
import X from "../assets/X"
import { modalContext } from "../services/modalContext"

export const Header = () => {

    const {active, setActive} = useContext(AsideContext)
    const {modal} = useContext(modalContext)

    return (
        <header className={classNames("grid grid-cols-12 items-center bg-gray-200" ,{
            'opacity-50': modal
        })}>
            <div className={classNames('bg-blue-500 flex py-2 items-center', {
                'col-span-1 justify-center' : !active,
                'col-span-2 justify-between px-4 animate-show-aside': active
            })}>
                <div className="cursor-pointer" onClick={() => {
                    if(modal === false){
                        setActive(!active)}
                    }
                    
                }>
                    <List />
                </div>

                {active ? <div className="cursor-pointer" onClick={() => setActive(false)}><X></X></div>  : <></>}
            </div>
            <div className={`${active ? 'col-span-10' : 'col-span-11'} flex-1 w-full pl-4`}>
                <div className="flex items-center gap-4">
                    <span>Olá, Fabio!</span>
                    <UserCircle />
                </div>
            </div>
        </header>
    )
}