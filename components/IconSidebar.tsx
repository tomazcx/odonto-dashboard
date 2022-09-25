import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useContext } from "react";
import { AsideContext } from "../services/asideContext";

interface IconInterface {
    icon: ReactNode;
    hoverBox: ReactNode;
    hoverActive: boolean;
    setHover(value: boolean): void;
    path: string;
    text: string;
}

const IconSidebar = (props: IconInterface) => {

    const { active, setActive } = useContext(AsideContext)
    const router = useRouter().pathname

    return (
        <Link href={props.path} passHref>
            {!active ?
                <a
                    className={
                        classNames("cursor-pointer rounded-full p-2 transition-colors hover:bg-blue-500 relative", {
                            "bg-blue-500": router === props.path
                        })}
                    onMouseEnter={() => props.setHover(true)}
                    onMouseLeave={() => props.setHover(false)}
                    >
                    {props.icon}
                    {props.hoverActive ? props.hoverBox : <></>}
                </a> :
                <a
                    onClick={() => {setActive(false)}}
                    className={classNames("flex  items-center w-full gap-4 px-4 cursor-pointer rounded-full p-2 transition-colors hover:bg-blue-500", {
                        "bg-blue-500": router === props.path
                    })}>
                    {props.icon}
                    <span className="text-center text-white whitespace-nowrap ">{props.text}</span>
                </a>
            }

        </Link>
    )
}

export default IconSidebar