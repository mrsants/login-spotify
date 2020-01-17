import React from 'react';
import logo from "./assets/spotify.svg";

import { 
   Header,
   Icon,
   Container,
   Content,
   Text,
   Wrapper,
   ButtonFacebook,
   Divider,
   Strong,
   StyledForm, 
   StyledInput
} from "./styles";

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
        </StyledForm>
      </Content>
    </Container>
  );
}

export default App;
