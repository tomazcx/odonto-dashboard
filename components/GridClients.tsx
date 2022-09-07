import CardClient from "./CardClient"

interface GridInterface{
    list?: string[]
}

const GridClients = ({list} : GridInterface) => {
    return (
        <div className="grid grid-cols-10 gap-4">
            {list?.map(client => <CardClient />)}
        </div>
    )
}

export default GridClients