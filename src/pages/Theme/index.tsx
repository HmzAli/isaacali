import Layout from '../../components/Layout'
import './Theme.scss'

function Theme() {
  return (
    <Layout>
      <section className="theme-page">
        <div className="container">
          <h1>Lorem Ipsum Heading</h1>
          {/* Add your theme content here */}

          <h1>Lorem Ipsum Heading</h1>

          <h2>Lorem Ipsum Heading</h2>

          <h3>Lorem Ipsum Heading</h3>

          <h4>Lorem Ipsum Heading</h4>



          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          

          <div className="btn-container">
            <button className="btn btn-primary">Order Now</button>
          </div>

          <div className="btn-container">
            <button className="btn btn-secondary">Order Now</button>
          </div>

          <div className="btn-container">
            <button className="btn btn-outline">Order later</button>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default Theme 