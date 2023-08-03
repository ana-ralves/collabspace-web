import Avatar from "../Avatar";

import { Container, Content, Hashtags, Divider } from "./styles";

const Post: React.FC = () => {
  return (
    <Container>
      <header>
        <div>
          <Avatar />

          <section>
            <h1>Ana Alves</h1>
            <p>ramos.alvesac@gmail.com</p>
          </section>
        </div>

        <p>Publicado à 1h</p>
      </header>

      <main>
        <Content>
          <p>Fala galeraa 👏</p>
          <p>
            Você pode sempre sonhar, e seus sonhos se tornarão sonhos, e a
            realidade se tornará realidade. Mas é você que tem realidade. 🚀
          </p>
        </Content>

        <Hashtags>
          <span>#collabspace</span>
          <span>#confia</span>
        </Hashtags>
      </main>

      <Divider />

      <footer>
        <h1>Deixe seu comentário</h1>

        <textarea name=""></textarea>

        <button>Comentar</button>
      </footer>
    </Container>
  );
};

export default Post;
