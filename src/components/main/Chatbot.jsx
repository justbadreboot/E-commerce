import {IoChatbubblesSharp} from "react-icons/io5"

const Chatbox = () =>{
    return(
        <div className=" flex fixed justify-center items-center  rounded-l-lg bg-primary-100 text-white cursor-pointer text-[1.563rem] inset-y-1/2 right-0 w-12 h-12 transition-all duration-1000 ease-in-out font-medium z-50">
            <IoChatbubblesSharp />
        </div>
    )

}
export default Chatbox;