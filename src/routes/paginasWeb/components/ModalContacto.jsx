const ModalContacto = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30">
            <div className="bg-white rounded-xl w-full max-w-2xl">
                <div className="flex items-center justify-between p-3 bg-gray-100 rounded-t-xl shadow">
                    <h3 className="text-blue-900 font-bold text-lg">Formulario de contacto</h3>
                    <button onClick={onClose} className="text-gray-400 text-xl">
                        x
                    </button>
                </div>

                <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
                    <div>
                        <label className="text-sm font-medium mb-1">Nombre de formulario</label>
                        <input type="text" placeholder="Introducir nombre del formulario" className="w-full p-2.5 border border-gray-200 rounded-lg outline-none text-sm"
                        />
                    </div>
                    <div>
                        <h4 className="text-gray-800 font-semibold">Administrador</h4>
                        <p className="text-xs text-gray-500 mb-4">Seleccione los campos que desea incluir en el formulario de contacto.</p>

                        <table className="w-full text-sm text-left border-collapse">
                            <thead className="text-gray-400 font-medium border-b border-gray-100">
                                <tr>
                                    <th className="pb-2 font-normal">Campo</th>
                                    <th className="pb-2 text-center font-normal">Mostrar</th>
                                    <th className="pb-2 text-right font-normal">Obligatorio</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                <tr>
                                    <td className="py-3 text-gray-600">Nombres y apellidos</td>
                                    <td className="py-3 text-center">
                                        <input type="checkbox" defaultChecked={true} className="w-4 h-4 border-gray-300 rounded accent-blue-900" />
                                    </td>
                                    <td className="py-3">
                                        <div className="flex justify-end">
                                            <div className="w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors bg-gray-300">
                                                <div className="bg-white w-3 h-3 rounded-full shadow-sm transform transition-transform translate-x-0"></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-3 text-gray-600">Número de teléfono</td>
                                    <td className="py-3 text-center">
                                        <input type="checkbox" defaultChecked={false} className="w-4 h-4 border-gray-300 rounded accent-blue-900" />
                                    </td>
                                    <td className="py-3">
                                        <div className="flex justify-end">
                                            <div className="w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors bg-gray-300">
                                                <div className="bg-white w-3 h-3 rounded-full shadow-sm transform transition-transform translate-x-0"></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-3 text-gray-600">Correo electrónico</td>
                                    <td className="py-3 text-center">
                                        <input type="checkbox" defaultChecked={false} className="w-4 h-4 border-gray-300 rounded accent-blue-900" />
                                    </td>
                                    <td className="py-3">
                                        <div className="flex justify-end">
                                            <div className="w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors bg-blue-900">
                                                <div className="bg-white w-3 h-3 rounded-full shadow-sm transform transition-transform translate-x-5"></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-3 text-gray-600">Pais</td>
                                    <td className="py-3 text-center">
                                        <input type="checkbox" defaultChecked={true} className="w-4 h-4 border-gray-300 rounded accent-blue-900" />
                                    </td>
                                    <td className="py-3">
                                        <div className="flex justify-end">
                                            <div className="w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors bg-blue-900">
                                                <div className="bg-white w-3 h-3 rounded-full shadow-sm transform transition-transform translate-x-5"></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-3 text-gray-600">Mensaje</td>
                                    <td className="py-3 text-center">
                                        <input type="checkbox" defaultChecked={true} className="w-4 h-4 border-gray-300 rounded accent-blue-900" />
                                    </td>
                                    <td className="py-3">
                                        <div className="flex justify-end">
                                            <div className="w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors bg-blue-900" onClick={()=>
                                                {
                                                    
                                                }}>
                                                <div className="bg-white w-3 h-3 rounded-full shadow-sm transform transition-transform translate-x-5"></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje de agradecimiento</label>
                        <input type="text" defaultValue="¡Gracias!" className="w-full p-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none"
                        />
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">Términos y condiciones personalizados</span>
                        </div>
                        <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-2.5 bg-gray-50">
                            <span className="text-gray-400 text-sm font-mono italic">https://</span>
                            <input type="text" placeholder="Añadir enlace" className="bg-transparent border-none outline-none text-sm w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-gray-100 flex justify-center">
                    <button className="bg-blue-900 text-white py-3 px-16 rounded-lg">
                        Crear formulario
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalContacto;