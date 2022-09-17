import ClientItem from "./ClientItem"

interface ClientsInterface{
    list?: string[]
    deleteFun (value:boolean):void
}

const ListClients = ({list, deleteFun} : ClientsInterface) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-12 text-sm">
                <span className="col-span-2 text-center">
                    Id
                </span>
                <span className="col-span-2 text-center">
                    Nome
                </span>
                <span className="col-span-2 text-center">
                    Cidade
                </span>
                <span className="col-span-2 text-center">
                    Número de celular
                </span>
            </div>
            <div className="flex flex-col gap-2 text-sm">
               {list?.map(client => <ClientItem deleteFun={deleteFun} />)} 
            </div>
        </div>
    )
}

export default ListClients