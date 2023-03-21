import Navbar from "react-bootstrap/Navbar";

//added this for bootstrap support
// import "bootstrap/dist/css/bootstrap.css"; // i moved this to App.js so everyone can get bootstrap support

function HomeBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="d-flex align-items-center m-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 6.77225C0 6.04834 0.39118 5.38094 1.02279 5.02724L9.02279 0.547235C9.62991 0.207252 10.3701 0.207252 10.9772 0.547236L18.9772 5.02724C19.6088 5.38094 20 6.04834 20 6.77225V18C20 19.1046 19.1046 20 18 20H2C0.895431 20 0 19.1046 0 18V6.77225Z"
              fill="#6663E8"
            />
            <circle cx="10" cy="11" r="5.5" fill="white" stroke="white" />
            <circle cx="10" cy="11" r="2.5" fill="#6663E8" stroke="#6663E8" />
          </svg>

          <a class="navbar-brand m-2" href="#">
            HomeHunter
          </a>
        </div>
        <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
          <li class="nav-item text-center mx-2 mx-lg-1">
            <a class="nav-link navbar-brand" href="#!">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HomeBar;
