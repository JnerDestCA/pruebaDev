import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPencil,faEye,faTrashCan    } from '@fortawesome/free-solid-svg-icons'
function PaginasWeb() {
    return (
        <>
            <section class="p-6">
                <div>
                    <span class="text-blue-900 font-bold">Paginas Webs</span>
                    <div class="shadow w-full flex justify-center mt-4 overflow-auto rounded-lg">
                        <table class="w-full border border-gray-200">
                            <thead>
                                <tr>
                                    <th>N</th>
                                    <th>Categoria</th>
                                    <th>Descripcion</th>
                                    <th>Fecha</th>
                                    <th>Categoria</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody> 
                                <tr>
                                    <td class="p-3 text-sm text-gray-700">1</td>
                                    <td class="p-3 text-sm text-gray-700 flex justify-center">Recursos graficos</td>
                                    <td class="p-3 text-sm text-gray-700">Recursos graficos que se usaran en paginas que se deberan usar a su momento
                                        Recursos graficos que se usaran en web
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 flex justify-center">15/04/24 - 6:30 hrs.</td>
                                    <td class="p-3 text-sm text-gray-700">
                                        <span class="p-1.5 text-xs font-medium uppercase text-orange-600 bg-orange-100 rounded-lg flex justify-center">Imagenes</span>
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 flex justify-between">
                                        <FontAwesomeIcon icon={faPencil} />
                                        <FontAwesomeIcon icon={faEye} />
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PaginasWeb