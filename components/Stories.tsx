import { FC } from "react"
import { Story } from "../interfaces"
import { getRelativeTime } from "../utils/getRelativeTime"
import { paths } from "../utils/paths"

type Props = {
  stories: Story[]
  reload: VoidFunction
}

export const Stories: FC<Props> = ({ stories, reload }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-y-12">
    {
      stories
        .map(story => (
          <button
            key={story.id}
            className="bg-slate-100 rounded-lg p-4 w-full text-left text-slate-600 flex flex-col space-y-2"
            onClick={() => window.open(paths.Story(story.id), '_blank')}
          >
            <h1 className="text-purple-600">{story.title}</h1>
            <div className="text-sm">
              <div>Score: {story.score}</div>
              <div>Posted {getRelativeTime(story.time * 1000)}</div>
              <div>By: {story.by}({story.karma})</div>
            </div>
          </button>
        ))
    }
    <div>
      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={reload}>Reload</button>
    </div>
  </div>
)
