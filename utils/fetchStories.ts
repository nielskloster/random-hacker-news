import { Story } from "../interfaces";

const paths = {
  TopStories: () => 'https://hacker-news.firebaseio.com/v0/topstories.json',
  StoryInfo: (id: number) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  AuthorInfo: (id: number) => `https://hacker-news.firebaseio.com/v0/user/${id}.json`,
} as const

type StoryInfo = {
  title: string
}

async function fetchStoryIds(): Promise<number[]> {
  const response = await fetch(paths.TopStories())
  if (!response.ok) {
    throw new Error('Could not fetch stories')
  }
  const data: number[] = await response.json()
  return data
}

async function fetchStoryInfo(id: number): Promise<Story> {
  const response = await fetch(paths.StoryInfo(id))
  if (!response.ok) {
    throw new Error('Could not fetch story info for story: ' + id)
  }
  const data: StoryInfo = await response.json()
  return { id, title: data.title }
}

export async function fetchStories(): Promise<Story[]> {
  const storyIds = await fetchStoryIds()

  const randomIds = storyIds
    .sort(() => Math.random() - 0.5)
    .slice(0, 10)

  const stories = await Promise.all(randomIds.map(id => fetchStoryInfo(id)))

  return stories
}