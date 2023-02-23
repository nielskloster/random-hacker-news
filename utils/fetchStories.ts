import { Story } from "../interfaces";

const paths = {
  TopStories: () => 'https://hacker-news.firebaseio.com/v0/topstories.json',
  StoryInfo: (id: number) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  AuthorInfo: (id: number) => `https://hacker-news.firebaseio.com/v0/user/${id}.json`,
} as const


export async function fetchStoryIds(): Promise<number[]> {
  const response = await fetch(paths.TopStories())
  if (!response.ok) {
    throw new Error('Could not fetch stories')
  }
  const data: number[] = await response.json()
  return data
}

export async function fetchStories(): Promise<Story[]> {
  const storyIds = await fetchStoryIds()

  return storyIds
    .sort(() => Math.random() - 0.5)
    .slice(0, 10)
    .map(id => ({ id, title: id.toString() }))
}