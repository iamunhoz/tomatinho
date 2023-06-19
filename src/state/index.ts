import { atom } from 'jotai';

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

export const timerAtom = atom(0);

export const currentTaskAtom = atom((get) => {
  const taskId = get(currentTaskIdAtom);
  const taskList = get(tasksAtom);

  return taskList.find((task) => task.id === taskId);
});
