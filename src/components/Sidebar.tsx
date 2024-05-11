import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Sale Management</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* SidebarSearch Form */}
        
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item menu-open">
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Sale
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/category"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Category</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/product"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Product</p>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/sale"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Sale</p>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/user"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>User</p>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}

export default Sidebar;
