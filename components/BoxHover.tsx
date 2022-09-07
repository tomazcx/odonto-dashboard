import { useContext } from "react"

interface TextInterface{
    text: String
}

const BoxHover = ({text}: TextInterface) =>{


    return(
        <div className="bg-gray-100 whitespace-nowrap px-6 text-black text-sm  rounded-lg text-center py-2 absolute left-24 bottom-2">
            <span>{text}</span>
        </div>
    )
}

export default BoxHover