import Form from "../Form/Form";
import "./Header.css";
import pizza from "../../assets/img/pizza.png";
import Logo from "../../assets/img/resipi-logo.png";

const style = {
  color:"#ffa502",
};

const Header = (props) => (
  <div className="header">
    <div className="header-title_form">
      <div className="header__logo">
        <img src={Logo} alt="Resipi_logo" />
      </div>
      <h1>Find</h1>
      <h1>Your Best</h1>
      <h1 style={style}>Food !</h1>
      <Form recipe={props.recipe} focus={props.focus} blur={props.blur} />
    </div>
    <div className="image">
      <img src={pizza} alt="Pizza" />
    </div>
  </div>
);

export default Header;
