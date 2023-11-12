import { ProjectOverview } from "../HomePg/ProjOverview"
import { TaskStatus } from "../HomePg/TaskStatus"
import { Activity } from "../HomePg/Activity"


export const Home = ({ projects, tasks, activities }) => {
  return (
    <div>
      <h2>Welcome to your Projects</h2>
      <ProjectOverview projects={projects} />
      <TaskStatus tasks={tasks} />
      <Activity activities={activities} />
    </div>
  )
}



