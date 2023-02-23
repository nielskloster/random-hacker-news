import { FC } from "react"
import { Story } from "../interfaces"

type Props = {
  stories: Story[]
}

export const Stories: FC<Props> = ({ stories }) => {
  return <ul>
    {
      stories
        .map(story => (<li key={story.id}>{story.title} : {story.author} : {story.authorKarma}</li>))
    }
  </ul>
}