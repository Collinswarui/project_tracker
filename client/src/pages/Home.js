import { ProjectOverview } from "../components/ProjOverview"


export const Home = ({ projects }) => {
  return (
    <div>
      <h2>Welcome to your Projects</h2>
      <ProjectOverview projects={projects} />
    </div>
  )
}



