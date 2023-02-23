import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Loading } from '../components/Loading'
import { RequestState, Story } from '../interfaces'
import { fetchStories } from '../utils/fetchStories'

type StoryRequest = RequestState<Story[]>

const IndexPage = () => {
  const [state, setState] = useState<StoryRequest>({ status: 'loading' })
  const status = state.status

  useEffect(() => {
    fetchStories()
      .then(stories => setState({ status: 'success', data: stories }))
      .catch((error) => setState({ status: 'failed', message: error }))
  }, [setState])

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
    {status}
  </Layout>
}

export default IndexPage
