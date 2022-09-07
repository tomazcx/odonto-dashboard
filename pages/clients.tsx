import { NextPage } from "next"
import { useContext } from "react"
import Layout from "../components/Layout"
import { AsideContext } from "../services/asideContext"

const Clients: NextPage = () => {

    const { active } = useContext(AsideContext)

    return (
        <Layout>
            <section className={`${active ? 'col-span-10' : 'col-span-11'} p-12 flex flex-col`}>
                <div className="flex w-full justify-between items-center">
                    <h1 className="text-xl">Pacientes Cadastrados</h1>

                </div>
            </section>
        </Layout>
    )
}

export default Clients