import TextBox from '../TextBox';
import DropDown from '../DropDown';
import './Form.css';

export const  Form = () => {

  const teams = [
    'Mestres do Disfarce',
    'Cripto-hackers',
    'Hackers da Rede',
    'Desenvolvedores Felinos'
  ]

  return (
    <section className='form-base'>
      <form>
        <h2>Preencha os dados para cadastrar um novo hacker!</h2>
        <TextBox label="Nome Felino" placeholder="Seu nome felino" />
        <TextBox label="Apelido Hacker" placeholder="Seu apelido hacker" />
        <TextBox label="Mantra Hacker" placeholder='Seu mantra. Ex: "a internet é a minha caixa de areia"' />
        <TextBox label="Foto" placeholder="Endereço da sua foto (com óculos escuros, se possível)" />
        <DropDown label="Time" items={teams}/>
      </form>
    </section>
  );
}