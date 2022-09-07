import { NextPage } from "next"
import { useContext } from "react"
import TextArea from "../assets/Textarea"
import TitleForm from "../assets/TitleForm"
import Input from "../components/Input"
import Layout from "../components/Layout"
import { AsideContext } from "../services/asideContext"

const Register: NextPage = () => {

    const { active } = useContext(AsideContext)

    const resetForm = (e : any) =>{
        e.preventDefault()
        const input = document.getElementById('form-register') as HTMLFormElement
        input.reset()
    }

    return (
        <Layout>
            <section className={`${active ? 'col-span-10' : 'col-span-11'} p-12 flex flex-col gap-4`}>
                <h1 className="text-xl">Cadastrar Paciente</h1>
                <hr className="border-gray-200" />
                <form action="" className="flex flex-col gap-4" id="form-register">
                    <div className="grid grid-cols-12 py-4">
                        <TitleForm text="Informações pessoais" />
                        <div className="col-span-7 grid grid-cols-12 gap-8">
                            <Input text="Nome" required={true} type='text' id="name" />
                            <Input text="Email" required={true} type='email' id="email" />
                            <Input text="Idade" required={true} type='age' id="age" />
                            <Input text="Número de Telefone" required={true} type='num' id="num" />
                        </div>

                        <hr className="col-span-12 mt-12 border-gray-200" />
                    </div>
                    <div className="grid grid-cols-12 py-4">
                        <TitleForm text="Endereço" />
                        <div className="col-span-7 grid grid-cols-12 gap-8">
                            <Input text="Cidade" required={true} type='text' id="city" />
                            <Input text="Rua e número" required={false} type='text' id="street" />
                            <Input text="Bairro" required={false} type='text' id="district" />
                        </div>
                        <hr className="col-span-12 mt-12 border-gray-200" />
                    </div>
                    <div className="grid grid-cols-12 py-4">
                        <TitleForm text="Orçamento" />
                        <div className="col-span-7 grid grid-cols-12 gap-8">
                            <Input text="Orçamento" required={false} type='text' id="budget" />
                            <TextArea text="Observações" id="obs" />
                        </div>
                        <hr className="col-span-12 mt-12 border-gray-200" />
                    </div>
                    <div className="grid grid-cols-12 py-4">
                        <TitleForm text="Anamnese" />
                        <div className="col-span-7 grid grid-cols-12 gap-8">
                            <TextArea text="Descrição" id="desc" />
                        </div>
                        <hr className="col-span-12 mt-12 border-gray-200" />
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        <button onClick={(e) => resetForm(e)} className="bg-red-400 rounded-lg py-2 px-4 w-48 text-white hover:bg-red-500 transition-colors">Resetar Campos</button>
                        <button className="bg-blue-400 rounded-lg py-2 px-4 w-48 text-white hover:bg-blue-500 transition-colors">Cadastrar</button>
                    </div>
                </form>
            </section>
        </Layout>
    )
}

export default Register