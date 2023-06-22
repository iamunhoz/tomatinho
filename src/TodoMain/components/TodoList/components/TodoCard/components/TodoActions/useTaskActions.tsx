/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
import { useAtom, useSetAtom } from 'jotai';
// import { useRef } from 'react';
import { Task, currentTaskIdAtom, tasksAtom, timerStatusAtom } from 'state';

type TodoActionsProps = {
  task: Task;
};

export default function useTaskActions(props: TodoActionsProps) {
  const { task } = props;
  const [tasksList, setTasksList] = useAtom(tasksAtom);
  const setCurrentTaskId = useSetAtom(currentTaskIdAtom);
  // const refTaskTimer = useRef(0);
  const setTimerStatus = useSetAtom(timerStatusAtom);
  // timer getter setter

  const handleStart = () => {
    setTimerStatus('on');
    setTasksList(
      tasksList.map(
        (tsk): Task =>
          tsk.id === task.id
            ? { ...task, status: 'ongoing' }
            : {
                ...tsk,
                status: tsk.status === 'ongoing' ? 'paused' : tsk.status,
                /* timeSpent:
                  tsk.status === 'ongoing'
                    ? tsk.timeSpent + 10
                    : task.timeSpent, */
              },
      ),
    );
    setCurrentTaskId(task.id);
  };

  const handlePause = () => {
    setTimerStatus('paused');
    setTasksList(
      tasksList.map(
        (tsk): Task =>
          tsk.id === task.id
            ? {
                ...tsk,
                status: 'paused',
                // timeSpent: tsk.timeSpent + refTaskTimer.current,
              }
            : tsk,
      ),
    );
    setCurrentTaskId('');
    // refTaskTimer.current = 0;
  };

  const handleDelete = () => {
    setTimerStatus('off');
    setTasksList(tasksList.filter((tsk) => tsk.id !== task.id));
  };
  return {
    handleStart,
    handlePause,
    handleDelete,
  };
}
