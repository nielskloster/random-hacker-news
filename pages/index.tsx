import Layout from '../components/Layout'
import { Loading } from '../components/Loading'
import { Stories } from '../components/Stories'
import { useStories } from '../utils/useStories'

const IndexPage = () => {
  const state = useStories()
  const status = state.status

  if (status === 'loading') {
    return <Layout title="Ranked News">
      <Loading />
    </Layout >
  }

  if (status === 'failed') {
    return <Layout title="Ranked News">
      <div className='text-red-400'>Could not load stories!</div>
    </Layout >
  }

  return <Layout title="Ranked News">
    <Stories stories={state.data} />
  </Layout>
}

export default IndexPage
