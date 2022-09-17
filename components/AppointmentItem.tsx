import { useContext } from "react"
import Trash from "../assets/Trash"
import { modalContext } from "../services/modalContext"

interface ItemInterface{
    funModal (value: boolean):void;
    setText(text:string):void;
    isModalActive: boolean;
}

const AppointmentItem = ({funModal, setText, isModalActive} : ItemInterface) => {

    const {setModal} = useContext(modalContext)

    const handleModal = () =>{
        if(isModalActive === false){
            setModal(true)
            funModal(true)
            setText('a consulta?')
        }
    }

    return (
        <div className="grid grid-cols-12 bg-gray-100 rounded-md py-1">
            <span className="text-center col-span-2">22/08/2022</span>
            <span className="text-center col-span-2">28</span>
            <span className="text-center col-span-2">exo</span>
            <div onClick={() =>handleModal()} className="col-span-2 col-start-12 cursor-pointer">
                <Trash />
            </div>
        </div>
    )
}

export default AppointmentItem