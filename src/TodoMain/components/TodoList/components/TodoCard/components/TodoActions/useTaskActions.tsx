/* eslint-disable @typescript-eslint/naming-convention */
import { useAtom, useSetAtom } from 'jotai';
import { useEffect, useRef } from 'react';
import { Task, currentTaskIdAtom, tasksAtom } from 'state';

type TodoActionsProps = {
  task: Task;
};

// TODO depurar porque o timer está adicionando valores excessivos
export default function useTaskActions(props: TodoActionsProps) {
  const { task } = props;
  const [tasksList, setTasksList] = useAtom(tasksAtom);
  const setCurrentTaskId = useSetAtom(currentTaskIdAtom);
  const taskTimer = useRef(task.timeSpent);

  // timer getter setter

  const handleStart = () => {
    // timer start
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
    const timeSpent = taskTimer.current; // colocar real setter depois
    setTasksList(
      tasksList.map(
        (tsk): Task =>
          tsk.id === task.id ? { ...tsk, status: 'paused', timeSpent } : tsk,
      ),
    );
    setCurrentTaskId('');
  };

  const handleDelete = () => {
    setTasksList(tasksList.filter((tsk) => tsk.id !== task.id));
  };

  useEffect(() => {
    if (task.status !== 'ongoing') return () => {}; // talvez esse controle não funcione

    let timer_RAF = performance.now();

    function loop() {
      const ellapsedTime = performance.now() - timer_RAF;
      if (ellapsedTime >= 1000) {
        taskTimer.current += 1;
        timer_RAF = performance.now();
      }
      window.requestAnimationFrame(loop);
    }

    const frameloopId = window.requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(frameloopId);
    };
  }, [task.status]);

  return {
    handleStart,
    handlePause,
    handleDelete,
  };
}
