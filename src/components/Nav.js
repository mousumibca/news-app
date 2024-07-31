import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">general</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/business">business</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/entertainment">entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health">health</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science">science</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports">sports</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/technology">technology</Link></li>

                            </ul>
                            <div class="form-check form-switch">
                                <i class="fa-solid fa-circle-half-stroke fa-lg" style={{color: "white"}} onClick={this.props.toggleMode}></i>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav
