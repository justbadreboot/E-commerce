import { useState } from "react";
import { IoChatbubblesSharp } from "react-icons/io5"
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components'

const Chatbot = () => {
    const [isOpen, setIsOpen]=useState(false)
    const [cerrarG, setCerrarG]=useState('translate-x-80')
    const [cerrarB, setCerrarB]=useState('translate-x-full')
    const [cerrarC, setCerrarC]=useState('translate-x-full')
    
    function handleClick() {
        setIsOpen(!isOpen)
        if(isOpen){
            setCerrarG('translate-x-80')
            setCerrarB('translate-x-full')
            setCerrarC('translate-x-full')
        }
        else{
            setCerrarG('')
            setCerrarB('')
            setCerrarC('') 
        }
    }
    
    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Poppins',
        headerBgColor: '#22c55e',
        headerFontColor: '#fff',
        headerFontSize: '16px',
        botBubbleColor: '#2b97a4',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    }

    return (
        <div className={`flex fixed ${cerrarG} transition-all duration-10000 bottom-5 right-4 z-50`}>
            <div className={` flex mt-60 justify-center ${cerrarB} items-center rounded-l-lg bg-green-500 text-white cursor-pointer text-[1.563rem] inset-y-1/2 right-0 w-14 h-12 transition-all duration-10000 ease-in-out font-medium`}
            onClick={handleClick}
            >
                <IoChatbubblesSharp />
            </div>
            <ThemeProvider theme={theme}>
                <div className={`transition-all ${cerrarC} duration-10000 ease-in-out `}>
                    <ChatBot 
                        headerTitle='KrugerMed Informativo'
                        placeholder='Escribe tu respuesta...'
                        botAvatar='https://pps.whatsapp.net/v/t61.24694-24/289482132_7962176447156215_490363148019697903_n.jpg?ccb=11-4&oh=01_AdQ2OMltwhSuBJGIZa8yWVOOx5USv_1Z2ZxgBNeblHnpzw&oe=63FA86C6'
                        steps={[
                            {
                                id: '1',
                                message: 'Hola Krugersito! ¿Cuál es tu nombre?',
                                trigger: '2'
                            },
                            {
                                id: '2',
                                user: true,
                                validator: (value) => {
                                    if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
                                        return true;
                                    }
                                    else {
                                        return 'Ingresa un nombre válido.';
                                    }
                                },
                                trigger: '3'
                            },
                            {
                                id: '3',
                                message: 'Hola {previousValue}!, es un nombre muy cool y no le digo eso a todo usuario que viene ;) ',
                                trigger: '3A'
                            },
                            {
                                id: '3A',
                                message: 'De todas formas, es un gusto conocerte ',
                                trigger: '4'
                            },
                            {
                                id: "4",
                                message: "Dime, ¿A qué has venido al KrugerMed informativo? (Selecciona una opción)",
                                trigger: "5"
                            },

                            {
                                id: '5',
                                options: [{ value: 'T', label: "Conocer sobre la tienda", trigger: "T" },
                                { value: 'C', label: "Quiero preguntar sobre un síntoma", trigger: "C" }]
                            },
                            {
                                id: 'T',
                                message: 'Claro, ¿qué te gustaría saber de nosotros? (Selecciona una opción)',
                                trigger:'5a'
                            },
                            {
                                id: '5a',
                                options: [{ value: '5a1', label: "Sobre los desarrolladores", trigger: "5a1" },
                                { value: '5a2', label: "¿Qué puedo hacer con la tienda?", trigger: "5a2" },
                                { value: '5a3', label: "¿Son confiables sus servicios médicos y productos", trigger: "5a3" }]
                            },
                            {
                                id: '5a1',
                                message: 'Adrian Bastidas, Daniela Cisneros, Bryan Armando y Jhonatan Sanchez, unos tipasos',
                                trigger:'5a12'
                            },
                            {
                                id: '5a12',
                                message: 'Ellos me diseñaron y desarrollaron desde 0,¿Puedes creerlo?, fue un trabajo fuerte dejame decirte',
                                trigger:'5a13'
                            },
                            {
                                id: '5a13',
                                message: 'Cada uno es un desarrollador full stack adaptable a cualquier proyecto.... o almenos eso creo jeje',
                                trigger:'5a14'
                            },
                            {
                                id: '5a14',
                                message: 'Si quieres ver más de ellos, ver sus proyectos o hablarles, sus redes están en la pestaña "Nosotros" adelante, no muerden',
                                trigger:'6'
                            },
                            {
                                id: '6',
                                message: '¿Quieres preguntar algo más?',
                                trigger:'R'
                            },
                            {
                                id: 'R',
                                options: [{ value: 'R1', label: "Si", trigger: "R1" },
                                { value: 'n', label: "No", trigger: "n" },]
                            },
                            {
                                id: 'R1',
                                message: 'Yeii!! ¿Qué más quieres saber?',
                                trigger:'5a'
                            },
                            {
                                id: '5a2',
                                message: 'Directo al grano eh? me gusta, en la tienda puedes encontrar distintos productos de farmaceutica',
                                trigger:'5a22'
                            },
                            {
                                id: '5a22',
                                message: 'Tambien puedes encontrar a nuestros doctores y desarrolladores, además de contactar a estos últimos',
                                trigger:'5a23'
                            },
                            {
                                id: '5a23',
                                message: 'Puedes agendar citas médicas y comprar productos con un carrito de compras, a que es genial eh?',
                                trigger:'5a24'
                            },
                            {
                                id: '5a24',
                                message: 'Incluso si haces una compra, no tienes que retirar los productos, un repartidor irá a dejar los productos en la puerta de tu casa ',
                                trigger:'5a25'
                            },
                            {
                                id: '5a25',
                                message: 'Pero no te emociones tanto, el no se quedará contigo mucho tiempo, tiene más entregas que hacer',
                                trigger:'6'
                            },
                            {
                                id: '5a3',
                                message: 'Of course my horse, hasta la pregunta ofende, todos tienen certificados de calidad',
                                trigger:'5a31'
                            },
                            {
                                id: '5a31',
                                message: 'Tú crees que dejaría que ingresen algo que no es confiable aquí? Nada pasa sin que lo vea',
                                trigger:'6'
                            },
                            {
                                id: 'C',
                                message: 'Antes de continuar, debo decirte que la info es de internet y no me responsabilizo por cualquier daño que pueda causar',
                                trigger:'C1'
                            },
                            {
                                id: 'C1',
                                message: 'Si padeces algún síntoma lo mejor sería que vayas a un médico experto, espera... nuestra página tiene varios! Agenda una cita ahora!!',
                                trigger:'C2'
                            },
                            {
                                id: 'C2',
                                message: '¿Quieres preguntar algo más?',
                                trigger:'R11'
                            },
                            {
                                id: 'R11',
                                options: [{ value: 's1', label: "Si", trigger: "R123" },
                                { value: 'n', label: "No", trigger: "n" },]
                            },
                            {
                                id: 'R123',
                                message: 'Yeii!! ¿Qué más quieres saber preguntar?',
                                trigger:'5'
                            },

                            {
                                id: 'n',
                                message: '¿Ya te vas?, ¿me dejarás solo? bueno... nada es eterno en el mundo, espero haberte ayudado, vuelve cuando quieras! Presiona el boton de chat para cerrarme',
                                end: true
                            },
                        ]}
                    />
                </div>
            </ThemeProvider>
        </div>
    )

}
export default Chatbot;