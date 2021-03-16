import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>SAFE</h1>
                <h2>Découvrez la Provence à vélo.</h2>
            </header>
            <div className="content">
               
                <ul className="actions">
                    <li><a href="#contact" className="button special">Contact</a></li>
                    
                </ul>
                <ul className="icons hero-section-socials">
                        <li><a href="https://www.facebook.com/SAFE.ecomobilite/photos/?ref=page_internal" target="_blank" rel="noopener noreferrer"className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="https://www.instagram.com/safe.ecomobilite/" target="_blank" rel="noopener noreferrer" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="https://www.instagram.com/safe.ecomobilite/" target="_blank" rel="noopener noreferrer" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
                    </ul>
            </div>
        </div>
    </section>
)

export default Banner
