import TextBox from '../TextBox';
import DropDown from '../DropDown';
import Button from '../Button';
import './Form.css';
import { useState }  from 'react'

export const  Form = (props) => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [mantra, setMantra] = useState('');
  const [picture, setPicture] = useState('');
  const [team, setTeam] = useState('');

  const save = (event) => {
    event.preventDefault()
    props.onRegister({
      name, nickname, mantra, picture, team
    });
    setName('');
    setNickname('');
    setMantra('');
    setPicture('');
    setTeam('');
  }

  return (
    <section className='form-base'>
      <form onSubmit={save}>
        <h2>Preencha os dados para cadastrar um novo hacker!</h2>
        <TextBox required={true} label="Nome Felino" placeholder="Seu nome felino" value={name} userTyping={v => setName(v)} />
        <TextBox required={true} label="Apelido Hacker" placeholder="Seu apelido hacker" value={nickname} userTyping={v => setNickname(v)} />
        <TextBox required={true} label="Mantra Hacker" placeholder='Seu mantra. Ex: "a internet é a minha caixa de areia"' value={mantra} userTyping={v => setMantra(v)} />
        <TextBox label="Foto" placeholder="Endereço da sua foto (com óculos escuros, se possível)" value={picture} userTyping={v => setPicture(v)} />
        <DropDown label="Time" items={props.teams} value={team} selectionChanged={v => setTeam(v)} />
        <Button>
          Criar card
        </Button>
      </form>
    </section>
  );
}