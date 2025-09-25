

const Navber = () => {
  return (
    <div className="bg-white shadow-sm ">
      <div class=" bg-base-100 shadow-sm flex items-center container mx-auto">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

              <ul class="p-2">
                <li className="text-lg"><a>Home</a></li>
                <li className="text-lg"><a>FAQ</a></li>
                <li className="text-lg "><a>Changelog</a></li>
                <li className="text-lg "><a>Blog</a></li>
                <li className="text-lg "><a>Download</a></li>
                <li className="text-lg "><a>Contact</a></li>
              </ul>


              <a class="btn text-lg font-semibold bg-linear-to-r text-white from-[#6530E4] to-[#9A5DF1]">+ New Ticket</a>
            </ul>
          </div>
          <a class=" font-bold text-2xl">CS — Ticket System</a>
        </div>
        <div class="navbar-center hidden lg:flex">

        </div>
        <div class="navbar-end ">
          <ul class="menu hidden lg:flex menu-horizontal px-1 mr-8">
            <li className="text-lg"><a>Home</a></li>
            <li className="text-lg"><a>FAQ</a></li>
            <li className="text-lg "><a>Changelog</a></li>
            <li className="text-lg "><a>Blog</a></li>
            <li className="text-lg "><a>Download</a></li>
            <li className="text-lg "><a>Contact</a></li>

          </ul>
          <a class="btn text-lg hidden lg:flex font-semibold bg-linear-to-r text-white from-[#6530E4] to-[#9A5DF1]">+ New Ticket</a>
        </div>

      </div>
    </div>
  );
};

export default Navber;