import React from 'react';
import { Task } from 'state';

type TodoTitleProps = {
  task: Task;
};

export default function TodoTitle(props: TodoTitleProps) {
  const { task } = props;
  return (
    <div>
      <span>{task.name}</span> #<span>{task.id}</span>
    </div>
  );
}
