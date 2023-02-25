import { useCallback, useEffect, useState } from "react"
import { RequestState, Story } from "../interfaces"
import { fetchStories } from "./fetchStories"

export const useStories = () => {
  const [state, setState] = useState<RequestState<Story[]>>({ status: 'loading' })

  const reload = useCallback(() => {
    setState({ status: 'loading' })
    fetchStories()
      .then(stories => setState({ status: 'success', data: stories }))
      .catch((error) => setState({ status: 'failed', message: error }))
  }, [setState])

  useEffect(() => {
    reload()
  }, [reload])

  return { state, reload }
}