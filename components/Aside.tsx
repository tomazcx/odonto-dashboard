import Clients from "../assets/Clients"
import Home from "../assets/Home"
import RegisterIcon from "../assets/RegisterIcon"

export const Aside = () => {
    return (
        <aside className="bg-blue-400 h-screen col-span-1 flex flex-col gap-6 items-center py-24">
            <div className="cursor-pointer rounded-full p-2 bg-blue-500">
                <Home />
            </div>
            <div className="cursor-pointer rounded-full p-2">
                <Clients />
            </div>

            <div className="cursor-pointer rounded-full p-2">
                <RegisterIcon />
            </div>
        </aside>
    )
}