import CardClient from "./CardClient"

interface ClientInterface {
    clientSlug:string;
    age: number;
    name: string;
    phoneNumber: string;
    city: string;
    email:string;
}

interface GridInterface{
    list: [ClientInterface]
    deleteFun (value:boolean):void
}

const GridClients = ({list, deleteFun} : GridInterface) => {

    return (
        <div className="grid grid-cols-10 gap-4">
            {list?.map((client : ClientInterface) => <CardClient info={client} deleteFun={deleteFun} />)}
        </div>
    )
}

export default GridClients