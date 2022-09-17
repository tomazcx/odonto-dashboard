interface InputInterface{
    required: boolean;
    text: string;
    type: string;
    id: string;
    bg?: string;
}

const Input = ({required, text, type, id, bg} : InputInterface) => {
    return (
        <div className="flex flex-col gap-2 col-span-6">
            <label htmlFor={id} className='text-sm'>
                {text}{required ? <span className="text-red-400">*</span> : <></>}
            </label>
            <input type={type} id={id} name={id} required={required} className={`${bg?? 'bg-gray-100'} rounded-lg px-2 py-1`} />
        </div>
    )
}

export default Input