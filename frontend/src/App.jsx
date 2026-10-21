import './App.css'
import NavBar from "./pages/navBar/index.jsx";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <>
            <BrowserRouter>
                <NavBar/>
            </BrowserRouter>
        </>
    )
}

export default App
