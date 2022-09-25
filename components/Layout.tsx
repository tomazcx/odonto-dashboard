import { Aside } from "./Aside"
import { Header } from "./Header"

interface ChildInterface {
    children: React.ReactNode | React.ReactNode[]
}

const Layout = ({children}: ChildInterface) => {

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