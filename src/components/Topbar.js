import React from 'react'
import logo from  '../images/logo_libel.png'

function Topbar() {
    return (
        <nav>
            <div className="container content">
                <div className="logo">
                    <img alt="Libel Studios Academy" src={logo}/>
                </div>
                <div className="links">
                    <a href="home" >Inicio</a>
                    <a href="curso" >Curso</a>
                    <a href="requisitos" >Requisitos</a>
                    <a href="participar" className="selected">Participar</a>
                </div>
            </div>
        </nav>
    )
}

export default Topbar
