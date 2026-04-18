function Navbar() {
    return (
        <>
            <section class="flex flex-row w-full justify-between">
                <div class="flex flex-row shadow p-4 gap-5 justify-between items-center w-full h-20">
                    <div>
                        <div>
                            <p class="text-gray-600">!Te damos la bienvenida Miguel!</p>
                            <p class="text-gray-500">Lunes, 15 de abril 2024</p>
                        </div>
                    </div>

                    <div class="flex gap-5">
                        <div class="flex gap-3">
                            <a href="">banderas</a>
                            <span>Español</span>
                        </div>
                        <div class="flex gap-3">
                            <a href="">Ds</a>
                            <a href="">Not</a>
                            <a href="">Cfs</a>
                        </div>
                    </div>    
                </div>
                <div>
                    <div class="flex flex-row shadow p-4 gap-5 items-center w-60 h-20 bg-gray-50">
                        <div>
                            <a href="">Ico</a>
                        </div>
                        <div>
                            <p class="text-gray-600">Miguel Liberato</p>
                            <p class="text-gray-500">CEO LVL Consulting</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar