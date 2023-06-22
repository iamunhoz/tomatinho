import { atom } from 'jotai';

// task state
type TaskData = Record<string, unknown> | undefined;

export type Task = {
  id: number | string;
  name: string;
  status: 'pending' | 'ongoing' | 'finished' | 'canceled' | 'paused';
  data?: TaskData;
  timeSpent: number;
};

export const tasksAtom = atom<Task[]>([]);

export const currentTaskIdAtom = atom<number | string>('');

export const currentTaskAtom = atom((get) => {
  const taskId = get(currentTaskIdAtom);
  const taskList = get(tasksAtom);
  return taskList.find((task) => task.id === taskId);
});

// timer state
export const timerSecondsAtom = atom(0);

type TimerState = 'off' | 'on' | 'paused';
export const timerStatusAtom = atom<TimerState>('off');
