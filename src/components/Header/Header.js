import Form from "../Form/Form";
import './Header.css';

const Header = (props) => (
  <div className="header">
    <h1>Find</h1>
    <h1>Your Best</h1>
    <h1>Food !</h1>
    <Form recipe={props.recipe} focus={props.focus} blur={props.blur}/>
  </div>
);

export default Header;