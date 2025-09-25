

const Navber = () => {
  return (
    <div className="bg-white shadow-sm ">
      <div className=" bg-base-100 shadow-sm flex items-center container mx-auto">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
             
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
          <a class=" font-bold md:text-2xl ">CS — Ticket System</a>
        </div>

        <div class="navbar-end items-center">
          <ul class="menu hidden lg:flex menu-horizontal px-1">
            <li className="text-lg"><a>Home</a></li>
            <li className="text-lg"><a>FAQ</a></li>
            <li className="text-lg "><a>Changelog</a></li>
            <li className="text-lg "><a>Blog</a></li>
            <li className="text-lg "><a>Download</a></li>
            <li className="text-lg "><a>Contact</a></li>
          </ul>
          <a class="btn text-lg  md:flex font-semibold bg-linear-to-r text-white from-[#6530E4] to-[#9A5DF1]">+ New Ticket</a>
        </div>

      </div>
    </div>
  );
};

export default Navber;