import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from "next"
import Image from "next/image"
import { useContext, useState } from "react"
import Button from "../components/Button"
import Layout from "../components/Layout"
import { AsideContext } from "../services/asideContext"
import odontograma from '../assets/odontograma.png'
import AppointmentItem from "../components/AppointmentItem"
import ModalRegister from "../components/ModalRegister"
import { modalContext } from "../services/modalContext"
import classNames from "classnames"
import ModalDelete from "../components/ModalDelete"
import { useRouter } from "next/router"
import { client } from "../lib/apollo"
import { LOAD_INFO } from "../graphql/queries/getClientInfo"
import { gql } from "@apollo/client"

interface ClientInterface{
    clientInfo: {
        client: {
            name: string;
            age:number;
            email:string;
            address?: string;
            anamnese?: string;
            budget?: string;
            budgetDescription?:string;
            city:string;
            clientSlug:string;
            district?:string;
            phoneNumber:string;
        }
    },
    context: any
}

const Client = ({clientInfo, context} : ClientInterface) => {

    const [modalRegister, setRegister] = useState(false)
    const [modalDelete, setDelete] = useState(false)
    const { active } = useContext(AsideContext)
    const { modal, setModal } = useContext(modalContext)
    const [textModal, setText] = useState('')


    const handleModal = () => {
        if (modalDelete === false) {
            setRegister(true)
            setModal(true)
        }
    }

    const handleModalDelete = () => {
        if (modalRegister === false) {
            setDelete(true)
            setModal(true)
            setText('o paciente?')
        }
    }

    return (
        <Layout>
            {modalRegister ? <ModalRegister closeFun={setRegister} /> : <></>}
            {modalDelete ? <ModalDelete text={textModal} closeFun={setDelete} /> : <></>}
            <section className={classNames('p-12 flex flex-col gap-4', {
                'col-span-10': active,
                'col-span-11': !active,
                'opacity-50': modal
            })}>
                <div className="flex w-full justify-between">
                    <h1 className="text-xl font-semibold">Dados do paciente</h1>

                    <div className="flex items-center gap-4">
                        <Button text="Editar informações" isLink={false} isBlue={true} />
                        <Button funClick={handleModalDelete} text="Excluir paciente" isLink={false} isBlue={false} />
                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6 flex flex-col gap-6">
                        <div className="grid grid-cols-12 gap-4">
                            <h2 className="font-semibold col-span-12">Informações pessoais</h2>
                            <span className="col-span-6 text-sm font-semibold" >Nome: <span className="font-normal text-gray-500">{clientInfo.client.name}</span></span>
                            <span className="col-span-6 text-sm font-semibold" >Sobrenome: <span className="font-normal text-gray-500">{clientInfo.client.email}</span></span>
                            <span className="col-span-6 text-sm font-semibold" >Número de celular: <span className="font-normal text-gray-500">{clientInfo.client.phoneNumber}</span></span>
                            <span className="col-span-6 text-sm font-semibold" >Idade: <span className="font-normal text-gray-500">{clientInfo.client.age}</span></span>
                            <hr className="col-span-12" />
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <h2 className="font-semibold col-span-12">Informações de endereço</h2>
                            <span className="col-span-6 text-sm font-semibold" >Cidade: <span className="font-normal text-gray-500">{clientInfo.client.city}</span></span>
                            <span className="col-span-6 text-sm font-semibold" >Rua e número: <span className="font-normal text-gray-500">{clientInfo.client.address?? 'Não informado.'}</span></span>
                            <span className="col-span-6 text-sm font-semibold" >Bairro de residência: <span className="font-normal text-gray-500">{clientInfo.client.district?? 'Não informado.'}</span></span>
                            <hr className="col-span-12" />
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <h2 className="font-semibold col-span-12">Orçamento</h2>
                            <span className="col-span-12 text-sm font-semibold" >Orçamento: <span className="font-normal text-gray-500">{clientInfo.client.budget?? 'Não informado.'}</span></span>
                            <span className="col-span-12 text-sm font-semibold" >Observações: <span className="font-normal text-gray-500">{clientInfo.client.budgetDescription?? 'Não informado.'}</span></span>
                            <hr className="col-span-12" />
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <h2 className="font-semibold col-span-12">Anamnese</h2>
                            <span className="col-span-12 text-sm font-semibold" >Descrição: <span className="font-normal text-gray-500">{clientInfo.client.anamnese?? 'Não informado.'}</span></span>
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
                            <AppointmentItem isModalActive={modalRegister} setText={setText} funModal={setDelete} />
                            <AppointmentItem isModalActive={modalRegister} setText={setText} funModal={setDelete} />
                            <AppointmentItem isModalActive={modalRegister} setText={setText} funModal={setDelete} />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button funClick={handleModal} text='Registrar consulta' isBlue={true} isLink={false} />
                    </div>
                </div>

            </section>
        </Layout>
    )
}

export default Client

export const getServerSideProps: GetServerSideProps = async (context) => {

    const id = context.query['id']

    const { data } = await client.query({
        query: LOAD_INFO,
        variables: {
            id: id
        }
    })

    return {
        props: {
            clientInfo: data
        }
    }
}