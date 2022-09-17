import CardClient from "./CardClient"

interface GridInterface{
    deleteFun (value: boolean):void
    list?: string[]
}

const GridClients = ({list, deleteFun} : GridInterface) => {

    return (
        <div className="grid grid-cols-10 gap-4">
            {list?.map(client => <CardClient deleteFun={deleteFun} />)}
        </div>
    )
}

export default GridClients