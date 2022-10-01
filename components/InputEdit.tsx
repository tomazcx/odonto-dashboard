interface InputInterface{
    text: string;
    defaultValue?: string | number;
    type:string;
    id:string;
    funInput(e:any):void
}

export const InputEdit =({text, funInput, defaultValue, type, id} : InputInterface) =>{
    return(
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={id}>{text}</label>
            <input onChange={(e) => funInput(e)} type={type} name={id} id={id} className="bg-gray-100 rounded-lg px-2 py-1" defaultValue={defaultValue?? ""} />
        </div>
    )
}