import { BrowserRouter,Routers,Route } from "react-router-dom"
function Sidebar(){
    return(
        <>
            <BrowserRouter>
                <Routers>
                    <Route path="/Dashboard" element/>
                </Routers>
            </BrowserRouter>
        </>
    )
}

export default Sidebar