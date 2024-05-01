import Banner from './components/Banner'
import Form from './components/Form';
import React, { useState} from 'react';

function App() {

  const [hackers, setHackers] = useState([]);

  const onNewHacker = (hacker) => {
    setHackers([...hackers, hacker]);

    console.log(hackers);
  }

  return (
    <div className="App">
      <Banner />
      <Form onRegister={hacker => onNewHacker(hacker)} />
    </div>
  );
}

export default App;
