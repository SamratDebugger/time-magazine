import { GiHamburgerMenu } from "react-icons/gi";

export default function Drawer() {
  const navItem = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <details>
          <summary>News</summary>
          <ul>
            <li>
              <a>Bijoy</a>
            </li>
            <li>
              <a>Samrat</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Politics</a>
      </li>
      <li>
        <a>Business</a>
      </li>
      <li>
        <a>Education</a>
      </li>
      <li>
        <a>Entertainment</a>
      </li>
      <li>
        <a>Content</a>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="navbar-start">
            <div className="flex-none">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <GiHamburgerMenu className="size-6" />
              </label>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItem}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
        {/* Page content here */}
        Content
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {navItem}
        </ul>
      </div>
    </div>
  );
}
