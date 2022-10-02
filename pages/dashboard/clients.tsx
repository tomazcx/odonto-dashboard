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

    const { active } = useContext(AsideContext)

    const deleteModal = (id: string) => {
        setDelete(true)
        setId(id)
    }

    let {data} = useQuery(LOAD_CLIENTS)

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
            </section>
        </Layout>
    )
}

export default Clients