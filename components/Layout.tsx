import { ReactNode } from "react"
import { Aside } from "./Aside"
import { Header } from "./Header"

interface ChildInterface {
    children: React.ReactNode | React.ReactNode[]
}

const Layout = ({children}: ChildInterface) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grid grid-cols-12">
                <Aside />
                {children}
            </main>
        </div>
    )
}

export default Layout