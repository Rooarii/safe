import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

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
                    title="Gatsby Starter - Forty"
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
                            <p className="justify">Safe vous propose des solutions d’accompagnement facilitant l’écomobilité en Provence !</p>
                            <p className="justify">Nous souhaitons participer à la transition de notre société, en proposant des alternatives durables de tourisme et de mobilité et ainsi réduire notre impact sur l’environnement !</p>
                            <p className="justify">Comment ?
                            De la pédagogie des enjeux climatiques vers les solutions concrètes et accessibles en éco-mobilité. Safe offre un accompagnement pour les particuliers, les collectivités et les entreprises :</p>
                            <p className="justify"> Offre tout public :
                            Sensibilisation en partenariat avec MyC02 et la Fresque du Climat.
                            Accompagnement et cours de VTT et de vélo électrique.
                            Accompagnement des collectivités :
                            Développement de solutions d’éco-tourisme en Provence.
                            Étude et conseil pour l’élaboration de plans de mobilité.
                            Accompagnement des entreprises :
                            Organisation d’évènements et de séminaires.
                            Mise en place du forfait de mobilité durable via le Vélotaf.</p>
                            {/* <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul> */}
                        </div>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                <h2>Cet été</h2>
                            </header>
                            <p className="justify">Safe vous propose pour cet été de découvrir à vélo le nord de la métropole d'Aix MArseille Provence</p>
                        </div>
                    </section>
                    <section id="two" className="tiles">
                        <article style={{backgroundImage: `url(${adults})`}}>
                            <header className="major">
                                <h3>Voyage en itinérance</h3>
                                <p></p>
                            </header>
                            <Link className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${kids})`}}>
                            <header className="major">
                                <h3>Découverte à la journée</h3>
                                <p></p>
                            </header>
                            <Link className="link primary"></Link>
                        </article>
                        {/* <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Magna</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Ipsum</h3>
                                <p>Nisl sed aliquam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article> */}
                    </section>
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