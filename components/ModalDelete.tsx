import Button from "./Button";

interface ModalInterface {
    closeFun(value: boolean): void;
}

const ModalDelete = ({ closeFun }: ModalInterface) => {
    return (
        <div className="absolut top-[200px] left-1/2 transform -translate-x-1/2 bg-gray-200 flex p-4">
            <h1>Deseja excluir o paciente?</h1>
            <div className="flex gap-4">
                <Button text='Cancelar' color='blue' isLink={false} />
                <Button text='Excluir' color='red' isLink={false} />
            </div>
        </div>
    )
}

export default ModalDelete