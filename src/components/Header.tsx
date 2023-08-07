import { BiUser, BiCog, BiLogOutCircle } from 'react-icons/bi';
import { BsArrowsFullscreen, BsFillBellFill } from "react-icons/bs";
import Divider from './Divider';

function Header() {
  return (
    <>
      <div className="navbar bg-indigo-900">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <img
              className="h-10"
              src="./src/assets/img/charls-logo-outline-white.png"
              alt="Charls Logo"
            />
          </a>
          <h1 className="text-white">CHARLS</h1>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label className="btn btn-ghost btn-circle">
              <div className="indicator">
                <BsArrowsFullscreen size='1rem' color='white' />
              </div>
            </label>
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <BsFillBellFill size='1rem' color='white' />
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-7 rounded-none">
                <img src="./src/assets/img/user-image.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-none w-52"
            >
              <li>
                <p>sakenerana@gmail.com</p>
              </li>
              <Divider />
              <li>
                <a>
                  <BiUser size="1rem" color="indigo" />
                  Profile
                </a>
              </li>
              <li>
                <a>
                  <BiCog size="1rem" color="indigo" />
                  Settings
                </a>
              </li>
              <Divider />
              <li>
                <a className="font-bold text-indigo-900">
                  <BiLogOutCircle size="1rem" color="indigo" />
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
