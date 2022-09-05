import { NextPage } from "next";
import Link from "next/link";
import { Aside } from "../components/Aside";
import { Header } from "../components/Header";

const Main: NextPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grid grid-cols-12">
                <Aside />
                <section className="col-span-11">
                    <div className="flex flex-col items-center pt-20 gap-4">
                        <h1 className="text-2xl">Bem vindo ao seu Odonto Dashboard.</h1>
                        <hr className="border-gray-300 w-48" />
                        <h2 className="text-center">Realize o cadastro dos dados de seus pacientes <br /> e acompanhe suas consultas.</h2>
                        <div className="flex gap-4">
                            <Link href={'/clients'} passHref>
                                <a className="bg-blue-400 py-2 px-4 w-48 text-center rounded-lg text-white">Cadastrados</a>
                            </Link>
                            <Link href={'/register'} passHref>
                                <a className="bg-blue-400 py-2 px-4 w-48 text-center rounded-lg text-white">Cadastrar paciente</a>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Main