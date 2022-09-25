import { useMutation } from "@apollo/client";
import Router from "next/router";
import { useContext } from "react";
import { DELETE_CLIENT } from "../graphql/mutations/deleteClient";
import { LOAD_CLIENTS } from "../graphql/queries/getClients";
import Button from "./Button";

interface ModalInterface {
    closeFun(value: boolean): void;
    id: string;
    text: string;
    clientPage: boolean;
}

const ModalDelete = ({ closeFun, text, id, clientPage }: ModalInterface) => {

    const [deleteClient] = useMutation(DELETE_CLIENT)

    const handleModal = (e: any) => {
        closeFun(false)
    }

    const handleDelete = () =>{
        deleteClient({variables: {id: id},refetchQueries:[{query:LOAD_CLIENTS}]})
        handleModal(<></>)
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