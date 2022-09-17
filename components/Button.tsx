import Link from "next/link";

interface ButtonInterface {
    text: string;
    isBlue: boolean;
    isLink: boolean;
    path?: string;
    funClick? (e?:any):void;
}

const Button = ({ text, isBlue, isLink, path, funClick }: ButtonInterface) => {

    if (isLink) {
        return (
            <Link href={path ?? '/main'} passHref>
                <a className={`${isBlue ? 'bg-blue-400 hover:bg-blue-500' : 'bg-red-400 hover:bg-red-500'} transition-colors py-2 px-4 w-48 text-center rounded-lg text-white`}>
                    {text}
                </a>
            </Link>
        )
    }
    return (
        <button onClick={(e) => funClick?.(e)} className={`${isBlue ? 'bg-blue-400 hover:bg-blue-500' : 'bg-red-400 hover:bg-red-500'} transition-colors py-2 px-4 w-48 text-center rounded-lg text-white`}>
            {text}
        </button>
    )
}

export default Button