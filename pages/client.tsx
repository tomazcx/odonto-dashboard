import { NextPage } from "next"
import { useContext } from "react"
import Layout from "../components/Layout"
import { AsideContext } from "../services/asideContext"

const Client: NextPage = () =>{

    const {active} = useContext(AsideContext)

    return(
        <Layout>
            <section className={`${active ? 'col-span-10' : 'col-span-11'}`}>
                
            </section>
        </Layout>
    )
}

export default Client