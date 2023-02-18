import { render, screen,fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import MainServices from "../components/home/MainServices"
import Footer from "../components/main/Footer"
import Pagination from "../components/main/Pagination"
import Cart from "../components/Cart";
import { Provider } from "react-redux";
import Brands from "../components/home/Brands";

describe("Test 1",()=>{
    it("El componente FOOTER se renderiza sin problemas",()=>{
        <Router>
            render(<Footer />);
        </Router>
    });
}); 

describe("Test 2",()=>{
    it("Dentro de la paginación están los botones antes y siguiente",()=>{
        render(<Pagination />)
        const btnPrev = screen.getByRole('button', {name: "Previous"})
        const btnNext = screen.getByRole('button', {name: "Next"})
    });
}); 

describe("Test 3",()=>{
    it("Dentro del componente servicios principales se encuentra una etiqueta",()=>{
      render(<MainServices />);
      const label = screen.getByText('Pago Seguro')
    });
});

describe("Test 4",()=>{
    it("Carrito de compras existe dentro del provider",()=>{
        <Provider>
            render(<Cart />); 
        </Provider>
    });
});

describe("Test 5",()=>{
    it("El componente para mostrar marcas asociadas contiene un titulo",()=>{
        render(<Brands />);
        const titulo = screen.getByText("Mejores")
    });
});
