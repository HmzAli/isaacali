import Layout from '../../components/Layout'
import MainBanner from '../../components/MainBanner'
import './Index.scss'
import { PageMetadata } from '../../components/PageMetaData'
import Services from '../../components/Services'
import Selections from '../../components/Selections'
import Testimonials from '../../components/Testimonials'
import { Contact } from '../../components/Contact'

function Index() {
  return (
    <Layout>
      <PageMetadata
        title="Isaac Ali"
        description="Bespoke websites & landing pages"
        canonical="https://isaacali.com"
      />

      <MainBanner />
      <Services />
      <Selections />
      <Testimonials />
      <Contact />
    </Layout>
  )
}

export default Index
