import TaskHeader from 'TaskHeader';
import TimerFooter from 'TimerFooter';
import TodoMain from 'TodoMain';
import { customStyled } from 'helpers/stitches';

const StyledApp = customStyled('div', {
  maxWidth: 'calc(500px - $4)',
  height: '100%',

  background:
    'radial-gradient(circle, rgba(99,135,21,1) 0%, rgba(36,40,11,1) 100%)',

  display: 'flex',
  flexDirection: 'column',

  'header, footer': {
    height: 100,
  },
  main: {
    flex: 1,
  },
});

function App() {
  return (
    <StyledApp>
      <TaskHeader />
      <TodoMain />
      <TimerFooter />
    </StyledApp>
  );
}

export default App;
