import MagnifyingGlass from "../assets/MagnifyingGlass"

interface InputInterface{
    funSearch (text:string):void;
}

const SearchInput = ({funSearch} : InputInterface) => {

    const handleInput = (e : string) =>{
        funSearch(e)
        console.log(e)
    }

    return(
        <div className="flex bg-gray-200 rounded-lg items-center py-1.5 px-3">
            <input type="text" onChange={(e) => handleInput(e.target.value)} className="outline-none bg-transparent text-sm" placeholder="Pesquisar por nome..." />
            <MagnifyingGlass />
        </div>
    )
}

export default SearchInput