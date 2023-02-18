const ViewMore =() =>{
    return(
        <div className="flex justify-center md:justify-end w-full md:mr-32">
            <button className="mt-0 text-md text-base font-semibold leading-none text-warning-100 flex items-center">
                Ver más
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3 h-6 w-6 transform transition-transform hover:translate-x-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                    </svg>
            </button>
        </div>
    )
}

export default ViewMore;