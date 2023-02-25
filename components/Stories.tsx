import { FC } from "react"
import { Story } from "../interfaces"
import { paths } from "../utils/paths"

type Props = {
  stories: Story[]
}

export const Stories: FC<Props> = ({ stories }) => {
  return (<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
    {
      stories
        .map(story => (
          <div key={story.id} className="bg-slate-100 rounded p-4 w-80">
            <h1>{story.title}</h1>
            <div>{story.score}</div>
            <a href={paths.Story(story.id)} target="_blank">Show more</a>
          </div>
        ))
    }
  </div>)
}