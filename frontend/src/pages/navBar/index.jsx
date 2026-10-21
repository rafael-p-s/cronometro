import {Link, Route, Routes} from "react-router-dom";
import Home from "../home/index.jsx";
import CadPerson from "../cadastro/index.jsx";

export default function NavBar() {
    return (<>
        <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/cadPerson">Cad. Person</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cadPerson" element={<CadPerson/>}/>
        </Routes>
    </>)
}