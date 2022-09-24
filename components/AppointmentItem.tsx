import { info } from "console";
import { useContext } from "react"
import Trash from "../assets/Trash"
import { modalContext } from "../services/modalContext"

interface ItemInterface{
    funModal (value: boolean):void;
    setText(text:string):void;
    isModalActive: boolean;
    info: {
        date: string;
        teeth: string;
        proccedure: string;
    }
}

const AppointmentItem = ({funModal, setText, isModalActive, info} : ItemInterface) => {

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
            <span className="text-center col-span-2">{info.date}</span>
            <span className="text-center col-span-2">{info.teeth}</span>
            <span className="text-center col-span-2">{info.proccedure}</span>
            <div onClick={() =>handleModal()} className="col-span-2 col-start-12 cursor-pointer">
                <Trash />
            </div>
        </div>
    )
}

export default AppointmentItem