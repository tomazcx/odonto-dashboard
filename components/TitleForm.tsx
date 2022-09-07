import Caret from "../assets/Caret"

interface TitleInterface{
    text: string;
}

const TitleForm = ({text} : TitleInterface) => {
    return (
        <div className="col-span-5">
            <span className="flex gap-6 items-center">
                <Caret />
                <h2 className="font-semibold ">{text}</h2>
            </span>
        </div>
    )
}

export default TitleForm