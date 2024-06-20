import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaShoppingCart, FaUserAlt } from 'react-icons/fa';

const NavbarHeader = () => {
    return (
      // <Navbar expand="lg" className="bg-dark navbar-dark">
      // <Container>
      //   <Navbar.Brand href="#home"><FaBagShopping/> MyShop</Navbar.Brand>
      //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //   <Navbar.Collapse id="basic-navbar-nav">
      //     <Nav className="me-auto">
      //       <Nav.Link>
      //           <NavLink to='/'> <FaHome/> Home</NavLink>
      //          </Nav.Link>
               
      //       <Nav.Link href="#link"><NavLink><FaListCheck/> Products</NavLink></Nav.Link>
      //       {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
      //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      //         <NavDropdown.Item href="#action/3.2">
      //           Another action
      //         </NavDropdown.Item>
      //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      //         <NavDropdown.Divider />
      //         <NavDropdown.Item href="#action/3.4">
      //           Separated link
      //         </NavDropdown.Item>
      //       </NavDropdown> */}
      //     </Nav>

      //     <Nav>
      //       <Nav.Link href="#home">Cart<FaShoppingCart size={25}/>
      //         <span class="badge rounded-pill text-bg-danger" style={{position:'relative',top:'-10px'}}>0</span> 
      //       </Nav.Link>

      //       <Nav.Link>      
      //         <NavLink to='/signup'>SignUp</NavLink>
      //       </Nav.Link>

      //       <Nav.Link href="#link">
      //         <NavLink>SignIn <FaUserAlt/></NavLink>
      //       </Nav.Link>
      //     </Nav>

      //   </Navbar.Collapse>
      // </Container>
      // </Navbar>

      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand">
              <NavLink to='/' className="active text-light text-decoration-none"><FaShoppingBag/> Shop</NavLink>
              </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link">
                        <NavLink to='/' className="active text-light text-decoration-none">Home</NavLink>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                        <NavLink to='/' className="active text-light text-decoration-none">Products</NavLink>
                        </a>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <NavLink to='/' className="active text-light text-decoration-none">Dropdown</NavLink>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> */}
                </ul>

                <form className="d-flex" role="search">
                    <div className='input-group'>
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-primary" type="submit"><i className='bi bi-search'></i></button>
                    </div>
                </form>

                <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                        <a className="nav-link">
                          <NavLink to='/' className="active text-light text-decoration-none">Cart <FaShoppingCart size={25}/>
                            <span className="badge rounded-pill text-bg-danger" style={{position:'relative',top:'-10px'}}
                              >0</span>
                            
                          </NavLink>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                          <NavLink to='/signup' className="active text-light text-decoration-none">Sign Up</NavLink>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                          <NavLink to='/login' className="active text-light text-decoration-none">Log In </NavLink>
                          <FaUserAlt/>
                        </a>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
      );
}

export default NavbarHeader
