import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                {/* <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li> */}
                <li><a href="https://www.facebook.com/SAFE.ecomobilite/photos/?ref=page_internal" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/safe.ecomobilite/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://www.linkedin.com/company/safe-ecomobilite/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; <a href="#header" >SAFE</a></li>
                <li>Design: <a href="https://github.com/ellacour">Marion GOBIN</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
