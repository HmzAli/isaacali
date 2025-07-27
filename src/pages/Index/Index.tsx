import Layout from '../../components/Layout'
import MainBanner from '../../components/MainBanner'
import './Index.scss'
import { PageMetadata } from '../../components/PageMetaData'
import Services from '../../components/Services'

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
    </Layout>
  )
}

export default Index
