import "./Navbar.scss";
import Emoji from '../Emoji/Emoji'

function Navbar(props: any) {
  return (
    <div className="navbar">
      <Emoji symbol="🌙" label="moon" />
      how is the moon today?
    </div>
  )
}

export default Navbar;
