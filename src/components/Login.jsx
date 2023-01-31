import { useRef, useState } from 'react'
import login from '../assets/img/Login.png';

const Login = () =>{
    const [isForm, setIsForm] = useState({
        login : true,
        register : false,
    })
    const logInEmailRef = useRef()
    const logInPasswordRef = useRef()
    const signUpUsernameRef = useRef()
    const signUpEmailRef = useRef()
    const signUpPasswordRef = useRef()
    const signUpConfirmPasswordRef = useRef()

    const handleSubmitLogIn = (e) => {
        e.preventDefault()
    }
    const handleSubmitSignUp = (e) => {
        e.preventDefault()
    }
    const getPosition = () => {
        return isForm.login ? "top-full"
        : isForm.register ? "top-0"
        : null
    }
    
    return(
        <div className="relative w-full py-8 px-5 flex flex-col items-center  font-poppins">
            <div className="relative z-10 max-w-6xl w-full md:w-3/4 grid grid-cols-7 bg-primary-40 overflow-hidden rounded-lg shadow-xl">
                <div className="hidden md:block md:col-span-2 relative border-t border-transparent">
                    <img src={login} alt="" className="absolute h-full bg-center object-cover"/>
                </div>
                <div className="z-10 col-span-7 sm:col-span-2 md:col-span-1 h-full flex sm:flex-col border-transparent items-center text-sm text-gray-500">
                    <button onClick={() => setIsForm({ login : true, register : false})} className={`py-1.5 w-full h-full sm:h-1/2 inline-flex flex-col justify-center items-center active:outline-none focus:outline-none ${isForm.login ? "bg-white bg-opacity-80 text-gray-800" : "text-white"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="">Login</span>
                    </button>
                    <button onClick={() => setIsForm({ login : false, register : true})} className={`py-1.5 w-full h-full sm:h-1/2 inline-flex flex-col justify-center items-center active:outline-none focus:outline-none ${isForm.register ? "bg-white bg-opacity-80 text-gray-800" : "text-white"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <span className="">Register</span>
                    </button>
                </div>

                <div className={`col-span-7 sm:col-span-5 md:col-span-4 relative max-h-560 transition-all duration-500 ease-in-out transform -translate-y-full ${getPosition()}`}>

                {/* ::Login Form */}
                <div onSubmit={handleSubmitLogIn} className={`px-8 lg:px-20 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-80 transition-all duration-150 ease-in transform ${!isForm.login && "opacity-0"}`}>
                    <h2 className="py-4 text-center text-5xl text-transparent bg-clip-text bg-gradient-to-t from-gray-200 to-green-600 font-bold">Login Here</h2>
                    <form action="" className="py-10 w-full">
                        <label htmlFor="email" className="relative">
                            <input ref={logInEmailRef} id="email" type="email" name="email" className="form-input mb-5 py-0.5 w-full text-base text-gray-700 border-0 border-b border-gray-700 outline-none bg-transparent focus:ring-0 focus:border-green-600" placeholder="Email" required/>
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </label>
                        <label htmlFor="password" className="relative">
                            <input ref={logInPasswordRef} id="password" type="password" name="password" className="form-input mb-5 py-0.5 w-full text-base text-gray-700 border-0 border-b border-gray-700 outline-none bg-transparent focus:ring-0 focus:border-green-600" placeholder="Password" required/>
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                        </label>
                        <div className="mt-10 w-full">
                            <button type="submit" className="btn bg-green-600 bg-opacity-70">Log in</button>
                        </div>
                    </form>
                </div>

                {/* ::Register Form */}
                <div onSubmit={handleSubmitSignUp} className={`px-8 lg:px-20 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-80 transition-all duration-150 ease-in transform ${!isForm.register && "opacity-0"}`}>
                    <h2 className="py-4 text-center text-5xl text-transparent bg-clip-text bg-gradient-to-t from-gray-200 to-blue-600 font-bold">Register Here</h2>
                    <form action="" className="py-10 w-full">
                        <label htmlFor="username" className="relative">
                            <input ref={signUpUsernameRef} id="username" type="text" name="username" className="mb-5 py-0.5 w-full text-base text-gray-700 border-0 border-b border-gray-700 outline-none bg-transparent focus:border-blue-600 focus:ring-0" placeholder="Username" required/>
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                            </svg>
                        </label>
                        <label htmlFor="email" className="relative">
                            <input ref={signUpEmailRef} id="email" type="email" name="email" className="mb-5 py-0.5 w-full text-base text-gray-700 border-0 border-b border-gray-700 outline-none bg-transparent focus:border-blue-600 focus:ring-0" placeholder="Email" required/>
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </label>
                        <label htmlFor="password" className="relative">
                            <input ref={signUpPasswordRef} id="password" type="password" name="password" className="mb-5 py-0.5 w-full text-base text-gray-700 border-0 border-b border-gray-700 outline-none bg-transparent focus:border-blue-600 focus:ring-0" placeholder="Password" required/>
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                        </label>
                        <label htmlFor="password" className="relative">
                            <input ref={signUpConfirmPasswordRef} id="password" type="password" name="password" className="mb-5 py-0.5 w-full text-base text-gray-700 border-0 border-b border-gray-700 outline-none bg-transparent focus:border-blue-600 focus:ring-0" placeholder="Confirm Password" required/>
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 h-5 w-5 text-gray-400 text-opacity-70" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                            </svg>
                        </label>
                        <div className="mt-10 w-full">
                            <button type="submit" bgColor="bg-blue-600 bg-opacity-70">Register</button>
                        </div>
                    </form>
                </div>

                </div>
            </div>
        </div>
    )

}
export default Login;