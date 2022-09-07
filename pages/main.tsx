import { NextPage } from "next";
import Link from "next/link";
import { useContext } from "react";
import Layout from "../components/Layout";
import { AsideContext, AsideProvider } from "../services/asideContext";

const Main: NextPage = () => {

    const { active } = useContext(AsideContext)

    return (
        <Layout>
            <section className={`${active ? 'col-span-10' : 'col-span-11'}`}>
                <div className="flex flex-col items-center pt-20 gap-4">
                    <h1 className="text-2xl">Bem vindo ao seu Odonto Dashboard.</h1>
                    <hr className="border-gray-300 w-48" />
                    <h2 className="text-center">Realize o cadastro dos dados de seus pacientes <br /> e acompanhe suas consultas.</h2>
                    <div className="flex gap-4">
                        <Link href={'/clients'} passHref>
                            <a className="bg-blue-400 hover:bg-blue-500 transition-colors py-2 px-4 w-48 text-center rounded-lg text-white">Cadastrados</a>
                        </Link>
                        <Link href={'/register'} passHref>
                            <a className="bg-blue-400 hover:bg-blue-500 transition-colors py-2 px-4 w-48 text-center rounded-lg text-white">Cadastrar paciente</a>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>

    )
}

export default Main