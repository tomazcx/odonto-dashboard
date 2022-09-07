import Link from "next/link"
import Trash from "../assets/Trash"

const ClientItem = () => {
    return (
        <div className="bg-gray-100 rounded-lg w-full grid grid-cols-12 py-2">
            <span className="col-span-2 text-center">00</span>
            <span className="col-span-2 text-center">example_name</span>
            <span className="col-span-2 text-center">Videira</span>
            <span className="col-span-2 text-center">(49) 991613639</span>
            <Link href={'/client'} passHref>
                <a className="col-start-10 col-span-2 text-blue-400 hover:text-blue-500 transition-colors">
                    Ver detalhes e consultas
                </a>
            </Link>
            <div className="cursor-pointer col-start-12 col-span-2">
                <Trash />
            </div>
        </div>
    )
}

export default ClientItem