import { useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import X from "../assets/X";
import { EDIT_CLIENT } from "../graphql/mutations/editClient";
import { LOAD_INFO } from "../graphql/queries/getClientInfo";
import Button from "./Button"
import { InputEdit } from "./InputEdit"

interface EditInterface{
    info: {
        name:string;
        email?:string;
        age:number;
        phoneNumber:string;
        city:string;
        address?:string;
        district?:string;
        budget?:string;
        budgetDescription?:string;
        anamnese?:string;
    },
    id: string;
    funModal(value:boolean):void;
}



export const ModalEdit = ({info, funModal, id}: EditInterface) => {

    const [formData, setData] = useState<{[key: string]:any}>({})

    const [updateClient] = useMutation(EDIT_CLIENT, {
        onCompleted: () => funModal(false),
        refetchQueries: [{query: LOAD_INFO, variables:{id: id}}]
    })

    const resetForm = (e: any) => {
        e.preventDefault()
        const input = document.getElementById('form-register') as HTMLFormElement
        input.reset()
    }

    const handleInput = (e: any) => {
        const name = e.target.name
        let value = e.target.value

        if (e.target.type === 'number') {
            value = Number(value)
        }

        setData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()

        console.log(formData)
        updateClient({
            variables:{...formData, id:id}
        })
    }


    return (
        <form onSubmit={(e: FormEvent) => handleSubmit(e)} className="grid grid-cols-12 gap-4" id="form-register">
            <h1 className="flex col-span-12 items-center justify-between">
                <span className="text-lg font-semibold">Editar informações</span>
                <div className="cursor-pointer" onClick={() => funModal(false)}>
                    <X color="#767676" />
                </div>
            </h1>
            <div className="col-span-6 flex flex-col gap-6 ">
                <div className="flex gap-3">
                    <InputEdit funInput={handleInput} text="Nome:" type="text" id="name" defaultValue={info.name} />
                    <InputEdit funInput={handleInput} text="Email:" type="email" id="email" defaultValue={info.email} />
                </div>
                <div className="flex gap-3">
                    <InputEdit funInput={handleInput} text="Idade:" type="number" id="age" defaultValue={info.age} />
                    <InputEdit funInput={handleInput} text="Número de celular:" type="text" id="phoneNumber" defaultValue={info.phoneNumber} />
                </div>
                <InputEdit funInput={handleInput} text="Cidade:" type="text" id="city" defaultValue={info.city} />
                <InputEdit funInput={handleInput} text="Endereço:" type="text" id="address" defaultValue={info.address} />
                <InputEdit funInput={handleInput} text="Bairro:" type="text" id="district" defaultValue={info.district} />
            </div>
            <div className="col-span-6 flex flex-col gap-4">
                <InputEdit funInput={handleInput} text="Orçamento:" type="text" id="budget" defaultValue={info.budget} />
                <div className="flex flex-col gap-3">
                    <label htmlFor="">Observações:</label>
                    <textarea onChange={(e) => handleInput(e)} name="budgetDescription" className="p-1 bg-gray-100 rounded-lg" id="budgetDescription" defaultValue={info.budgetDescription} cols={30} rows={5}></textarea>
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="">Anamnese:</label>
                    <textarea onChange={(e) => handleInput(e)} name="anamnese" className="p-1 bg-gray-100 rounded-lg" id="anamnese" defaultValue={info.anamnese} cols={30} rows={5}></textarea>
                </div>
            </div>
            <div className="col-span-12 flex items-center justify-end gap-4">
                <Button text="Resetar Campos" isBlue={false} isLink={false} funClick={resetForm} />
                <Button text="Editar" isBlue={true} isLink={false} />
            </div>
        </form>
    )
}