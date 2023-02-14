import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

const Pagination =({totalProducts,setCurrentPage,currentPage,productosPerPage})=> {

  const pageNumbers =[]
  
  for(let i=1; i <= Math.ceil(totalProducts/productosPerPage);i++){
    pageNumbers.push(i)
  }

  const onPrevPage = ()=>{
    setCurrentPage(currentPage - 1)
  }

  const onNextPage = ()=>{
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className='sm:hidden'>
        <div className="flex flex-1 justify-between">
          <button 
            className="relative inline-flex items-center rounded-md border border-green-500 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-white hover:font-bold hover:bg-green-400">
            Anterior
          </button>
          <button 
            className="relative ml-3 inline-flex items-center rounded-md border border-green-500 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-white hover:font-bold hover:bg-green-400">
            Siguiente
          </button>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Mostrando <span className="font-semibold">{productosPerPage} </span> de{' '}
            <span className="font-semibold">{totalProducts}</span> resultados
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <button onClick={onPrevPage}
            className={` ${currentPage===1 && "hidden"} relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20`} >
              <span className="sr-only">Previous</span>
              <BsChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            {pageNumbers.map(num =>(
              <button onClick={()=>setCurrentPage(num)}
                className={`${num === currentPage ? "bg-green-300 font-semibold text-green-600" : " text-green-600 font-medium bg-green-50"} relative z-10 inline-flex items-center border border-green-500 px-4 py-2 text-sm  focus:z-20`} key={num}> 
                  {num}
              </button>
            ))}

            <button onClick={onNextPage}
            className={` ${currentPage>= pageNumbers.length && "hidden"} relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20`} >
              <span className="sr-only">Next</span>
              <BsChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination;
