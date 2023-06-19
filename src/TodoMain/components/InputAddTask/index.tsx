import { useAtom } from 'jotai';
import { useRef, useState } from 'react';
import { Task, tasksAtom } from 'state';

export default function InputAddTask() {
  const [taskTitle, setTaskTitle] = useState('');
  const [tasksList, setTasksList] = useAtom(tasksAtom);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (
    evt,
  ) => {
    setTaskTitle(evt.currentTarget.value);
  };

  const addNewTask = () => {
    const newList: Task[] = [
      ...tasksList,
      {
        id: tasksList.length,
        name: taskTitle,
        status: 'pending',
        timeSpent: 0,
      },
    ];

    setTasksList(newList);
    setTaskTitle('');
  };

  const handleKeyboard: React.KeyboardEventHandler<HTMLInputElement> = (
    evt,
  ) => {
    if (evt.code === 'Enter') {
      addNewTask();
      return;
    }

    if (evt.code === 'Esc' && inputRef && inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <div>
      <input
        value={taskTitle}
        onChange={handleTitleChange}
        onKeyUp={handleKeyboard}
        ref={inputRef}
      />
      <button type="button" onClick={addNewTask}>
        Add
      </button>
    </div>
  );
}
