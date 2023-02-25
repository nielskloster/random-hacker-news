import { FC } from "react"
import { Story } from "../interfaces"
import { paths } from "../utils/paths"

type Props = {
  stories: Story[]
}

export const Stories: FC<Props> = ({ stories }) => {
  return (<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-y-12">
    {
      stories
        .map(story => (
          <button
            key={story.id}
            className="bg-slate-100 rounded-lg p-4 w-full text-left text-slate-600"
            onClick={() => window.location.href = paths.Story(story.id)}
          >
            <h1 className="text-purple-600">{story.title}</h1>
            <div>Score: {story.score}</div>
            <div>Time: {new Date(story.time * 1000).toLocaleString()}</div>
            <div>By: {story.by}({story.karma})</div>
          </button>
        ))
    }
  </div>)
}