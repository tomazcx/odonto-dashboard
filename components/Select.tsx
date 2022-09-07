const Select =() =>{
    return(
        <div className="flex items-center text-sm">
            <div className="bg-gray-200 px-2 py-1.5 rounded-l-lg">
                <label htmlFor="filter">Filtrar por:</label>
            </div>
            <select name="filter" id="filter" className="bg-gray-100 outline-none px-2 py-1.5 rounded-r-lg text-gray-600">
                <option value="0">Ordem alfabética</option>
                <option value="1">Ordem de registro</option>
            </select>
        </div>
    )
}

export default Select