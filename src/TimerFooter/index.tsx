import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { tasksAtom, timerStatusAtom, timerSecondsAtom } from 'state';

// adicionar um timer no formato H:MM:SS (h deve aparecer somente quando o tempo for > 1h)
export default function TimerFooter() {
  const [tasksList] = useAtom(tasksAtom);
  const [timerStatus, setTimerStatus] = useAtom(timerStatusAtom);
  const [timerSeconds, setTimerSeconds] = useAtom(timerSecondsAtom);

  const handleLog = () => {
    // eslint-disable-next-line no-console
    console.table(tasksList);
  };

  const handleStart = () => {
    setTimerStatus('on');
  };

  const handlePause = () => {
    setTimerStatus('paused');
  };

  const handleStop = () => {
    setTimerStatus('off');
  };

  useEffect(() => {
    let rafId: number;
    let lastTime = new Date().getTime();

    const updateTimer = () => {
      const currentTime = new Date().getTime();

      if (timerStatus === 'on') {
        if (currentTime - lastTime >= 1000) {
          lastTime = currentTime;
          setTimerSeconds((prev) => prev + 1);
        }
        rafId = requestAnimationFrame(updateTimer);
      } else if (timerStatus === 'paused') {
        cancelAnimationFrame(rafId);
      } else {
        setTimerSeconds(() => 0);
        cancelAnimationFrame(rafId);
      }
    };

    rafId = requestAnimationFrame(updateTimer);

    return () => {
      console.log('cancelling animation[rafId]', rafId);
      cancelAnimationFrame(rafId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerStatus]);
  return (
    <footer>
      <div>
        <div>Timer Status: {timerStatus}</div>
        <div>Timer Seconds: {timerSeconds}</div>
        <button type="button" onClick={handleStart}>
          Start
        </button>
        <button type="button" onClick={handlePause}>
          Pause
        </button>
        <button type="button" onClick={handleStop}>
          Stop
        </button>
      </div>
      <button type="button" onClick={handleLog}>
        log
      </button>
    </footer>
  );
}
