import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Home/Homepage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Link } from "react-router-dom";
import { NavDropdown, Table } from "react-bootstrap";
import { BsFillChatDotsFill } from 'react-icons/bs'

function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="btn-dark btn" ><BsFillChatDotsFill size={30} /></button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {
                    localStorage.getItem("token") == null &&
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="login">Login</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="signup">Signup</Link>
                            </li>
                        </ul>
                    </div>
                }

                {/* {localStorage.getItem("token") !== null &&
                    <NavDropdown
                        title={<>
                            <CgProfile scale={"5"} className='d-inline' />
                            <p className="lead d-inline">{localStorage.getItem("username")}</p>
                        </>}
                        id="collasible-nav-dropdown"
                        className="drop-down ms-auto"
                    >
                        <NavDropdown.Item>Change password</NavDropdown.Item>

                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={logout}>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                } */}
            </nav>

            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element = {<Signup />} />
            </Routes>
        </div>
    );
}

export default App;
