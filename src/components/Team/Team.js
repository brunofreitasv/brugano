import Hacker from '../Hacker';
import './Team.css';

export const  Team = (props) => {
    return (
        props.hackers.length > 0 &&
        <section className='team' style={{backgroundColor: props.secundaryColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='hackers'>
                {
                    props.hackers.map((h, index) => {
                        return <Hacker key={h.name} name={h.name} nickname={h.nickname} mantra={h.mantra} picture={h.picture} backgroundColor={props.primaryColor} onDelete={props.handleDelete} />;
                    })
                }
            </div>
        </section>  
    );
  }