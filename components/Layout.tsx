import classNames from "classnames"
import { ReactNode, useContext } from "react"
import { modalContext } from "../services/modalContext"
import { Aside } from "./Aside"
import { Header } from "./Header"

interface ChildInterface {
    children: React.ReactNode | React.ReactNode[]
}

const Layout = ({children}: ChildInterface) => {

    const {modal} = useContext(modalContext)

    return (
        <div>
            <Header />
            <main className="grid grid-cols-12">
                <Aside />
                {children}
            </main>
        </div>
    )
}

export default Layout