import Layout from '../../components/Layout'
import MainBanner from '../../components/MainBanner'
import Services from '../../components/Services'
import Selections from '../../components/Selections'
import Testimonials from '../../components/Testimonials'
import Contact from '../../components/Contact'
import './Index.scss'

function Index() {
  return (
    <Layout>
      <MainBanner />
      <Services />
      <Selections />
      <Testimonials />
      <Contact />
    </Layout>
  )
}

export default Index
