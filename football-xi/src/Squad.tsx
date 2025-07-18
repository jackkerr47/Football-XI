import './Main.css';
import Row from './Row.tsx';

function Squad() {
  return (
    <div className="squad">
      <Row top={'20%'} numberOfPlayers={2}/>
      <Row top={'40%'} numberOfPlayers={4}/>
      <Row top={'60%'} numberOfPlayers={4}/>
      <Row top={'80%'} numberOfPlayers={1}/>
    </div>
  )
}

export default Squad;