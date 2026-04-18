import google from '/src/assets/buscar.png'
import facebook from '/src/assets/facebook.png'
import adobe from '/src/assets/adobe.png'
function Login() {

    return (
        <>
            <section>
                <div class="flex items-center justify-center px-6 py-8 mx-auto md:h-screen bg-blue-950">
                    <div class="w-full rounded-lg shadow md:mt-0 sm:max-w-md bg-white">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div class="flex flex-col items-center">
                                <span class="text-xl font-bold text-blue-900 pb-4">
                                    Crear cuenta
                                </span>
                                <span class="text-gray-500">Unete a la comunidad  de LVL Consulting</span>
                            </div>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium">Correo electronico<strong class="text-red-500">*</strong></label>
                                    <input type="email" name="email" id="email" class="text-gray-900 border border-gray-500 rounded-md w-full p-2" placeholder="Introdcuir direccionde correo electronico" required="" />
                                </div>
                                <div>
                                    <label for="user" class="block mb-2 text-sm font-medium">Nombre del usuario<strong class="text-red-500">*</strong></label>
                                    <input type="text" name="user" id="user" placeholder="Introducir nombre de usuario" class="text-gray-900 border border-gray-500 rounded-md w-full p-2" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium">Contraseña</label>
                                    <input type="password" name="password" id="password" placeholder="introducir contraseña" class="text-gray-900 border border-gray-500 rounded-md w-full p-2" required="" />
                                </div>
                                <div >
                                    <span>Al registrarte aceptas los <u class="text-blue-900 cursor-pointer">Terminos de uso de LVL Consulting</u></span>
                                </div>
                                <button type="submit" class="w-full bg-blue-900 text-white p-2 border rounded-md">Agregar Categoria</button>

                                <div class="flex items-center justify-center py-3">
                                    <div class="w-full border-t border-black"></div>

                                    <span class="absolute bg-white px-3 text-sm text-gray-600">
                                        Crear cuenta con
                                    </span>
                                </div>
                                <div class="mb-3 flex justify-center gap-4">
                                    <a class="rounded-md bg-gray-200 text-amber-50 p-2.5">
                                        <img src={google} alt="google" class="w-5 h-5"/>
                                    </a>
                                    <a class="rounded-md bg-blue-900 text-amber-50 p-2.5">
                                        <img src={facebook} alt="facebook" class="w-5 h-5"/>
                                    </a>
                                    <a class="rounded-md bg-orange-600 text-amber-50 p-2.5">
                                        <img src={adobe} alt="adobe" class="w-5 h-5 brightness-0 invert"/>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
