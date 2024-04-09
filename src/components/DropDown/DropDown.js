import './DropDown.css';

export const  DropDown = (props) => {
  return (
    <div className='drop-down'>
        <label>{props.label}</label>
        <select>
            {props.items.map(i => 
            {
                return (
                    <option key={i}>{i}</option>
                );
            })}
        </select>
    </div>
  );
}