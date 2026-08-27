import { BrowserRouter,Routes, Route } from "react-router-dom"
import Termos from "./pages/Termos"
import Home from "./pages/Home"
import Contact from "./components/Contact"
export default function RoutesApp(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/termos-politica-de-privacidade" element={<Termos/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/contato" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}