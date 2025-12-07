export default function BottomNav() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <details open>
              <summary>News</summary>
              <ul>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
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
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
