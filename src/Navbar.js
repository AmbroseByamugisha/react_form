import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <div>
                <ul className="NavBar">
                    <li className="nav-item"><a class="active" href="#home">Home</a></li>
                    <li className="nav-item"><a href="#news">News</a></li>
                    <li className="nav-item"><a href="#contact">Contact</a></li>
                    <li className="nav-item nav-item-right"><a href="#about">About</a></li>
                </ul>
            </div>
        )
    }
};

export default Navbar;