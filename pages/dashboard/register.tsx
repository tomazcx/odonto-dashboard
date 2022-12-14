import { FormEvent, useContext, useState } from "react"
import TextArea from "../../components/Textarea"
import TitleForm from "../../components/TitleForm"
import Input from "../../components/Input"
import Layout from "../../components/Layout"
import { AsideContext } from "../../services/asideContext"
import Button from "../../components/Button"
import { CREATE_CLIENT } from "../../graphql/mutations/createClient"
import { useMutation } from "@apollo/client"
import { ToastContainer, toast } from 'react-toastify'
import accents from 'remove-accents'
import 'react-toastify/dist/ReactToastify.css'
import { LOAD_CLIENTS } from "../../graphql/queries/getClients"

const Register = () => {

    const { active } = useContext(AsideContext)

    const [formData, setData] = useState<{ [key: string]: any }>({})
    const [createClient] = useMutation(CREATE_CLIENT, {
        onCompleted: () => {
            toast("Paciente cadastrado com sucesso!")
        },
        refetchQueries: [{ query: LOAD_CLIENTS }]
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
        createClient(
            {
                variables: {...formData}
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
                        <TitleForm text="Informa????es pessoais" />
                        <div className="col-span-7 grid grid-cols-12 gap-8">
                            <Input text="Nome" funChange={handleInput} required={true} type='text' id="name" />
                            <Input text="Email" funChange={handleInput} required={false} type='email' id="email" />
                            <Input text="Idade" funChange={handleInput} required={true} type='number' id="age" />
                            <Input text="N??mero de Telefone" funChange={handleInput} required={true} type='text' id="phoneNumber" />
                        </div>

                        <hr className="col-span-12 mt-12 border-gray-200" />
                    </div>
                    <div className="grid grid-cols-12 py-4">
                        <TitleForm text="Endere??o" />
                        <div className="col-span-7 grid grid-cols-12 gap-8">
                            <Input text="Cidade" funChange={handleInput} required={true} type='text' id="city" />
                            <Input text="Rua e n??mero" funChange={handleInput} required={false} type='text' id="address" />
                            <Input text="Bairro" funChange={handleInput} required={false} type='text' id="district" />
                        </div>
                        <hr className="col-span-12 mt-12 border-gray-200" />
                    </div>
                    <div className="grid grid-cols-12 py-4">
                        <TitleForm text="Or??amento" />
                        <div className="col-span-7 grid grid-cols-12 gap-8">
                            <Input text="Or??amento" funChange={handleInput} required={false} type='text' id="budget" />
                            <TextArea funChange={handleInput} required={false} text="Observa????es" id="budgetDescription" />
                        </div>
                        <hr className="col-span-12 mt-12 border-gray-200" />
                    </div>
                    <div className="grid grid-cols-12 py-4">
                        <TitleForm text="Anamnese" />
                        <div className="col-span-7 grid grid-cols-12 gap-8">
                            <TextArea funChange={handleInput} required={false} text="Descri????o" id="anamnese" />
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