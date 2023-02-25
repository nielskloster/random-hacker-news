export type RequestState<T> =
  | { status: 'loading' }
  | { status: 'success', data: T }
  | { status: 'failed', message: string }


export type StoryInfo = {
  id: number
  title: string
  score: number
  by: string
  time: number
}

export type AuthorInfo = {
  karma: number
}

export type Story = StoryInfo & AuthorInfo