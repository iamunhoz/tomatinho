import { customStyled } from 'helpers/stitches';
import { Task } from 'state';
import useTaskActions from './useTaskActions';

const StyledContainer = customStyled('div', {
  display: 'flex',

  button: {
    width: '$4',
  },
});

type TodoActionsProps = {
  task: Task;
};

export default function TodoActions(props: TodoActionsProps) {
  const { task } = props;

  const { handleStart, handlePause, handleDelete } = useTaskActions({
    task,
  });

  return (
    <StyledContainer>
      <button
        type="button"
        onClick={handleStart}
        disabled={task.status === 'ongoing'}
      >
        &gt;
      </button>
      <button
        type="button"
        onClick={handlePause}
        disabled={task.status !== 'ongoing'}
      >
        ||
      </button>
      <button type="button" onClick={handleDelete}>
        X
      </button>
    </StyledContainer>
  );
}
