import React from 'react'
import arrowLeft from '../images/arrow-left.png'
import arrowRight from '../images/arrow-right.png'
import BulletPoint from './BulletPoint'
import Button from './Button'
import trailer from '../images/ricardo-diaz-final-honguito.png'
import trailerImg from '../images/trailer_btn.png'

function Header() {
    return (
        <header>
            <div className="left">
                <div className="slice-left-btn">
                    <img alt="arrow" src={arrowLeft} className="arrow"/>
                </div>
            </div>
            <div className="content">
                <div className="info">
                    <h1>Crea un personaje 3D</h1>
                    <h2><div className="parallelogram">DESDE CERO</div><div className="dot"></div> 100% Online / en vivo <div className="dot"></div></h2>
                    <p><b>Si eres Joven o Adulto</b> podrás aprender a crear tus personajes en 3D <b>sin necesidad de tener conocimientos previos.</b></p>
                    <h3>Podrás aplicar lo aprendido en: </h3>
                    <div className="option">
                        <li><BulletPoint />3D promocionales</li>
                        <li><BulletPoint />Cortometrajes</li>
                        <li><BulletPoint />Series animadas</li>
                        <li><BulletPoint />Videos corporativos</li>
                    </div>
                    <div className="buttons">
                        <Button color="#7000E3" bgColor="#FFFFFF" text="Solicita información"/>
                        <Button color="#F5F5F5" bgColor="#861BFE" text="Temario"/>
                    </div>
                </div>
                <div className="trailer">
                    <div className="circle"></div>
                    <img className="trailer-img" alt="Trailer" src={trailer}/>
                    <div className="t-button">
                        <img alt="trailer btn" src={trailerImg}/>
                        <p>Ver Trailer</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="slice-right-btn">
                    <img alt="arrow" src={arrowRight} className="arrow"/>
                </div>
            </div>
            <div className="footer-stripe">

            </div>
        </header>
    )
}

export default Header
