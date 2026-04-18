function Navbar() {
    return (
        <>
            <section class="ml-75 flex flex-row">
                <div class="flex flex-row w-full shadow p-4 gap-5 justify-between items-center">
                    <div>
                        <div>
                            <p>!Te damos la bienvenida Miguel!</p>
                            <p>Lunes, 15 de abril 2024</p>
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
                    <div class="flex flex-row shadow p-4">
                        <div>
                            <a href="">Ico</a>
                        </div>
                        <div>
                            <p>Miguel Liberato</p>
                            <p>CEO LVL Consulting</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar