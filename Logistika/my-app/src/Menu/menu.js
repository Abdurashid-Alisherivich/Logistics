import "./menu.scss"

import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom'


function Menu() {


  return (
    <>
      <div className="container container-navbar">
        <div className="menu" >
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid main_navbar">
              <a className="navbar-title navbar-brand" href="#">
                <img src="./image/logo.png" alt=""></img>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-ul">
                  <li className="nav-item navbar-li">
                    <Link className="nav-title-link-one nav-link nav-link-navbar active active-nav" aria-current="page" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="/about">About</Link>
                  </li>
                  <li className="nav-item dropdown nav-dropdown">
                    <a className="nav-link  navbar-li text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Services
                    </a>
                    <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#"><Link className="nav-title-link nav-link-dropdown active active-nav" aria-current="page" to="/service">Tashqi logistika</Link></a></li>
                      <li><a className="dropdown-item" href="#"><Link className="nav-title-link nav-link-dropdown active active-nav" aria-current="page" to="/service_ichki">Ichki logistika</Link></a></li>
                      <li><a className="dropdown-item" href="#"><Link className="nav-title-link nav-link-dropdown active active-nav" aria-current="page" to="/turizm">Ichki turizm</Link></a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="/news">News</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-title-link nav-link nav-link-navbar active active-nav" aria-current="page" to="/contact">Contact</Link>
                  </li>
                </ul>
                <form className="d-flex  nav-login">
                  <button className="btn btn-outline-success " type="submit"><Link className="two nav-title-link nav-link login-nav active" aria-current="page" href="#" to="/login">Login</Link></button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
export default Menu;