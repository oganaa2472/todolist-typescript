import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import imageSrc from "./assets/goals.jpg";
import NewGoal from "./components/NewGoal";
export type CourseGoal = {
  title: string;
  description: string;
  id:number
}
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function addGoalHandler(title: string, description: string) {
    const newGoal: CourseGoal = {
      title:title,
      description: description,
      id: Math.random(),
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  }
  function deleteGoalHandler(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }
  return (
    <>
    <main>
      <Header image={ {src: imageSrc,alt: "A list of goals"}} >
        <h1>Your course goal</h1>
      </Header>
     
      <NewGoal onAddGoal={addGoalHandler} />
      <CourseGoalList goals={goals} onDelete={deleteGoalHandler} />

    </main>
    
    </>
  );
}
