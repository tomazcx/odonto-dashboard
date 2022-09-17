import { createContext, useState } from "react";

interface InitialValueInterface{
    modal: boolean;
    setModal (value: boolean): void;
}

interface ChildrenInterface { 
    children: React.ReactNode;
}

const initialValue : InitialValueInterface = {
    modal: false,
    setModal: () => {}
}

export const modalContext = createContext(initialValue)

export const ModalProvider = ({children} : ChildrenInterface) =>{

    const [modal, setModal] = useState(initialValue.modal)

    return(
        <modalContext.Provider value={{modal, setModal}}>
            {children}
        </modalContext.Provider>
    )
}

