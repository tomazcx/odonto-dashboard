import List from "../assets/List"
import UserCircle from "../assets/UserCircle"

export const Header = () => {
    return (
        <header className="grid grid-cols-12 items-center bg-gray-200">
            <div className="bg-blue-500 flex items-center justify-center py-2 col-span-1">
                <div className="cursor-pointer">
                    <List />
                </div>
            </div>
            <div className="flex-1 w-full col-span-11 pl-4">
                <div className="flex items-center gap-4">
                    <span>Olá, Fabio!</span>
                    <UserCircle />
                </div>
            </div>
        </header>
    )
}