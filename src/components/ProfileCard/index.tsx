import { Container, Cover, Divider, ButtonEdit } from "./styles";

import Avatar from "../Avatar";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <header>
        <Cover src="https://img.freepik.com/fotos-gratis/papel-de-parede-de-paisagem-magica-e-mistica-em-tons-de-roxo_23-2150293331.jpg?w=1060&t=st=1690934974~exp=1690935574~hmac=c177805e142507b572a4b84ecc3a9e20727656adca7f3113468d6f722c6a49ab" />

        <div>
          <Avatar />
        </div>
      </header>

      <main>
        <h1>Ana Alves</h1>
        <p>ramos.alvesac@gmail.com</p>
      </main>

      <Divider />

      <footer>
        <ButtonEdit>Editar perfil</ButtonEdit>
      </footer>
    </Container>
  );
};

export default ProfileCard;
