import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


function Header() {
    const navigate=useNavigate()
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      MY CART APP
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home <span className="sr-only">(current)</span>
          </Link>
        </li>
       
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={()=>navigate("/cart")}>
          Cart
        </button>
      </form>
    </div>
  </nav>
  
  );
}

export default Header;