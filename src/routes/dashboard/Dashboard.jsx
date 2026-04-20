function Dashboard() {
    return (
        <>
            <section class="flex flex-col p-6 ">
                <div class="pb-6">
                    <span class="text-blue-900 font-bold">Dashboard</span>
                    <div class="flex flex-row w-full grid grid-cols-4 gap-8">
                        <div class="flex flex-col shadow shadow-gray-400 p-4 rounded-xl mt-4">
                            <span class="text-gray-500">Ingresos</span>
                            <p class="text-gray-600 text-xl font-bold p-1">S/460.00</p>
                            <div class="flex flex-row gap-3 items-center">
                                <div class="p-1 show shadow bg-green-100 rounded-lg">
                                    <span class="text-green-600">+ S/50k</span>
                                </div>
                                <span class="text-gray-500">Desde el mes pasado</span>
                            </div>
                        </div>
                        <div class="flex flex-col shadow shadow-gray-400 p-4 rounded-xl mt-4">
                            <span class="text-gray-500">Numero de Clientes</span>
                            <p class="text-gray-600 text-xl font-bold p-1">4789</p>
                            <div class="flex flex-row gap-3 items-center">
                                <div class="p-1 show shadow bg-red-100 rounded-lg">
                                    <span class="text-red-600">-30 clientes</span>
                                </div>
                                <span class="text-gray-500">Desde el mes pasado</span>
                            </div>
                        </div>
                        <div class="flex flex-col shadow shadow-gray-400 p-4 rounded-xl mt-4">
                            <span class="text-gray-500">Inversion realizada</span>
                            <p class="text-gray-600 text-xl font-bold p-1">S/5460.00k</p>
                            <div class="flex flex-row gap-3 items-center">
                                <div class="p-1 show shadow bg-green-100 rounded-lg">
                                    <span class="text-green-600">+ S/32k</span>
                                </div>
                                <span class="text-gray-500">Desde el mes pasado</span>
                            </div>
                        </div>
                        <div class="flex flex-col shadow shadow-gray-400 p-4 rounded-xl mt-4">
                            <span class="text-gray-500">Relacion de ganancia</span>
                            <p class="text-gray-600 text-xl font-bold p-1">S/460.00</p>
                            <div class="flex flex-row gap-3 items-center">
                                <div class="p-1 show shadow bg-red-100 rounded-lg">
                                    <span class="text-red-600">- S/50k</span>
                                </div>
                                <span class="text-gray-500">Desde el mes pasado</span>
                            </div>
                        </div>
                    </div>


                </div>

                <div>
                    <span class="text-blue-900 font-bold">Historial de Ventas</span>
                </div>
                <div class="flex">
                    <div>
                        <span class="text-blue-900 font-bold">Historial de Ventas</span>
                    </div>
                    <div>
                        <span class="text-blue-900 font-bold">Historial de Ventas</span>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Dashboard