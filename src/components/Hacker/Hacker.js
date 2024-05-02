import './Hacker.css';

export const  Hacker = (props) => {
  return (
    <div className='hacker'>
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