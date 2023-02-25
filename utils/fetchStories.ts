import { Story } from "../interfaces";
import { paths } from "./paths";

type StoryInfo = {
  title: string
  by: string
}

type AuthorInfo = {
  id: string
  karma: number
}

async function fetchStoryIds(): Promise<number[]> {
  const response = await fetch(paths.TopStories())
  if (!response.ok) {
    throw new Error('Could not fetch stories')
  }
  const data: number[] = await response.json()
  return data
}

async function fetchStoryInfo(id: number): Promise<StoryInfo> {
  const response = await fetch(paths.StoryInfo(id))
  if (!response.ok) {
    throw new Error('Could not fetch story info for story: ' + id)
  }
  const data: StoryInfo = await response.json()
  return data
}

async function fetchAuthorInfo(user: string): Promise<AuthorInfo> {
  const response = await fetch(paths.AuthorInfo(user))
  if (!response.ok) {
    throw new Error('Could not fetch author info for user: ' + user)
  }
  const data: AuthorInfo = await response.json()
  return data
}

async function fetchStory(id: number): Promise<Story> {
  const storyInfo = await fetchStoryInfo(id)
  const authorInfo = await fetchAuthorInfo(storyInfo.by)

  return {
    id,
    title: storyInfo.title,
    author: authorInfo.id,
    authorKarma: authorInfo.karma
  }
}

export async function fetchStories(): Promise<Story[]> {
  const storyIds = await fetchStoryIds()

  const randomIds = storyIds
    .sort(() => Math.random() - 0.5)
    .slice(0, 10)

  const stories = await Promise.all(randomIds.map(id => fetchStory(id)))

  return stories
}