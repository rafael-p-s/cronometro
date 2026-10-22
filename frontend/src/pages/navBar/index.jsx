import {Link, NavLink, Route, Routes} from "react-router-dom";
import Home from "../home/index.jsx";
import CadPerson from "../cadastro/index.jsx";
import Sobre from "../sobre/index.jsx";
import CadUser from "../cadastro/cadUser/index.jsx";
import CadAdmin from "../cadastro/cadAdmin/index.jsx";
import './index.css'

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
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cadPerson" element={<CadPerson/>}>
                <Route path="user" element={<CadUser/>}/>
                <Route path="admin" element={<CadAdmin/>}/>
            </Route>
            <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
    </>)
}