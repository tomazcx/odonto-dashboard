import { createContext, useState } from "react";

interface ContextInterface{
    active: boolean;
    setActive (value: boolean): void;
}

interface ChildInterface{
    children: React.ReactNode
}


const initialValue: ContextInterface = {
    active: false,
    setActive: () =>{}
}

export const AsideContext = createContext(initialValue)

export const AsideProvider = ({children} : ChildInterface) =>{

    const [active, setActive] = useState(initialValue.active)

    return(
        <AsideContext.Provider value={{active, setActive}}>
            {children}
        </AsideContext.Provider>
    )
}