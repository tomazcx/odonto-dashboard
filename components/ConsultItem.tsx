import Trash from "../assets/Trash"

const ConsultItem = () => {
    return (
        <div className="grid grid-cols-12 bg-gray-100 rounded-md py-1">
            <span className="text-center col-span-2">22/08/2022</span>
            <span className="text-center col-span-2">28</span>
            <span className="text-center col-span-2">exo</span>
            <div className="col-span-2 col-start-12 cursor-pointer">
                <Trash />
            </div>
        </div>
    )
}

export default ConsultItem