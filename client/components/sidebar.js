
const Sidebar = () => {
    return (
        <>
    <title>Dashboard</title>
  
      <div className="text-blueGray-700">
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
            <div>
              <a className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                href="link"> WorkAway Dashboard </a>
              <div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden"
                >
                <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                  <div className="flex flex-wrap">
                    <div className="w-6/12"> 
                    <a className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                        href="">Titulo</a>
                    </div>
                  </div>
                </div>
                <hr className="my-4 md:min-w-full" />
                <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">Panel de Administracion</h6>
                <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                  <li className="items-center">
                    <a href="./dashboard.html" className="text-xs uppercase py-3 font-bold block hover:text-indigo-600">
                      <i className="fas fa-tv mr-2 text-sm opacity-75"></i>Dashboard</a>
                  </li>
                  <li className="items-center">
                    <a href="./settings.html" className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500 ">
                      <i className=" mr-2 text-sm "></i>Configuracion</a></li>
                  <li className="items-center">
                    <a href="link" className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-indigo-500">
                      <i className=" mr-2 text-sm text-blueGray-300"></i>Nombre</a>
                  </li>
                  <li className="items-center">
                    <a href="link"
                      className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-indigo-500" >
                      <i className="fas fa-map-marked mr-2 text-sm text-blueGray-300"></i>Nombre</a>
                  </li>
                  </ul>
                  <hr className="my-4 md:min-w-full" />
                  <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">Page</h6>
                  <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                  <li className="items-center"> <a href="../auth/login.html"
                      className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block">
                      <i className="fas fa-fingerprint text-blueGray-300 mr-2 text-sm"></i>CoworkSpaces</a>
                  </li> <li className="items-center"> <a href="../auth/register.html" className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block">
                      <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>Texto</a>
                  </li>
                  </ul>
                  <hr className="my-4 md:min-w-full" />
                  <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"></h6>
                  <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                  <li className="items-center">
                    <a href="./home" className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block" >
                      <i className="text-blueGray-300 mr-2 text-sm"></i> Home </a>
                      </li>
                      <li className="items-center">
                      <a href="link" className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block" >
                      <i className="fas fa-user-circle text-blueGray-300 mr-2 text-sm"></i> Perfil </a>
                      </li>
                    </ul>
                    <hr className="my-4 md:min-w-full"/>
                  </div>
                </div>
              </nav>
            <div className="relative md:ml-64 bg-blueGray-50">  
            </div>
          </div>
         <div class="relative bg-indigo-700 md:pt-14 pb-10 pt-12">
        </div>
           
      </>
    )
}
          

          export default Sidebar;