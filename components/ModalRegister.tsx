import TextArea from "./Textarea";
import X from "../assets/X";
import Input from "./Input";
import Button from "./Button";
import { useCallback, useContext } from "react";
import { modalContext } from "../services/modalContext";

interface ModalInterface {
    closeFun(value: boolean): void;
}

const ModalRegister = ({ closeFun }: ModalInterface) => {

    const {setModal} = useContext(modalContext)

    const handleModal = () =>{
        setModal(false)
        closeFun(false)
    }

    const resetForm = (e: any) => {
        const input = document.getElementById('form') as HTMLFormElement
        input.reset()
    }

    return (
        <div className="fixed z-20 w-1/2 top-[20px] rounded-lg left-1/2 transform -translate-x-1/2 gap-4 bg-gray-100 p-8 flex flex-col">
            <div className="flex items-center justify-between">
                <h1 className="text-xl">Registrar consulta</h1>
                <div className="cursor-pointer" onClick={() => handleModal()}>
                    <X color="#767676" />
                </div>
            </div>
            <hr className="border-gray-300" />
            <form action="" className="flex flex-col gap-4" id="form">
                <Input text="Data da consulta" required={true} type='date' bg="bg-white" id="date" />
                <Input text="Dentes" required={true} bg='bg-white' type='text' id="teeth" />
                <TextArea text="Procedimento" bg="bg-white" id="desc" />
            </form>
            <div className="flex items-center justify-end gap-4">
                <Button funClick={resetForm} text="Resetar campos" isBlue={false}  isLink={false} />
                <Button text="Cadastrar" isBlue={true}  isLink={false} />
            </div>
        </div>
    )
}

export default ModalRegister