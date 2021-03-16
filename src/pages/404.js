import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>Page Non trouvée</h1>
                <p>Une erreur s'est produite. Merci de recharger la page!</p>
            </div>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage
