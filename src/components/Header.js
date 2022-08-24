import React from 'react';
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrap" >
            <div className="header-info">
                <h1 className='info'>Hello World, Welcome to World of Coding</h1>
                <p className='typed-text'><Typed
                    strings={["JAVA", "PYTHON", ".NET", "DJANGO", "WEB DEVELOPMENT", "ANDROID DEVELOPMENT"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop />
                </p>
                <a href="/"><button className='contactbtn' >Contact Me</button></a>
            </div>

        </div>
    )
}

export default Header
