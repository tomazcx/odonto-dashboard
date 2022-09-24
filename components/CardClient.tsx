import Link from "next/link"
import { useContext } from "react";
import { modalContext } from "../services/modalContext";

interface ClientInterface {
    deleteModal(id: string): void;
    info: {
        name: string;
        age: number;
        city: string;
        phoneNumber: string;
        email:string;
        id:string;
    }
}

const CardClient = ({ deleteModal, info }: ClientInterface) => {

    const { setModal } = useContext(modalContext)

    const handleDelete = () => {
        setModal(true)
        deleteModal(info.id)
    }

    return (
        <div className="bg-gray-100 col-span-2 rounded-lg flex flex-col p-4 gap-3">
            <h2 className="text-lg"> <span className="font-medium">{info.name} </span></h2>
            <hr className="border-gray-300" />
            <div className="grid grid-cols-6 text-sm gap-2">
                <span className="col-span-5">{info.email}</span>
                <span className="col-span-2 font-semibold">Idade:</span>  <span className="col-span-4 text-gray-500">{info.age}</span>
                <span className="col-span-2 font-semibold">Cidade:</span>  <span className="col-span-4 text-gray-500">{info.city}</span>
                <span className="col-span-2 font-semibold">Celular:</span>  <span className="col-span-4 text-gray-500">{info.phoneNumber}</span>
            </div>
            <Link href={{ pathname: 'client', query: { id: info.id } }} passHref>
                <a onClick={() => setModal(false)} className="text-blue-400 text-sm hover:text-blue-500 transition-colors text-center">Ver detalhes e consultas</a>
            </Link>
            <span onClick={() => handleDelete()} className="text-red-400 text-center text-sm cursor-pointer hover:text-red-500 transition-colors">Excluir</span>
        </div>
    )
}

export default CardClient