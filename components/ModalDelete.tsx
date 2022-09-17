import { useContext } from "react";
import { modalContext } from "../services/modalContext";
import Button from "./Button";

interface ModalInterface {
    closeFun(value: boolean): void;
    text: string;
}

const ModalDelete = ({ closeFun, text }: ModalInterface) => {

    const { setModal } = useContext(modalContext)

    const handleModal = (e: any) => {
        setModal(false)
        closeFun(false)
    }

    return (
        <div className="fixed top-[200px] z-20 left-1/2 transform gap-4 rounded-lg -translate-x-1/2 bg-gray-200 flex flex-col p-4">
            <h1 className="text-center text-xl">Deseja excluir {text}</h1>
            <hr className="border-gray-300" />
            <div className="flex gap-4">
                <Button funClick={handleModal} text='Cancelar' isBlue={true} isLink={false} />
                <Button text='Excluir' isBlue={false} isLink={false} />
            </div>
        </div>
    )
}

export default ModalDelete