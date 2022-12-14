import Trash from "../assets/Trash"

interface ItemInterface{
    funModal (value: boolean):void;
    isModalActive: boolean;
    setId(id:string):void
    info: {
        id:string;
        date: string;
        teeth: string;
        proccedure: string;
    }
}

const AppointmentItem = ({funModal, isModalActive, info, setId} : ItemInterface) => {


    const handleModal = () =>{
        if(isModalActive === false){
            setId(info.id)
            funModal(true)
        }
    }

    return (
        <div className="grid grid-cols-12 bg-gray-100 rounded-md py-1">
            <span className="text-center col-span-2">{info.date}</span>
            <span className="text-center col-span-2">{info.teeth}</span>
            <span className="text-center col-span-2">{info.proccedure}</span>
            <div onClick={() =>handleModal()} className="col-span-2 col-start-12 cursor-pointer">
                <Trash />
            </div>
        </div>
    )
}

export default AppointmentItem