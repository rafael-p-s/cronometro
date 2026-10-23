import {Link, NavLink, Route, Routes, useRoutes} from "react-router-dom";
import Home from "../home/index.jsx";
import CadPerson from "../cadastro/index.jsx";
import Sobre from "../sobre/index.jsx";
import CadUser from "../cadastro/cadUser/index.jsx";
import CadAdmin from "../cadastro/cadAdmin/index.jsx";
import './index.css'
import NotFound from "../notFound/index.jsx";
import PokeApi from "../pokeApi/index.jsx";

export default function NavBar() {
    return (<>
        <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/cadPerson">Cad. Person</Link>
            {" | "}
            <Link to="/cadPerson/user">Cad. User</Link>
            {" | "}
            <Link to="/cadPerson/admin">Cad. Admin</Link>
            {" | "}
            <NavLink to="/sobre" className={({isActive}) => isActive ? "ativo" : ""}>Sobre</NavLink>
            {" | "}
            <Link to="/pokeApi">Poke API</Link>
        </nav>

        <NavRoutes/>
    </>)
}

function NavRoutes() {
    let element = useRoutes([
            {
                path: "/",
                element: <Home/>

            },
            {
                path: "/cadPerson",
                element: <CadPerson/>,
                children: [
                    {path: "user", element: <CadUser/>},
                    {path: "admin", element: <CadAdmin/>}
                ]
            },
            {
                path: "/sobre",
                element: <Sobre/>
            },
            {
                path: "/*",
                element: <NotFound/>
            },
            {
                path: "/pokeApi",
                element: <PokeApi/>
            }
        ])
    ;
    return element
}
