interface InputInterface{
    text: string;
    id: string;
    bg?: string;
}

const TextArea = ({text, id, bg} : InputInterface) => {
    return (
        <div className="flex-col flex gap-4 col-span-12">
            <label htmlFor={id}>{text}</label>
            <textarea name={id} id={id} cols={30} rows={10} className={`${bg?? 'bg-gray-100'} rounded-lg p-2`}></textarea>
        </div>
    )
}

export default TextArea