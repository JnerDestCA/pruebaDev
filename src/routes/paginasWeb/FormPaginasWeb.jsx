import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons'
import ModalContacto from './components/ModalContacto.jsx';
import { useState } from 'react';
function FormPaginasWeb() {
    const [ModalOpen, setModalOpen] = useState(false);
    return (
        <>
            <section class="pl-8 pt-6 pr-8">
                <div class="w-full h-full">
                    <div class="flex flex-row justify-between">
                        <div class="flex flex-col">
                            <span class="text-blue-900 font-bold">Nuevo formulario</span>
                            <span class="text-gray-500">Complete sus datos y continue con los siguientes pasos</span>
                        </div>
                        <div class="">
                            <label class="text-white font-light flex justify-items-center mr-1 pr-15 pl-15 p-1.5 rounded-md bg-blue-900 cursor-pointer gap-3" onClick={() => setModalOpen(true)}>
                                <div class="flex items-center">
                                    <FontAwesomeIcon icon={faFloppyDisk} />
                                </div>
                                <button>Guardar</button>
                            </label>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-8 items-stretch">
                        <div class="border rounded-md border-gray-300 p-4 mt-4 bg-white">
                            <form action="#" class="flex flex-col gap-4">
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <label for="categoria1" class="block mb-2 text-sm font-medium text-gray-500">Nombre de Categoria<strong class="text-red-500">*</strong></label>
                                        <input type="text" name="categoria" id="categoria" class="text-gray-900 border border-gray-300 rounded-md w-full p-2 outline-none" placeholder="Introducir la categoria" required />
                                    </div>
                                    <div>
                                        <label for="categoria2" class="block mb-2 text-sm font-medium text-gray-500">Nombre de Categoria<strong class="text-red-500">*</strong></label>
                                        <input type="text" name="categoria2" id="categoria2" class="text-gray-900 border border-gray-300 rounded-md w-full p-2 outline-none" placeholder="Introducir la categoria" required />
                                    </div>
                                </div>

                                <div class="flex flex-col gap-4">
                                    <div>
                                        <label for="empresa" class="block mb-2 text-sm font-medium text-gray-500">Empresa<strong class="text-red-500">*</strong></label>
                                        <input type="text" name="empresa" id="empresa" class="text-gray-900 border border-gray-300 rounded-md w-full p-2 outline-none" placeholder="Selecionar una empresa" required />
                                    </div>
                                    <div>
                                        <label for="tempresa" class="block mb-2 text-sm font-medium text-gray-500">Tipo de empresa<strong class="text-red-500">*</strong></label>
                                        <input type="text" name="tempresa" id="tempresa" class="text-gray-900 border border-gray-300 rounded-md w-full p-2 outline-none" placeholder="Seleccionar tipo de empresa" required />
                                    </div>
                                    <div>
                                        <label for="tempresa2" class="block mb-2 text-sm font-medium text-gray-500">Tipo de empresa<strong class="text-red-500">*</strong></label>
                                        <input type="text" name="tempresa2" id="tempresa2" class="text-gray-900 border border-gray-300 rounded-md w-full p-2 outline-none" placeholder="Seleccionar tipo de empresa" required />
                                    </div>
                                    <div>
                                        <label for="descripcion" class="block mb-2 text-sm font-medium text-gray-500">Descripcion<strong class="text-red-500">*</strong></label>
                                        <textarea name="descripcion" id="descripcion" class="text-gray-900 border border-gray-300 rounded-md w-full p-2 h-32 outline-none" placeholder="Escribe uan descripcion para la categoria" required></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="border rounded-md border-gray-300 p-4 mt-4 bg-sky-50 flex flex-col">
                            <span class="text-gray-500 font-medium mb-4">Documentos</span>

                            <div class="flex-1 flex flex-col items-center justify-center p-6">
                                <label htmlFor="file-upload" class="flex flex-col items-center justify-center cursor-pointer">
                                    <input id="file-upload" type="file" class="hidden" />
                                    <div class="bg-blue-900 text-white px-6 py-2 rounded-md mb-2">
                                        Seleccionar archivos
                                    </div>
                                </label>

                                <span class="text-gray-400 text-sm">o arrastra y suelta los PDF aqui</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <ModalContacto isOpen={ModalOpen} onClose={() => setModalOpen(false)}
            />
        </>
    );
}

export default FormPaginasWeb;