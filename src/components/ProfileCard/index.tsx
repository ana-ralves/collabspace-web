import {
  Container,
  Header,
  Cover,
  Content,
  Divider,
  ButtonEdit,
  Footer,
} from "./styles";

import Avatar from "../Avatar";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Cover src="https://img.freepik.com/free-photo/magical-mystical-landscape-wallpaper-purple-tones_23-2150293331.jpg?t=st=1691626643~exp=1691630243~hmac=b0f2432fc002e13f98d86a9d84dd4583ea2998fc6af6a59c1b8438bc2d3fb89e&w=1060" />

        <div>
          <Avatar
            src="https://pm1.aminoapps.com/7855/295c9fa3a57d71b5d2c9a9d593cdefb115dd75e2r1-917-918v2_00.jpg"
            borderEffect
          />
        </div>
      </Header>

      <Content>
        <h1>Ana Cristina Ramos Alves</h1>
        <p>ramos.alvesac@gmail.com</p>
      </Content>

      <Divider />

      <Footer>
        <ButtonEdit>Editar seu perfil</ButtonEdit>
      </Footer>
    </Container>
  );
};

export default ProfileCard;
