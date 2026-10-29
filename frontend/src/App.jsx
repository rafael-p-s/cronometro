import './App.css'
import NavBar from "./pages/navBar/index.jsx";
import {BrowserRouter} from "react-router-dom";
import Cronometro from "./components/teste1/index.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <NavBar/>
            </BrowserRouter>
            {/*<div>
                <Cronometro/>
            </div>*/}
        </>
    )
}

export default App
