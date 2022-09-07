import Link from "next/link"

const CardClient = () => {
    return (
        <div className="bg-gray-100 col-span-2 rounded-lg flex flex-col p-4 gap-3">
            <h2 className="text-lg"> <span className="font-medium">Id do paciente:</span> 00</h2>
            <hr className="border-gray-300" />
            <div className="grid grid-cols-6 text-sm gap-2">
                <span className="col-span-2 font-semibold">Nome:</span>  <span className="col-span-4 text-gray-500">example_name</span>
                <span className="col-span-2 font-semibold">Cidade:</span>  <span className="col-span-4 text-gray-500">Videira</span>
                <span className="col-span-2 font-semibold">Celular:</span>  <span className="col-span-4 text-gray-500">(49) 991613639</span>
            </div>
            <Link href={'/client'} passHref>
                <a className="text-blue-400 text-sm hover:text-blue-500 transition-colors text-center">Ver detalhes e consultas</a>
            </Link>
            <span className="text-red-400 text-center text-sm cursor-pointer hover:text-red-500 transition-colors">Excluir</span>
        </div>
    )
}

export default CardClient