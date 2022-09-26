interface SelectInterface{
    funFilter(value:number):void
}

const Select =({funFilter} : SelectInterface) =>{
    return(
        <div className="flex items-center text-sm">
            <div className="bg-gray-200 px-2 py-1.5 rounded-l-lg">
                <label htmlFor="filter">Ordenar por:</label>
            </div>
            <select onChange={(e) => funFilter(Number(e.target.value))} name="filter" id="filter" className="bg-gray-100 outline-none px-2 py-1.5 rounded-r-lg text-gray-600">
                <option value="0">Registros mais recentes</option>
                <option value="1">Registros mais antigos</option>
                <option value="2">Ordem Alfabética </option>
                <option value="3">Idade (Velho para novo)</option>
                <option value="4">Idade (Novo para velho)</option>
            </select>
        </div>
    )
}

export default Select