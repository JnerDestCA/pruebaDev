import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars, faDesktop,faBorderAll,faSquarePollVertical, faL } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

function Sidebar() {
    const [Open,setOpen]=useState(true);

    return (
        <>
            <section class={`flex flex-col p-6 bg-gray-50 ${Open ? 'w-80 transition-all duration-300' : 'w-20 transition-all duration-300'}`}>
                <div class="flex justify-between p-3">
                    <a href="" class={Open ? '' : 'hidden'}>Logo empresa</a>
                    <button onClick={()=>setOpen(!Open)} class="cursor-pointer">
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                    
                </div>
                <span class={`mt-6 text-gray-600 ${Open ? '' : 'hidden'}`}>Menu</span>
                <nav class="flex flex-col gap-2 mt-4">
                    <div class="pl-8 pt-3 pb-3 rounded-xl hover:bg-blue-100">
                        <Link to="/Dashboard">
                            <div class={`flex gap-4 items-center text-gray-500 hover:text-blue-900 ${Open ? '' : 'flex justify-end'}`}>
                                <FontAwesomeIcon icon={faSquarePollVertical} />
                                <span class={Open ? '' : 'hidden'}>Dashboard</span>
                            </div>
                        </Link>
                    </div>
                    <div class="pl-8 pt-3 pb-3 rounded-xl hover:bg-blue-100">
                        <Link to="/PaginasWeb">
                            <div class={`flex gap-4 items-center text-gray-500 hover:text-blue-900 ${Open ? '' : 'flex justify-end'}`}>
                                <FontAwesomeIcon icon={faDesktop} />
                                <span class={Open ? '' : 'hidden'}>Paginas Web</span>
                            </div>
                        </Link>
                    </div>

                </nav>
            </section>
        </>
    )
}

export default Sidebar