import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form name="Contact Form" method="POST" data-netlify="true">    
                    <div className="field half first">
                        <label htmlFor="name">Nom</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email"  required/>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Envoyer Message" className="special" /></li>
                        <li><input type="reset" value="Effacer" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:safe.robin.allory@gmail.com">safe.robin.allory@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Téléphone</h3>
                        <span>06 42 76 46 86</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Addresse</h3>
                        <span>3 bld Gambetta<br />
                        13410 - Lambesc<br />
                        France</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
