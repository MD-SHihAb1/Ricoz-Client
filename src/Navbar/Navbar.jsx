import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <Link to="/">
        <li><a>Home</a></li>
        </Link>
        <Link to='/a'>
        <li><a>Add Product</a></li>
        </Link>
        <Link to='/u'>
        <li><a>Update Product</a></li>
        </Link>
      </ul>
    </div>
    <b className="btn btn-ghost text-xl">Ricoz</b>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <Link to="/">
        <li><a>Home</a></li>
        </Link>
        <Link to='/a'>
        <li><a>Add Product</a></li>
        </Link>
        <Link to='/u'>
        <li><a>Update Product</a></li>
        </Link>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="avatar">
  <div className="w-20 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
  </div>
</div>

        </div>
    );
};

export default Navbar;