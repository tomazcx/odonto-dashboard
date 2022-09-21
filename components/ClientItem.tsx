import Link from "next/link"
import { useContext } from "react";
import Trash from "../assets/Trash"
import { modalContext } from "../services/modalContext";

interface ClientInterface{
    info: {
        clientSlug:string;
        age: number;
        name: string;
        phoneNumber: string;
        city: string;
    }
    deleteFun(value:boolean):void;
}

const ClientItem = ({deleteFun, info} : ClientInterface) => {

    const {setModal} = useContext(modalContext)

    const handleDelete = () =>{
        setModal(true)
        deleteFun(true)
    }

    return (
        <div className="bg-gray-100 rounded-lg w-full grid grid-cols-12 py-2">
            <span className="col-span-2 text-center">{info.name}</span>
            <span className="col-span-2 text-center">{info.age}</span>
            <span className="col-span-2 text-center">{info.city}</span>
            <span className="col-span-2 text-center">{info.phoneNumber}</span>
            <Link href={{pathname: '/client', query: {slug: info.clientSlug}}} passHref>
                <a onClick={() => setModal(false)} className="col-start-10 col-span-2 text-blue-400 hover:text-blue-500 transition-colors">
                    Ver detalhes e consultas
                </a>
            </Link>
            <div onClick={() => handleDelete()} className="cursor-pointer col-start-12 col-span-2">
                <Trash />
            </div>
        </div>
    )
}

export default ClientItem