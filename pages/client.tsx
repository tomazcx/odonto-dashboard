import Image from "next/image"
import { useContext, useState } from "react"
import Button from "../components/Button"
import Layout from "../components/Layout"
import { AsideContext } from "../services/asideContext"
import odontograma from '../assets/odontograma.png'
import AppointmentItem from "../components/AppointmentItem"
import ModalRegister from "../components/ModalRegister"
import classNames from "classnames"
import ModalDelete from "../components/ModalDelete"
import { useRouter } from "next/router"
import { LOAD_INFO } from "../graphql/queries/getClientInfo"
import { useQuery } from "@apollo/client"
import Modal from 'react-modal'
import Link from "next/link"


interface AppointmentInterface {
    id: string;
    date: string;
    teeth: string;
    proccedure: string;
}

const Client = () => {

    const [modalRegister, setRegister] = useState(false)
    const [modalDelete, setDelete] = useState(false)
    const [modalDeleteAppointment, setDeleteAppointment] = useState(false)
    const { active } = useContext(AsideContext)
    const [idAppointment, setId] = useState('')

    const router = useRouter()

    const { data, error } = useQuery(LOAD_INFO, {
        variables: {
            id: router.query.id
        }
    })

    const handleModal = () => {
        if (modalDelete === false) {
            setRegister(true)
        }
    }

    const handleModalDelete = () => {
        if (modalRegister === false) {
            setDelete(true)
        }
    }

    if (error) return (
        <Layout>
            <div className={classNames('p-12 flex flex-col items-center gap-4', {
                'col-span-10': active,
                'col-span-11': !active
            })}>
                <h1>Paciente não encontrado.</h1>
                <Link href="/clients" passHref>
                    <a className="underline hover:text-gray-800 transition-colors">Retornar</a>
                </Link>
            </div>

        </Layout>
    )

    return (
        <Layout>
            <Modal
                isOpen={modalRegister}
                className="fixed z-20 w-1/2 top-[20px] rounded-lg left-1/2 transform -translate-x-1/2 gap-4 bg-gray-100 p-8 flex flex-col"
                contentLable="Delete Modal"
            >
                <ModalRegister clientId={router.query.id as string} closeFun={setRegister} />
            </Modal>
            <Modal
                isOpen={modalDelete}
                className="fixed top-[200px] z-20 left-1/2 transform gap-4 rounded-lg -translate-x-1/2 bg-gray-200 flex flex-col p-4"
                contentLable="Delete Modal"
            >
                <ModalDelete isClient={true} clientPage={true} id={router.query.id as string} closeFun={setDelete} text={'o paciente?'} />
            </Modal>
            <Modal
                isOpen={modalDeleteAppointment}
                className="fixed top-[200px] z-20 left-1/2 transform gap-4 rounded-lg -translate-x-1/2 bg-gray-200 flex flex-col p-4"
                contentLable="Delete Modal"
            >
                <ModalDelete idClient={router.query.id as string} isClient={false} clientPage={true} id={idAppointment} closeFun={setDeleteAppointment} text={'a consulta?'} />
            </Modal>
            <section className={classNames('p-12 flex flex-col gap-4', {
                'col-span-10': active,
                'col-span-11': !active
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
                            <span className="col-span-6 text-sm font-semibold" >Nome: <span className="font-normal text-gray-500">{data?.client.name}</span></span>
                            <span className="col-span-6 text-sm font-semibold" >Sobrenome: <span className="font-normal text-gray-500">{data?.client.email}</span></span>
                            <span className="col-span-6 text-sm font-semibold" >Número de celular: <span className="font-normal text-gray-500">{data?.client.phoneNumber}</span></span>
                            <span className="col-span-6 text-sm font-semibold" >Idade: <span className="font-normal text-gray-500">{data?.client.age}</span></span>
                            <hr className="col-span-12" />
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <h2 className="font-semibold col-span-12">Informações de endereço</h2>
                            <span className="col-span-6 text-sm font-semibold" >Cidade: <span className="font-normal text-gray-500">{data?.client.city}</span></span>
                            <span className="col-span-6 text-sm font-semibold" >Rua e número: <span className="font-normal text-gray-500">{data?.client.address ?? 'Não informado.'}</span></span>
                            <span className="col-span-6 text-sm font-semibold" >Bairro de residência: <span className="font-normal text-gray-500">{data?.client.district ?? 'Não informado.'}</span></span>
                            <hr className="col-span-12" />
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <h2 className="font-semibold col-span-12">Orçamento</h2>
                            <span className="col-span-12 text-sm font-semibold" >Orçamento: <span className="font-normal text-gray-500">{data?.client.budget ?? 'Não informado.'}</span></span>
                            <span className="col-span-12 text-sm font-semibold" >Observações: <span className="font-normal text-gray-500">{data?.client.budgetDescription ?? 'Não informado.'}</span></span>
                            <hr className="col-span-12" />
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <h2 className="font-semibold col-span-12">Anamnese</h2>
                            <span className="col-span-12 text-sm font-semibold" >Descrição: <span className="font-normal text-gray-500">{data?.client.anamnese ?? 'Não informado.'}</span></span>
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
                        {data?.client.appointments.length > 0 ? <div className="grid grid-cols-12">
                            <span className="text-center col-span-2">Data:</span>
                            <span className="text-center col-span-2">Dente:</span>
                            <span className="text-center col-span-2">Procedimento:</span>
                        </div> : <></>}

                        <div className="flex flex-col gap-2">
                            {data?.client.appointments.map((appointment: AppointmentInterface) => <AppointmentItem setId={setId} info={appointment} isModalActive={modalRegister} funModal={setDeleteAppointment} />)}
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