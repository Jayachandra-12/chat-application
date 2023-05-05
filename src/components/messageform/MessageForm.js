import React, { useState } from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'
import { NavDropdown } from 'react-bootstrap'
import './messageform.css'
import { useNavigate } from 'react-router-dom'

function MessageForm() {
    let [users, setUsers] = useState([])
    let [adduser, setAdduser] = useState(false)
    let [dbuser, setDbuser] = useState([{
        name: "jaya"
    },
    {
        name: "santhu"
    }])
    const navigate = useNavigate()
    return (
        <div className='container mt-3 bg-light'>
            <div className='row w-screen h-screen' style={{ minHeight: "90vh" }}>
                <div className='col col-lg-3 col-md-4'>
                    {
                        users.length === 0 && adduser === false
                        && <div onClick={() => setAdduser(true)} className='aligningCenter'>
                            <AiOutlineUserAdd size={80} />
                            <p className="lead">Add Friends</p>
                        </div>
                    }
                    {
                        adduser === true
                        && <div style={{ overflow: "auto" }}>
                            <AiOutlineUserAdd size={80} />
                            {/* <p className="lead">Add Friends</p> */}
                            {
                                dbuser.map((element, index) => {
                                    return <div className='border d-flex justify-content-around' style={{ backgroundColor: "#ADD8E6" }} key={index} >
                                        <p className="lead text-center d-inline">{element.name}</p>
                                        <button className="btn btn-success ms-auto">invite</button>
                                    </div>
                                })
                            }
                        </div>
                    }
                    {
                        users.length !== 0 && adduser == false
                        &&
                        <div>
                            <div className='d-flex justify-content-end bg-dark text-end'>
                                <div onClick={() => setAdduser(true)} className='d-inline text-white'>
                                    <AiOutlineUserAdd size={50} />
                                </div>

                                <NavDropdown
                                    title={<>
                                        <HiDotsVertical size={40} className='text-light d-inline' />
                                    </>}
                                    id="collasible-nav-dropdown"
                                >
                                    <NavDropdown.Item>
                                        profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        settings
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={() => navigate('/login')}>
                                        logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>

                            {
                                users.map((element, index) => {
                                    return <div className='border d-flex justify-content-around' style={{ backgroundColor: "#ADD8E6" }} key={index} >
                                        <p className="lead text-center d-inline">{element.name}</p>
                                    </div>
                                })
                            }
                        </div>
                    }
                </div>
                <div className='col col-lg-9 col-md-8 text-white' style={{ border: "2px solid grey" }}>
                    <div style={{ position: "relative", bottom: "0", top: "92%" }} className='d-flex justify-content-around'>
                        <input type="text" className='w-75 rounded' />
                        <button className="btn btn-primary rounded">send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageForm