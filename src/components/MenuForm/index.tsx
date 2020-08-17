import React from 'react';
import googleLogo from '../../assets/googleLogo.svg'
import { Container, Navigation, DropboxLogo, Form } from './styles';

function MenuForm() {
  function handleToggle() {
    if(window.toggleActiveMenu) window.toggleActiveMenu();
  }
  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>DropboxClone</span>
        </h1>
        <button className="action--close" onClick={handleToggle}> X </button>
      </Navigation>
      <Form>
        <p className="title">Registre-se</p>
        <span className="subtitle">ou acesse sua conta</span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <fieldset>
          <input type="checkbox" />
          <label>Concordo com os Termos do DropboxClone</label>
        </fieldset>

        <button>Registre-se</button>
        <button className="btnGoogle">
          <img src={googleLogo} alt="Logo Google"/>
          Registre-se pelo Google
        </button>

        <span className="terms">Esta página é protegida pelo reCAPTCHA e está sujeita à Política de privacidade e aos Termos de serviço do Google.</span>

      </Form>
    </Container>
  )
}
export default MenuForm
