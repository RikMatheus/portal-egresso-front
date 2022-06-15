import { StyledPost } from './styles'

type PostType = {
    content: PostContent,
}

type PostContent = {
    photo: string,
    user: string,
    course: string,
    testimony: string,
}

export default function Post ({ content }: PostType) {
  return (
    <StyledPost>
        <div className="post__image">
            <img src={ content.photo } alt={ content.user } />
        </div>
        <div className="post__wrapper">
            <p className="post__owner">{ content.user }</p>
            <span className="post__course">Egresso de { content.course }</span>
            <p className="post__content">{ content.testimony }</p>
        </div>
    </StyledPost>
  )
}
