import { useAtom } from 'jotai';
import { currentTaskAtom } from 'state';

export default function TaskHeader() {
  const [currentTask] = useAtom(currentTaskAtom);
  return (
    <header>
      <span>{JSON.stringify(currentTask)}</span>
    </header>
  );
}
