import Title from '../title/Title.tsx';
import './Main.css';
import Squad from '../players/Squad.tsx';

function Main() {
  return (
    <div className="Main">
      <Title />
      <Squad />
    </div>
  );
}

export default Main;
