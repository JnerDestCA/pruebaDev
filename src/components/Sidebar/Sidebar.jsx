import { Link } from "react-router-dom"
import Dashboard from "../../routes/dashboard/Dashboard"
import PaginasWeb from "../../routes/paginasWeb/PaginasWeb"
function Sidebar() {
    return (
        <>
            <section class="flex flex-col w-80 p-6 bg-gray-50">
                <div class="flex justify-between p-3">
                    <a href="">Logo empresa</a>
                    <a href="">ico ham</a>
                </div>
                <span class="mt-6">Menu</span>
                <nav class="flex flex-col gap-6 mt-6">
                    <div class="pl-8">
                        <Link to="/Dashboard">
                            <span>Dashboard</span>
                        </Link>
                    </div>
                    <div class="pl-8">
                        <Link to="/PaginasWeb">
                            <span>Paginas Web</span>
                        </Link>
                    </div>

                </nav>
            </section>
        </>
    )
}

export default Sidebar