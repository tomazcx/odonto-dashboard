interface SelectInterface{
    funFilter(value:number):void
}

const Select =({funFilter} : SelectInterface) =>{
    return(
        <div className="flex items-center text-sm">
            <div className="bg-gray-200 px-2 py-1.5 rounded-l-lg">
                <label htmlFor="filter">Organizar por:</label>
            </div>
            <select onChange={(e) => funFilter(Number(e.target.value))} name="filter" id="filter" className="bg-gray-100 outline-none px-2 py-1.5 rounded-r-lg text-gray-600">
                <option value="0">Ordem alfabética</option>
                <option value="1">Mais velho para o mais novo</option>
                <option value="2">Mais novo para o mais velho</option>
            </select>
        </div>
    )
}

export default Select