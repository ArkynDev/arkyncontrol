export const NavBar = () => {
    return (
        <header className=" bg-violet-500 py-3">
            <div className="flex justify-between items-center px-6">
                <a href="">Arkyn Dev</a>
                <nav>
                    <ul className="flex gap-4 hover:cursor-pointer">
                        <li className="rounded-md text-gray-300 bg-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium">Contrato</li>
                        <li className="rounded-md hover:bg-gray-700 text-white px-3 py-2 text-sm font-medium">Orçamento</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}