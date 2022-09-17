import classNames from "classnames"
import { NextPage } from "next"
import { useContext, useState } from "react"
import List from "../assets/List"
import SquaresFour from "../assets/SquaresFour"
import ClientItem from "../components/ClientItem"
import GridClients from "../components/GridClients"
import Layout from "../components/Layout"
import ListClients from "../components/ListClients"
import ModalDelete from "../components/ModalDelete"
import SearchInput from "../components/SearchInput"
import Select from "../components/Select"
import { AsideContext } from "../services/asideContext"
import { modalContext } from "../services/modalContext"

const Clients: NextPage = () => {

    const [hoverList, setHoverList] = useState(false)
    const [hoverSquares, setHoverSquares] = useState(false)
    const [showingList, setLayout] = useState(true)
    const [modalDelete, setDelete] = useState(false)

    const clients = ['client', 'client', 'client', 'client', 'client', 'client', 'client']

    const { active } = useContext(AsideContext)
    const {modal} = useContext(modalContext)

    return (
        <Layout>
            {modalDelete ? <ModalDelete closeFun={setDelete} text='o paciente?' /> : <></>}
            <section className={classNames("p-12 flex flex-col gap-12" ,{
                'col-span-10': active,
                'col-span-11': !active,
                'opacity-50' : modal
            })}>
                <div className="flex w-full justify-between items-center">
                    <h1 className="text-xl">Pacientes Cadastrados</h1>
                    <div className="flex gap-4 items-center">
                        <Select />
                        <SearchInput />
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
                {showingList ? <ListClients deleteFun={setDelete} list={clients} /> : <GridClients deleteFun={setDelete} list={clients}/>}
            </section>
        </Layout>
    )
}

export default Clients