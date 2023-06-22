import { useAtom } from 'jotai';
import { customStyled } from 'helpers/stitches';
import { currentTaskAtom } from 'state';
// import logoMascot from '../assets/logo-mascot.jpg';

const StyledHeader = customStyled('header', {
  display: 'flex',

  justifyContent: 'space-between',

  alignItems: 'flex-start',

  '.header--middle': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',

    img: {
      height: 70,
      aspectRatio: 4 / 3,
    },
    h1: {
      color: '$redAlizarinCrimson',
      position: 'absolute',
      top: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      wtextStroke: '5px black',
    },
  },
});

export default function TaskHeader() {
  const [currentTask] = useAtom(currentTaskAtom);
  return (
    <StyledHeader>
      <div className="header--leftside">X</div>
      <div className="header--middle">
        {/* <img src={logoMascot} alt="logoMascot" />
        <h1

        >
          Tomatinho
        </h1> */}
      </div>

      <div className="header--rightside">
        <span>{JSON.stringify(currentTask || 'Z')}</span>
      </div>
    </StyledHeader>
  );
}
