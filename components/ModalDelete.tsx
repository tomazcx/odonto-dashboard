import { useMutation } from "@apollo/client";
import Router from "next/router";
import { DELETE_APPOINTMENT } from "../graphql/mutations/deleteAppointment";
import { DELETE_CLIENT } from "../graphql/mutations/deleteClient";
import { LOAD_INFO } from "../graphql/queries/getClientInfo";
import { LOAD_CLIENTS } from "../graphql/queries/getClients";
import Button from "./Button";


interface ModalInterface {
    closeFun(value: boolean): void;
    id: string;
    text: string;
    clientPage: boolean;
    isClient: boolean;
    idClient?:string;
}

const ModalDelete = ({ closeFun, text, idClient, id, clientPage, isClient }: ModalInterface) => {

    const [deleteClient] = useMutation(DELETE_CLIENT)
    const [deleteAppointment] = useMutation(DELETE_APPOINTMENT)

    const handleModal = () => {
        closeFun(false)
    }

    const handleDelete = () =>{
        handleModal()
        if(!isClient) return deleteAppointment({variables: {id: id}, refetchQueries:[{query:LOAD_INFO, variables:{id:idClient}}]})
        
        deleteClient({variables: {id: id},refetchQueries:[{query:LOAD_CLIENTS}]})
        if(clientPage) Router.push("/clients")
    }

    return (
        <>
            <h1 className="text-center text-lg">Deseja excluir {text}</h1>
            <hr className="border-gray-300" />
            <div className="flex gap-4">
                <Button funClick={handleModal} text='Cancelar' isBlue={true} isLink={false} />
                <Button funClick={handleDelete} text='Excluir' isBlue={false} isLink={false} />
            </div>
        </>
    )
}

export default ModalDelete