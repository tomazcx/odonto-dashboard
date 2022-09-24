import ClientItem from "./ClientItem"

interface ClientInterface {
    age: number;
    name: string;
    phoneNumber: string;
    city: string;
    id: string;

}

interface ClientsInterface{
    list: ClientInterface[]
    deleteModal (id:string):void
}

const ListClients = ({list, deleteModal} : ClientsInterface) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-12 text-sm">
                <span className="col-span-2 text-center">
                    Nome
                </span>
                <span className="col-span-2 text-center">
                    Idade
                </span>
                <span className="col-span-2 text-center">
                    Cidade
                </span>
                <span className="col-span-2 text-center">
                    Número de celular
                </span>
            </div>
            <div className="flex flex-col gap-2 text-sm">
               {list?.map((client : ClientInterface) => <ClientItem info={client} deleteModal={deleteModal} />)} 
            </div>
        </div>
    )
}

export default ListClients