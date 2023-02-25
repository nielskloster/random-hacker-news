export const paths = {
  TopStories: () => 'https://hacker-news.firebaseio.com/v0/topstories.json',
  StoryInfo: (id: number) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  AuthorInfo: (user: string) => `https://hacker-news.firebaseio.com/v0/user/${user}.json`,
} as const
