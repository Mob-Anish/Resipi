import { MdSearch } from "react-icons/md";
import "./Form.css";

const Form = (props) => (
  <form onSubmit={props.recipe}>
    <input type="text" placeholder="Search your 🍲" onFocus={props.focus} onBlur={props.blur}></input>
    <button>
      <MdSearch className="search-btn" />
    </button>
  </form>
);

export default Form;
