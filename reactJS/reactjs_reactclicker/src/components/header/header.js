import React from 'react';

function Header(props) {
    return (
        <nav className=" header navbar navbar-dark bg-dark">
            <div className="container">
                <div className="row m-auto">
                    <i className="fa fa-hand-pointer-o fa-4x text-white"></i>
                    <div className="h1 ml-2 my-auto text-light" href="/">{props.title}</div>
                </div>
            </div>
        </nav>
    )
}
export default Header;