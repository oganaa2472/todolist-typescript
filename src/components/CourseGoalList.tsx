
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalType } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";
import type { ReactNode } from "react";
export type CourseGoalListProps = {
    goals: CourseGoalType[];
    onDelete: (id: number) => void;
}



export default function CourseGoalList({ goals, onDelete }: CourseGoalListProps) {

    if (goals.length === 0) {
        return <InfoBox mode="hint" >
            No goals found. Maybe add one?
        </InfoBox>;
    }
    let warningBox: ReactNode;
    if (goals.length > 5) {
        warningBox = <InfoBox mode="warning" severity="medium">
            You have more than 5 goals. Consider to focus on your most important ones.
        </InfoBox>;
    }
    return  <section>
        <ul>
        {warningBox}
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={() => onDelete(goal.id)}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
            
        ))}
      </ul>
     
    </section>
}