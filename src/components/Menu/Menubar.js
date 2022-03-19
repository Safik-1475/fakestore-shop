import React from 'react';

const Menubar = () => {
    // console.log(props)
    return (
        <div>
            <nav class="navbar navbar-expand-lg  bg-light">
                <div className="container ">
                    <a className="navbar-brand" href="olmo">OLMO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0 d-flex justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link text-capitalize active" aria-current="page" href="#home">home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-capitalize" href="#cart">cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-capitalize" href="#contact">contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-capitalize" href="#login">login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Menubar;