import TaskHeader from 'TaskHeader';
import TimerFooter from 'TimerFooter';
import TodoMain from 'TodoMain';
import { customStyled } from 'utils/stitches';

const StyledApp = customStyled('div', {
  maxWidth: 'calc(500px - $4)',
  minHeight: 'calc(100vh - $4)',

  margin: '$2',
  border: '2px solid rgba(0,0,0,0.3)',

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
