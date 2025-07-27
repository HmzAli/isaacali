import Layout from '../../components/Layout'
import MainBanner from '../../components/MainBanner'
import './Index.scss'
import { PageMetadata } from '../../components/PageMetaData'

function Index() {
  return (
    <Layout>
      <PageMetadata
        title="IsaacAli"
        description="Bespoke websites & landing pages"
        canonical="https://isaacali.com"
      />

      <MainBanner />
    </Layout>
  )
}

export default Index
