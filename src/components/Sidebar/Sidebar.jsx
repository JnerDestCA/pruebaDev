import { Link } from "react-router-dom"
import Dashboard from "../../routes/dashboard/Dashboard"
import PaginasWeb from "../../routes/paginasWeb/PaginasWeb"
function Sidebar() {
    return (
        <>
            <section class="flex flex-col shadow w-max p-6">
                <div class="flex ">
                    <a href="">Logo empresa</a>
                    <a href="">ico ham</a>
                </div>


                <span>Menu</span>
                <nav class="flex flex-col">
                    <Link to={Dashboard}>
                        <span>Dashboard</span>
                    </Link>
                    <Link to={PaginasWeb}>
                        <span>Paginas Web</span>
                    </Link>
                </nav>
            </section>
        </>
    )
}

export default Sidebar