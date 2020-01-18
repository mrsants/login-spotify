/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import logo from './assets/spotify.svg';
import {
  ActionsListerners,
  ButtonFacebook,
  ButtonLogin,
  Container,
  Content,
  Divider,
  ForgotPassword,
  Header,
  Icon,
  Strong,
  StyledForm,
  StyledInput,
  Remider,
  Text,
  Wrapper,
} from './styles';


function App() {
  return (
    <Container>
      <Header>
        <Icon src={logo} className="App-logo" alt="logo" />
      </Header>
      <Content>
        <Text>Para continuar, faça login no Spotify.</Text>
        <Wrapper>
          <ButtonFacebook>Entrar com o Facebook</ButtonFacebook>
        </Wrapper>
        <Wrapper>
          <Divider>
            <Strong className="text">OU</Strong>
          </Divider>
        </Wrapper>
        <StyledForm>
          <Wrapper>
            <StyledInput
              placeholder="Endereço de e-mail ou nome de usuário"
            />
          </Wrapper>
          <Wrapper>
            <StyledInput
              placeholder="Senha"
            />
          </Wrapper>
          <ActionsListerners>
            <Remider>
              Lembrar de mim
            </Remider>
            <ButtonLogin>Login</ButtonLogin>
          </ActionsListerners>
          <Wrapper>
            <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
          </Wrapper>
        </StyledForm>
      </Content>
    </Container>
  );
}

export default App;
