import './Hacker.css';
import { AiFillCloseCircle } from "react-icons/ai";

export const  Hacker = (props) => {
  return (
    <div className='hacker'>
        <AiFillCloseCircle size={25} className='delete' onClick={props.onDelete} />
        <div className='header' style={{ backgroundColor: props.backgroundColor }}>
            <img src={props.picture} alt={props.nickname} />
        </div>
        <div className='baseboard'>
            <h4>{props.name}</h4>
            <h5>{props.mantra}</h5>
        </div>
    </div>
  );
}