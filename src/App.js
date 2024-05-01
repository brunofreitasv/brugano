import Banner from './components/Banner'
import Form from './components/Form';
import React, { useState} from 'react';
import Team from './components/Team';

function App() {

  const [hackers, setHackers] = useState([]);

  const onNewHacker = (hacker) => {
    setHackers([...hackers, hacker]);
  }

  const teams = [
    { name: 'Mestres do Disfarce', primaryColor: '#57C278', secundaryColor: '#D9F7E9' }, 
    { name: 'Cripto-hackers', primaryColor: '#82CFFA', secundaryColor: '#E8FBFF' },
    { name: 'Hackers da Rede', primaryColor: '#E06869', secundaryColor: '#FDE7E8' },
    { name: 'Desenvolvedores Felinos', primaryColor: '#DB6EBF', secundaryColor: '#FAE9F5' },
  ]

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(t => t.name)}onRegister={hacker => onNewHacker(hacker)} />
      {
        teams.map(t => <Team 
          key={t.name} 
          name={t.name} 
          primaryColor={t.primaryColor} 
          secundaryColor={t.secundaryColor}
          hackers={hackers.filter(h => h.team === t.name)} />)
      }
    </div>
  );
}

export default App;
