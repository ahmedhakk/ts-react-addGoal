import { useState } from "react";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function addGoalHandler(goal: string, summary: string) {
    const newGoal: CourseGoal = {
      title: goal,
      description: summary,
      id: Math.random(),
    };

    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  }

  function deleteGoalHandler(id: number) {
    const filteredGoals: CourseGoal[] = goals.filter((goal) => goal.id !== id);

    setGoals(filteredGoals);
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={addGoalHandler} />

      <CourseGoalList goals={goals} onDeleteGoal={deleteGoalHandler} />
    </main>
  );
}
