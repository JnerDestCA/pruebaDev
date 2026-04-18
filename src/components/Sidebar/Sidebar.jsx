import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars, faDesktop,faBorderAll,faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
function Sidebar() {
    return (
        <>
            <section class="flex flex-col w-80 p-6 bg-gray-50">
                <div class="flex justify-between p-3">
                    <a href="">Logo empresa</a>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <span class="mt-6 text-gray-600">Menu</span>
                <nav class="flex flex-col gap-6 mt-6">
                    <div class="pl-8">
                        <Link to="/Dashboard">
                            <div class="flex gap-4 items-center text-gray-500">
                                <FontAwesomeIcon icon={faSquarePollVertical} />
                                <span>Dashboard</span>
                            </div>
                        </Link>
                    </div>
                    <div class="pl-8">
                        <Link to="/PaginasWeb">
                            <div class="flex gap-4 items-center text-gray-500">
                                <FontAwesomeIcon icon={faDesktop} />
                                <span>Paginas Web</span>
                            </div>
                        </Link>
                    </div>

                </nav>
            </section>
        </>
    )
}

export default Sidebar