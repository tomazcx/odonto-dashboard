import { NextPage } from "next"
import Image from "next/image"
import { useContext } from "react"
import Button from "../components/Button"
import Layout from "../components/Layout"
import { AsideContext } from "../services/asideContext"
import odontograma from '../assets/odontograma.png'
import ConsultItem from "../components/ConsultItem"

const Client: NextPage = () => {

    const { active } = useContext(AsideContext)

    return (
        <Layout>
            <section className={`${active ? 'col-span-10' : 'col-span-11'} p-12 flex flex-col gap-4`}>
                <div className="flex w-full justify-between">
                    <h1 className="text-xl font-semibold">Dados do paciente - Id 00</h1>

                    <div className="flex items-center gap-4">
                        <Button text="Editar informações" isLink={false} color='blue' />
                        <Button text="Excluir paciente" isLink={false} color='red' />
                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6 flex flex-col gap-6">
                        <div className="grid grid-cols-12 gap-4">
                            <h2 className="font-semibold col-span-12">Informações pessoais</h2>
                            <span className="col-span-6 text-sm font-semibold" >Nome: <span className="font-normal text-gray-500">example_name</span></span>
                            <span className="col-span-6 text-sm font-semibold" >Sobrenome: <span className="font-normal text-gray-500">example_name</span></span>
                            <span className="col-span-6 text-sm font-semibold" >Número de celular: <span className="font-normal text-gray-500">(49) 9999-9999</span></span>
                            <span className="col-span-6 text-sm font-semibold" >Idade: <span className="font-normal text-gray-500">18</span></span>
                            <hr className="col-span-12" />
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <h2 className="font-semibold col-span-12">Informações de endereço</h2>
                            <span className="col-span-6 text-sm font-semibold" >Cidade: <span className="font-normal text-gray-500">Videira</span></span>
                            <span className="col-span-6 text-sm font-semibold" >Rua e número: <span className="font-normal text-gray-500">Não informado</span></span>
                            <span className="col-span-6 text-sm font-semibold" >Número de celular: <span className="font-normal text-gray-500">(49) 9999-9999</span></span>
                            <span className="col-span-6 text-sm font-semibold" >Idade: <span className="font-normal text-gray-500">18</span></span>
                            <hr className="col-span-12" />
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <h2 className="font-semibold col-span-12">Orçamento</h2>
                            <span className="col-span-12 text-sm font-semibold" >Orçamento: <span className="font-normal text-gray-500">Não informado</span></span>
                            <span className="col-span-12 text-sm font-semibold" >Observações: <span className="font-normal text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, perferendis! Vero impedit maiores quia similique tempore accusantium, aperiam molestiae nam ullam est debitis corporis, libero labore? Quibusdam et iusto voluptate!</span></span>
                            <hr className="col-span-12" />
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <h2 className="font-semibold col-span-12">Anamnese</h2>
                            <span className="col-span-12 text-sm font-semibold" >Descrição: <span className="font-normal text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum in dolor sit deleniti id ab natus earum provident itaque tenetur culpa laudantium quia officia necessitatibus ex, illum blanditiis asperiores?</span></span>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <Image src={odontograma} alt='Imagem odontograma' width={691} height={453} />
                    </div>
                    <hr className="col-span-12" />
                </div>
                <div className="flex flex-col gap-8">
                    <h1 className="text-xl font-semibold">Consultas realizadas:</h1>
                    <div className="flex flex-col gap-2">
                        <div className="grid grid-cols-12">
                            <span className="text-center col-span-2">Data:</span>
                            <span className="text-center col-span-2">Dente:</span>
                            <span className="text-center col-span-2">Procedimento:</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <ConsultItem />
                            <ConsultItem />
                            <ConsultItem />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button text='Registrar consulta' color='blue' isLink={false} />
                    </div>
                </div>

            </section>
        </Layout>
    )
}

export default Client