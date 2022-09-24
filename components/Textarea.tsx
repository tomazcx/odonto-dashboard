interface InputInterface{
    text: string;
    id: string;
    bg?: string;
    required: boolean;
    funChange? (e:any):void
}

const TextArea = ({text, id, bg, required, funChange} : InputInterface) => {
    return (
        <div className="flex-col flex gap-4 col-span-12">
            <label htmlFor={id}>{text}{required ? <span className="text-red-400">*</span> : ''}</label>
            <textarea onChange={(e) => funChange?.(e)} required={required} name={id} id={id} cols={30} rows={10} className={`${bg?? 'bg-gray-100'} rounded-lg p-2`}></textarea>
        </div>
    )
}

export default TextArea