export type RequestState<T> =
  | { status: 'loading' }
  | { status: 'success', data: T }
  | { status: 'failed', message: string }

export type Story = {
  id: number
  title: string
}