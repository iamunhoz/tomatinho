import { useAtom } from 'jotai';
import { tasksAtom } from 'state';

// adicionar um timer no formato H:MM:SS (h deve aparecer somente quando o tempo for > 1h)
export default function TimerFooter() {
  const [tasksList] = useAtom(tasksAtom);

  const handleLog = () => {
    // eslint-disable-next-line no-console
    console.table(tasksList);
  };

  return (
    <footer>
      <button type="button" onClick={handleLog}>
        log
      </button>
    </footer>
  );
}
