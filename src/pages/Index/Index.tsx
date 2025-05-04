import Layout from '../../components/Layout'

function Index() {
  return (
    <Layout>
      <div className="container">
        <h1> Base website template </h1>

        <div className="row"> 
          <div className="col-6">
            <h1> left content </h1>
          </div>
          <div className="col-6">
            <h1> right content </h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
