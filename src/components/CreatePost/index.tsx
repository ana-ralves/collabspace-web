import Avatar from "../Avatar";
import InputArea from "../InputArea";
import { Container, Content } from "./styles";
import Button from "../Button";

const CreatePost: React.FC = () => {
  return (
    <Container>
      <Content>
        <Avatar
          src="https://pm1.aminoapps.com/7855/295c9fa3a57d71b5d2c9a9d593cdefb115dd75e2r1-917-918v2_00.jpg"
          borderEffect
        />

        <InputArea rows={2} placeholder="O que temos para hoje?" />
      </Content>

      <Button>Publicar</Button>
    </Container>
  );
};

export default CreatePost;
