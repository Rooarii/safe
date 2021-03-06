import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Contact from '../components/Contact'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import kids from '../assets/images/kids.jpg'
import adults from '../assets/images/adults.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Safe Ecomobilit√©"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />
                <div id="main">
                    
                </div>
                
                <div id="main">
                <section id="one">
                        <div className="inner">
                            <header className="major">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                <h2>A propos</h2>
                            </header>
                            <p className="justify" style={{textAlign:"justify"}}>SAFE d√©ploie de solutions de tourisme √©co-responsable pour partir l‚Äôesprit tranquille en groupe ou en famille tout en r√©duisant notre impact sur l‚Äôenvironnement ! 
                            D√®s cet √©t√© Explorez notre belle Provence et participez √† une journ√©e ou un s√©jour √† la d√©couverte Patrimoine & gastronomie. Plusieurs formules sont en cours de d√©ploiement pour juillet √† septembre 2021 avec SAFE. N'h√©sitez pas √† nous contacter, pour √™tre tenu inform√©.
</p>
                            <ul className="actions">
                                <li><Link to="#contact" className="button next">Ca m'interesse</Link></li>
                            </ul>
                        </div>
                    </section>
                    <section id="two" className="tiles">
                        <article style={{backgroundImage: `url(${adults})`}}>
                            <header className="major">
                                <h3>Voyage en itin√©rance</h3>
                                <p></p>
                            </header>
                            <Link className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${kids})`}}>
                            <header className="major">
                                <h3>D√©couverte √† la journ√©e</h3>
                                <p></p>
                            </header>
                            <Link className="link primary"></Link>
                        </article>
                    </section>
                    <Contact></Contact>
                    
                    {/* <section id="two">
                        <div className="inner">
                            <header className="major">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                <h2>Cet √©t√©</h2>
                            </header>
                            <p className="justify">Explorez notre belle Provence et participez √† une journ√©e ou un s√©jour √† la d√©couverte Patrimoine & gastronomie.</p>
                        </div>
                    </section> */}
                    {/* <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section> */}
                </div>

            </Layout>
        )
    }
}

export default HomeIndex