import TextArea from "./Textarea";
import X from "../assets/X";
import Input from "./Input";
import Button from "./Button";
import { useContext, useState } from "react";
import { modalContext } from "../services/modalContext";
import { CREATE_APPOINTMENT } from "../graphql/mutations/createAppointment";
import { useMutation } from "@apollo/client";
import { LOAD_CLIENTS } from "../graphql/queries/getClients";
import { LOAD_INFO } from "../graphql/queries/getClientInfo";

interface ModalInterface {
    closeFun(value: boolean): void;
    clientId: string;
}

const ModalRegister = ({ closeFun, clientId }: ModalInterface) => {

    const {setModal} = useContext(modalContext)
    const [formData, setData] = useState<{ [key: string]: any }>({})
    
    const handleInput = (e: any) => {
        const name = e.target.name
        let value = e.target.value

        if (e.target.type === 'number') {
            value = Number(value)
        }

        setData(prevState => ({ ...prevState, [name]: value }))
    }


    const handleModal = () =>{
        setModal(false)
        closeFun(false)
    }

    const [registerAppointment] = useMutation(CREATE_APPOINTMENT, {
        onCompleted: () => handleModal(),
        onError: (error) => console.log(error)
    })

    const resetForm = (e: any) => {
        const input = document.getElementById('form') as HTMLFormElement
        input.reset()
    }

    
    const handleRegister = () => {

        console.log(formData)

        registerAppointment({
            variables: {
                date: formData.date,
                teeth: formData.teeth,
                proccedure: formData.desc,
                clientID: clientId
            },
            refetchQueries: [{query: LOAD_INFO, variables:{id:clientId}}]
        })
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
                <Input funChange={handleInput} text="Data da consulta" required={true} type='string' bg="bg-white" id="date" />
                <Input funChange={handleInput} text="Dentes" required={true} bg='bg-white' type='text' id="teeth" />
                <TextArea funChange={handleInput} text="Procedimento" required={true} bg="bg-white" id="desc" />
            </form>
            <div className="flex items-center justify-end gap-4">
                <Button funClick={resetForm} text="Resetar campos" isBlue={false}  isLink={false} />
                <Button funClick={handleRegister} text="Cadastrar" isBlue={true}  isLink={false} />
            </div>
        </div>
    )
}

export default ModalRegister