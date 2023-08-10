import Avatar from "../Avatar";
import Comment from "../Comment";
import InputArea from "../InputArea";
import Button from "../Button";

import {
  Container,
  Header,
  Author,
  AuthorInfo,
  Content,
  Description,
  Hashtags,
  Divider,
  CommentForm,
  Comments,
} from "./styles";

const Post: React.FC = () => {
  return (
    <Container>
      <Header>
        <Author>
          <Avatar
            src="https://b.fssta.com/uploads/application/soccer/headshots/713.png"
            borderEffect
          />

          <AuthorInfo>
            <h1>Neymar Jr</h1>
            <p>ney@hotney.com</p>
          </AuthorInfo>
        </Author>

        <time>Publicado à 1h</time>
      </Header>

      <Content>
        <Description>
          <p>Fala galeraa 👋</p>
          <p>
            Você pode sempre sonhar, e seus sonhos se tornarão sonhos, e a
            realidade se tornará realidade. Mas é você que tem que torná-los
            realidade. 🚀
          </p>
        </Description>

        <Hashtags>
          <span>#collabspace</span>
          <span>#confia</span>
        </Hashtags>
      </Content>

      <Divider />

      <CommentForm>
        <h1>Deixe seu comentário</h1>

        <InputArea
          placeholder="Escreva seu comentário aqui ..."
          name=""
          rows={3}
        />

        <Button>Comentar</Button>
      </CommentForm>

      <Divider />

      <Comments>
        <Comment />
      </Comments>
    </Container>
  );
};

export default Post;