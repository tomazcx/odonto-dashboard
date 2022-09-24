import { FormEvent, useContext, useState } from "react"
import TextArea from "../components/Textarea"
import TitleForm from "../components/TitleForm"
import Input from "../components/Input"
import Layout from "../components/Layout"
import { AsideContext } from "../services/asideContext"
import Button from "../components/Button"
import { CREATE_CLIENT } from "../graphql/mutations/createClient"
import { useMutation } from "@apollo/client"
import { ToastContainer, toast } from 'react-toastify'
import accents from 'remove-accents'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {

    const { active } = useContext(AsideContext)

    const [formData, setData] = useState<{ [key: string]: any }>({})
    const [createClient] = useMutation(CREATE_CLIENT, {
        onCompleted: () => {
            toast("Paciente cadastrado com sucesso!")
        }
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

    const handleSubmit = (e: FormEvent) => {

        e.preventDefault()
        const slug = accents.remove(formData.name.toLowerCase().replaceAll(" ", "-"))
        createClient(
            {
                variables: {
                    slug: slug,
                    address: formData.address,
                    age: formData.age,
                    budget: formData.budget,
                    city: formData.city,
                    budgetDescription: formData.budgetDescription,
                    district: formData.district,
                    email: formData.email,
                    name: formData.name,
                    phoneNumber: formData.phoneNumber,
                    anamnese: formData.anamnese,
                }
            }
        )

    }

    return (
        <Layout>
            <section className={`${active ? 'col-span-10' : 'col-span-11'} p-12 flex flex-col gap-4`}>
                <ToastContainer autoClose={500} pauseOnHover={false} hideProgressBar={true} />
                <h1 className="text-xl">Cadastrar Paciente</h1>
                <hr className="border-gray-200" />
                <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4" id="form-register">
                    <div className="grid grid-cols-12 py-4">
                        <TitleForm text="Informações pessoais" />
                        <div className="col-span-7 grid grid-cols-12 gap-8">
                            <Input text="Nome" funChange={handleInput} required={true} type='text' id="name" />
                            <Input text="Email" funChange={handleInput} required={true} type='email' id="email" />
                            <Input text="Idade" funChange={handleInput} required={true} type='number' id="age" />
                            <Input text="Número de Telefone" funChange={handleInput} required={true} type='text' id="phoneNumber" />
                        </div>

                        <hr className="col-span-12 mt-12 border-gray-200" />
                    </div>
                    <div className="grid grid-cols-12 py-4">
                        <TitleForm text="Endereço" />
                        <div className="col-span-7 grid grid-cols-12 gap-8">
                            <Input text="Cidade" funChange={handleInput} required={true} type='text' id="city" />
                            <Input text="Rua e número" funChange={handleInput} required={false} type='text' id="address" />
                            <Input text="Bairro" funChange={handleInput} required={false} type='text' id="district" />
                        </div>
                        <hr className="col-span-12 mt-12 border-gray-200" />
                    </div>
                    <div className="grid grid-cols-12 py-4">
                        <TitleForm text="Orçamento" />
                        <div className="col-span-7 grid grid-cols-12 gap-8">
                            <Input text="Orçamento" funChange={handleInput} required={false} type='text' id="budget" />
                            <TextArea funChange={handleInput} required={false} text="Observações" id="budgetDescription" />
                        </div>
                        <hr className="col-span-12 mt-12 border-gray-200" />
                    </div>
                    <div className="grid grid-cols-12 py-4">
                        <TitleForm text="Anamnese" />
                        <div className="col-span-7 grid grid-cols-12 gap-8">
                            <TextArea funChange={handleInput} required={false} text="Descrição" id="anamnese" />
                        </div>
                        <hr className="col-span-12 mt-12 border-gray-200" />
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        <Button funClick={resetForm} text='Resetar campos' isBlue={false} isLink={false} />
                        <Button text='Cadastrar' isBlue={true} isLink={false} />
                    </div>
                </form>
            </section>
        </Layout>
    )
}

export default Register