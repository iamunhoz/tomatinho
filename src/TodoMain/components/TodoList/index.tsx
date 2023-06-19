import { useAtomValue } from 'jotai';
import { customStyled } from 'utils/stitches';
import { tasksAtom } from 'state';
import TodoTitle from './components/TodoCard/components/TodoTitle';
import TodoActions from './components/TodoCard/components/TodoActions';

const StyledContainer = customStyled('div', {
  '.taskWrapper': {
    border: '2px solid gray',
    display: 'flex',

    justifyContent: 'space-between',
  },
});

export default function TodoList() {
  const tasksList = useAtomValue(tasksAtom);
  return (
    <StyledContainer>
      {tasksList.map((task) => (
        <div className="taskWrapper" key={task.id}>
          <TodoTitle task={task} />
          <TodoActions task={task} />
        </div>
      ))}
    </StyledContainer>
  );
}
