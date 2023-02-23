import Layout from '../components/Layout'
import { Loading } from '../components/Loading'

const IndexPage = () => (
  <Layout title="Ranked News">
    <div className='flex h-screen justify-center items-center'>
      <Loading />
    </div>
  </Layout>
)

export default IndexPage
