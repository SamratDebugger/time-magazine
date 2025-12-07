import { CiSearch } from "react-icons/ci";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiTelegram2Line } from "react-icons/ri";
import Drawer from "./Drawer";

export default function Header() {
  return (
    <header>
      {/* <div>
        <a href="">
          <FaFacebookF />
        </a>
        <a href="">
          <FaXTwitter />
        </a>
        <a href="">
          <FaYoutube />
        </a>
        <a href="">
          <RiTelegram2Line />
        </a>
      </div>
      <div>
        <img src="/assets/logo.webp" alt="logo" />
      </div>
      <div>
        <CiSearch />
      </div> */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div className="flex gap-2">
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <FaXTwitter />
              </a>
              <a href="">
                <FaYoutube />
              </a>
              <a href="">
                <RiTelegram2Line />
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <a href="/">
            <img src="/assets/logo.webp" alt="logo" className="w-sm" />
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />{" "}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
