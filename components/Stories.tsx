import { FC } from "react"
import { Story } from "../interfaces"
import { paths } from "../utils/paths"

type Props = {
  stories: Story[]
}

export const Stories: FC<Props> = ({ stories }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-y-12">
    {
      stories
        .map(story => (
          <button
            key={story.id}
            className="bg-slate-100 rounded-lg p-4 w-full text-left text-slate-600 flex flex-col space-y-2"
            onClick={() => window.open(paths.Story(story.id), '_blank')}
          >
            <h1 className="text-purple-600 truncate">{story.title}</h1>
            <div className="text-sm">
              <div>Score: {story.score}</div>
              <div>Time: {new Date(story.time * 1000).toLocaleString()}</div>
              <div>By: {story.by}({story.karma})</div>
            </div>
          </button>
        ))
    }
  </div>
)
