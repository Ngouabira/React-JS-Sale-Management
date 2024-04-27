import { useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../utils/helper";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = (e: any) => {
    e.preventDefault();
    clearLocalStorage();
    navigate("/login");
  };

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Notifications Dropdown Menu */}

        <li className="nav-item dropdown show">
          <a
            className="nav-link"
            data-toggle="dropdown"
            href="#"
            aria-expanded="true"
          >
            <i className="fa fa-power-off" />
            {/* <span class="badge badge-warning navbar-badge">15</span> */}
          </a>
          <div
            className="dropdown-menu dropdown-menu-lg dropdown-menu-right"
            style={{ left: "inherit", right: 0 }}
          >
            <div className="card card-primary card-outline">
              <div className="card-body box-profile">
                <div className="text-center">
                  <img
                    className="profile-user-img img-fluid img-circle"
                    src="https://cdn.jsdelivr.net/npm/admin-lte@3.0.2/dist/img/avatar.png"
                    alt="User profile picture"
                  />
                </div>
                <h3 className="profile-username text-center">admin</h3>
                <p className="text-muted text-center">admin@admin.com</p>
                <a
                  href="#"
                  onClick={handleLogout}
                  className="btn btn-primary btn-block"
                >
                  <b>Logout</b>
                </a>
              </div>
              {/* /.card-body */}
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="fullscreen"
            href="#"
            role="button"
          >
            <i className="fas fa-expand-arrows-alt" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
