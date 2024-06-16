import { type FC, useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal: FC<NewGoalProps> = ({ onAddGoal }) => {
  // useRef(); => contain undefined as a default starting value, ref don't allow to contain undefined as a value. => so we should add null as an initial value.
  // undefined => means that we don't have a value at all!
  // null => means that we don't have a value yet!

  // HTMLInputElement => because ts don't know  that when we use this ref the value will be of type input element

  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // const enteredGoal = goal.current.value; // 'goal.current' is possibly 'null' => ts sees that goal.current is null so we need to tell ts is will never be null using "!"
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    onAddGoal(enteredGoal, enteredSummary);

    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
