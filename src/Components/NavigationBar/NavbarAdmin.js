import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as AiIcons from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../Assets/Css/navAdmin.css"
import { IconContext } from "react-icons";
import { useNavigate, NavLink } from "react-router-dom";
import { MdOutlineEdit as Edit, MdLogout as LogOut } from "react-icons/md";
import { Form, Nav, Offcanvas } from "react-bootstrap";
// import { useAuth } from "../../context/AuthContext";


export default function NavAdmin() {
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [show, setShow] = useState(false);

  // const { authTokens } = useAuth();
  const handleOpenModal = () => {
    setShowModalConfirm(true);
  };
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);

  const navigate = useNavigate();
  // const { setLogout } = useAuth();

  const HandleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    // setLogout();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const NavAdminData = [
    {
      title: "Beranda",
      path: "/",
      icon: <AiIcons.AiFillHome />,
      cName: "nav-text-admin",
    },
    {
      title: "Data User",
      path: "/data-user",
      icon: <FaIcons.FaUsers />,
      cName: "nav-text-admin",
    },
    {
      title: "Data News",
      path: "/data-news",
      icon: <Fa6Icons.FaNewspaper  />,
      cName: "nav-text-admin",
    },
    {
      title: "Data Event",
      path: "/data-event",
      icon: <Fa6Icons.FaCalendarDay  />,
      cName: "nav-text-admin",
    },
    // {
    //   title: "Kehadiran Asisten",
    //   path: "/kehadiran",
    //   icon: <Fa6Icons.FaListCheck />,
    //   cName: "nav-text-admin",
    // },
    // {
    //   title: "Program",
    //   path: "/program",
    //   icon: <FaIcons.FaCalendarDay />,
    //   cName: "nav-text-admin",
    // },
    // {
    //   title: "Pengumuman",
    //   path: "/pengumuman",
    //   icon: <FaIcons.FaInfoCircle />,
    //   cName: "nav-text-admin",
    // },
    // {
    //   title: "Validasi Data Pendaftaran",
    //   path: "/validasi",
    //   icon: <FaIcons.FaClipboardCheck />,
    //   cName: "nav-text-admin",
    // },
  ];

  return (
    <>
      <Nav className="custom-nav fw-medium">
      <div className="navbar_admin">
          <Link to="#" className="menu-bars">
            <Nav.Link onClick={handleShow} className='ms-auto text-white fs-5'><FaIcons.FaBars className='mb-2'/>Menu</Nav.Link>
          </Link>
        </div>
                        <Offcanvas show={show} onHide={handleClose} className='offcanvas-bg'>
                          <Offcanvas.Header closeButton closeVariant='white'>
                            <Offcanvas.Title className='offcanvas-title'>Close</Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body className='fs-5 ms-3'>
                              {NavAdminData.map((item, index) => {
                              return (
                                <li key={index} className={item.cName}>
                                  {item?.path ? (
                                    <Link to={item.path}>
                                      {item.icon}
                                      <span className="span-admin">{item.title}</span>
                                    </Link>
                                  ) : (
                                    <Link onClick={item?.onClick}>
                                      {item.icon}
                                      <span className="span-admin">{item.title}</span>
                                    </Link>
                                  )}
                                </li>
                              );
                            })}
                          </Offcanvas.Body>
                        </Offcanvas>
                      </Nav>
      {/* <IconContext.Provider value={{ color: "#000" }}>
        <div className="navbar_admin">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <IconContext.Provider value={{ color: "#fff" }}>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {NavAdminData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    {item?.path ? (
                      <Link to={item.path}>
                        {item.icon}
                        <span className="span-admin">{item.title}</span>
                      </Link>
                    ) : (
                      <Link onClick={item?.onClick}>
                        {item.icon}
                        <span className="span-admin">{item.title}</span>
                      </Link>
                    )}
                  </li>
                );
              })} */}
              {/* {authTokens ? (
                <>
                  <li
                    className="btn btn-logout text-white"
                    style={{
                      marginTop: "10px",
                      fontSize: "17px",
                      marginLeft: "20px",
                    }}
                    id="dropItem"
                    onClick={HandleLogout}
                    // onClick={openModal}
                  >
                    <LogOut id="outIcon" style={{}} />
                    <span className="span-admin">Log Out</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-uppercase login"
                      to="/login"
                    >
                      Log In
                    </NavLink>
                  </li>
                </>
              )} */}
            {/* </ul>
          </nav>
        </IconContext.Provider>
      </IconContext.Provider> */}
    </>
  );
}