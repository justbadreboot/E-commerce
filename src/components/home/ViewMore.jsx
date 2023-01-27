const ViewMore =() =>{
    return(
        <div className="flex justify-center md:justify-end w-full md:mr-32">
            <button className="mt-0 text-base font-semibold leading-none text-warning-100 flex items-center hover:underline">
            Ver más
                <svg className="ml-2 mt-1" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33325 4H10.6666" stroke="orange" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 6.66667L10.6667 4" stroke="orange" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 1.33398L10.6667 4.00065" stroke="orange" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    )
}

export default ViewMore;