import CardClient from "./CardClient"

interface ClientInterface {
    age: number;
    name: string;
    phoneNumber: string;
    city: string;
    email:string;
    id: string;
}

interface GridInterface{
    list: ClientInterface[]
    deleteModal (id:string):void
}

const GridClients = ({list, deleteModal} : GridInterface) => {

    return (
        <div className="grid grid-cols-10 gap-4">
            {list?.map((client : ClientInterface) => <CardClient info={client} deleteModal={deleteModal} />)}
        </div>
    )
}

export default GridClients