import Post from '../Post'
import { StyledTimeline } from './styles'

const testimonies = [
  {
    photo: "https://github.com/rikmatheus.png",
    user: "Matheus Henrique",
    course: "Ciência da Computação",
    testimony: "Fala galera gente fina!",
  },
  {
    photo: "https://github.com/rikmatheus.png",
    user: "Matheus Henrique",
    course: "Ciência da Computação",
    testimony: "Fala galera gente fina!",
  },
  {
    photo: "https://github.com/rikmatheus.png",
    user: "Matheus Henrique",
    course: "Ciência da Computação",
    testimony: "Fala galera gente fina!",
  },
  {
    photo: "https://github.com/rikmatheus.png",
    user: "Matheus Henrique",
    course: "Ciência da Computação",
    testimony: "Fala galera gente fina!",
  },
  {
    photo: "https://github.com/rikmatheus.png",
    user: "Matheus Henrique",
    course: "Ciência da Computação",
    testimony: "Fala galera gente fina!",
  },
  {
    photo: "https://github.com/rikmatheus.png",
    user: "Matheus Henrique",
    course: "Ciência da Computação",
    testimony: "Fala galera gente fina!",
  },
  {
    photo: "https://github.com/rikmatheus.png",
    user: "Matheus Henrique",
    course: "Ciência da Computação",
    testimony: "Fala galera gente fina!",
  },
  {
    photo: "https://github.com/rikmatheus.png",
    user: "Matheus Henrique",
    course: "Ciência da Computação",
    testimony: "Fala galera gente fina!",
  },
  {
    photo: "https://github.com/rikmatheus.png",
    user: "Matheus Henrique",
    course: "Ciência da Computação",
    testimony: "Fala galera gente fina!",
  },
  {
    photo: "https://github.com/rikmatheus.png",
    user: "Matheus Henrique",
    course: "Ciência da Computação",
    testimony: "Fala galera gente fina!",
  },
  {
    photo: "https://github.com/rikmatheus.png",
    user: "Matheus Henrique",
    course: "Ciência da Computação",
    testimony: "Fala galera gente fina!",
  },
  {
    photo: "https://github.com/rikmatheus.png",
    user: "Matheus Henrique",
    course: "Ciência da Computação",
    testimony: "Fala galera gente fina!",
  },
  {
    photo: "https://github.com/rikmatheus.png",
    user: "Matheus Henrique",
    course: "Ciência da Computação",
    testimony: "Fala galera gente fina!",
  },
  {
    photo: "https://github.com/rikmatheus.png",
    user: "Matheus Henrique",
    course: "Ciência da Computação",
    testimony: "Fala galera gente fina!",
  },
  {
    photo: "https://github.com/rikmatheus.png",
    user: "Matheus Henrique",
    course: "Ciência da Computação",
    testimony: "Fala galera gente fina!",
  },
];

export default function Timeline() {
  return (
    <StyledTimeline>
      {
        !!testimonies && testimonies.map(testimony => <Post content={testimony} />)
      }
    </StyledTimeline>
  )
}
