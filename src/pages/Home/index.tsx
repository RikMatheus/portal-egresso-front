import Timeline from "../../components/Timeline"
import Menu from "../../components/Menu"
import Courses from "../../components/Courses"

import { StyledHome } from './styles'

export default function Home() {
  return (
    <StyledHome>
      <section>
        <Menu />
      </section>
      <section>
        <Timeline />
      </section>
      <section>
        <Courses />
      </section>
    </StyledHome>
  )
}
