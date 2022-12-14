import classNames from "classnames"
import { useContext, useState } from "react"
import List from "../../assets/List"
import SquaresFour from "../../assets/SquaresFour"
import GridClients from "../../components/GridClients"
import Layout from "../../components/Layout"
import ListClients from "../../components/ListClients"
import ModalDelete from "../../components/ModalDelete"
import SearchInput from "../../components/SearchInput"
import { AsideContext } from "../../services/asideContext"
import { LOAD_CLIENTS } from "../../graphql/queries/getClients"
import Modal from 'react-modal'
import { useQuery } from "@apollo/client"
import { client } from "../../lib/apollo"

interface ClientInterface {
    clientSlug: string;
    age: number;
    name: string;
    phoneNumber: string;
    city: string;
    email: string;
    id: string;
}

interface ClientsInterface {
    clients: ClientInterface[]
}

const Clients = () => {

    const [hoverList, setHoverList] = useState(false)
    const [hoverSquares, setHoverSquares] = useState(false)
    const [showingList, setLayout] = useState(true)
    const [modalDelete, setDelete] = useState(false)
    const [idToDelete, setId] = useState('')
    const [searchText, setText] = useState("")
    const [skip, setSkip] = useState(0)

    const { active } = useContext(AsideContext)

    const deleteModal = (id: string) => {
        setDelete(true)
        setId(id)
    }

    const handlePagination = (addOperation: boolean) => {
        if(addOperation && skip + 100 <= 300)
            return setSkip(prevState => prevState +=100)

        if(skip - 100 >= 0)
            return setSkip(prevState => prevState -=100)
    }  

    let { data, refetch } = useQuery(LOAD_CLIENTS, {
        variables: {
            skip: skip
        }
    })

    let clients: ClientInterface[] = searchText.length > 0 ? data?.clients.filter((client: ClientInterface) => client.name.toLowerCase().includes(searchText.toLowerCase())) : []


    return (
        <Layout>
            <Modal
                isOpen={modalDelete}
                ariaHideApp={false}
                className="fixed top-[200px] z-20 left-1/2 transform gap-4 rounded-lg -translate-x-1/2 bg-gray-200 flex flex-col p-4"
                contentLabel="Delete Modal"
            >
                <ModalDelete isClient={true} clientPage={false} id={idToDelete} closeFun={setDelete} text='o paciente?' />
            </Modal>
            <section className={classNames("p-12 flex flex-col gap-12", {
                'col-span-10': active,
                'col-span-11': !active
            })}>
                <div className="flex w-full justify-between items-center">
                    <h1 className="text-xl">Pacientes Cadastrados</h1>
                    <div className="flex gap-4 items-center">
                        <SearchInput funSearch={setText} />
                        <div className="flex gap-4 items-center">
                            <div className="cursor-pointer"
                                onMouseEnter={() => setHoverList(true)}
                                onMouseLeave={() => setHoverList(false)}
                                onClick={() => setLayout(true)}
                            >
                                <List color={hoverList || showingList ? "#00C4F5" : "#C0C0C0"} />
                            </div>
                            <div className="cursor-pointer"
                                onMouseEnter={() => setHoverSquares(true)}
                                onMouseLeave={() => setHoverSquares(false)}
                                onClick={() => setLayout(false)}
                            >
                                <SquaresFour color={hoverSquares || !showingList ? "#00C4F5" : undefined} />
                            </div>
                        </div>
                    </div>
                </div>

                {showingList ? <ListClients deleteModal={deleteModal} list={searchText.length > 0 ? clients : data?.clients} /> : <GridClients deleteModal={deleteModal} list={searchText.length > 0 ? clients : data?.clients} />}

                <div className="mx-auto flex flex-col gap-4 items-center">
                   <span>P??gina {skip /100 + 1} de 3</span> 
                   <div className="flex gap-4">
                    <button onClick={() => handlePagination(false)} className="bg-gray-200 rounded px-4 hover:bg-gray-300 transition-colors">Retornar</button>
                    <button onClick={() => handlePagination(true)}  className="bg-gray-200 rounded px-4 hover:bg-gray-300 transition-colors">Pr??ximo</button>

                   </div>
                </div>
            </section>
        </Layout>
    )
}

export default Clients