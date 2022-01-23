import "./Navbar.scss";
import Emoji from '../Emoji/Emoji'

function Navbar(props: any) {
  return (
    <div className="navbar">
      <Emoji symbol="🐱" label="cat" />
      cool cat fact?
    </div>
  )
}

export default Navbar;
