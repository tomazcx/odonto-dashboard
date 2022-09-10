import Link from "next/link";

interface ButtonInterface {
    text: string;
    color: string;
    isLink: boolean;
    path?: string;
    funClick? (e?:any):void;
}

const Button = ({ text, color, isLink, path, funClick }: ButtonInterface) => {

    if (isLink) {
        return (
            <Link href={path ?? '/main'} passHref>
                <a className={`bg-${color}-400 hover:bg-${color}-500 transition-colors py-2 px-4 w-48 text-center rounded-lg text-white`}>
                    {text}
                </a>
            </Link>
        )
    }
    return (
        <button onClick={(e) => funClick?.(e)} className={`bg-${color}-400 hover:bg-${color}-500 transition-colors py-2 px-4 w-48 text-center rounded-lg text-white`}>
            {text}
        </button>
    )
}

export default Button