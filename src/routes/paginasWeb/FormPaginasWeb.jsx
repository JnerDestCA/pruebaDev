function FormPaginasWeb() {
    return (
        <>
            <section class="pl-8 pt-6">
                <div class="w-full h-full">
                    <div class="flex flex-col">
                        <span class="text-blue-900 font-bold">Nuevo formulario</span>
                        <span class="text-gray-500">Complete sus datos y continue con los siguientes pasos</span>
                    </div>
                    <div class="grid grid-cols-2 gap-8">
                        <div class="border rounded-md border-gray-500 p-4 mt-4">
                            <form action="#">
                                <div>
                                    <div class="grid grid-cols-2 gap-4">
                                        <div>
                                            <label for="categoria1" class="block mb-2 text-sm font-medium text-gray-500">Nombre de Categoria<strong class="text-red-500">*</strong></label>
                                            <input type="text" name="categoria" id="categoria" class="text-gray-900 border border-gray-500 rounded-md w-full p-2" placeholder="Introducir la categoria" required="" />
                                        </div>
                                        <div>
                                            <label for="categoria2" class="block mb-2 text-sm font-medium text-gray-500">Nombre de Categoria<strong class="text-red-500">*</strong></label>
                                            <input type="text" name="categoria2" id="categoria2" class="text-gray-900 border border-gray-500 rounded-md w-full p-2" placeholder="Introducir la categoria" required="" />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label for="empresa" class="block mb-2 text-sm font-medium text-gray-500">Empresa<strong class="text-red-500">*</strong></label>
                                            <input type="text" name="empresa" id="empresa" class="text-gray-900 border border-gray-500 rounded-md w-full p-2" placeholder="Selecionar una empresa" required="" />
                                        </div>
                                        <div>
                                            <label for="tempresa" class="block mb-2 text-sm font-medium text-gray-500">Tipo de empresa<strong class="text-red-500">*</strong></label>
                                            <input type="text" name="tempresa" id="tempresa" class="text-gray-900 border border-gray-500 rounded-md w-full p-2" placeholder="Seleccionar tipo de empresa" required="" />
                                        </div>
                                        <div>
                                            <label for="tempresa2" class="block mb-2 text-sm font-medium text-gray-500">Tipo de empresa<strong class="text-red-500">*</strong></label>
                                            <input type="text" name="tempresa2" id="tempresa2" class="text-gray-900 border border-gray-500 rounded-md w-full p-2" placeholder="Seleccionar tipo de empresa" required="" />
                                        </div>
                                        <div>
                                            <label for="descripcion" class="block mb-2 text-sm font-medium text-gray-500">Descripcion<strong class="text-red-500">*</strong></label>
                                            <input type="text" name="descripcion" id="descripcion" class="text-gray-900 border border-gray-500 rounded-md w-full p-2 pb-20" placeholder="Escribe uan descripcion para la categoria" required="" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="border rounded-md border-gray-500 p-4 mt-4 w-fit">
                            <span>Documentos</span>
                            <div>
                                <button> Seleccionar archivos</button>
                                <span>o arrastra y suelta los PDF aqui</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default FormPaginasWeb;