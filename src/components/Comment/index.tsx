import { Trash } from "phosphor-react";

import Avatar from "../Avatar";

import { Container, CommentBox, AuthorAndTime } from "./styles";

const Comment: React.FC = () => {
  return (
    <Container>
      <Avatar />

      <CommentBox>
        <AuthorAndTime>
          <h1>Ana Alves</h1>
          <time>Cerca de 2h</time>

          <button>
            <Trash size={22} />
          </button>
        </AuthorAndTime>

        <p>
          Aí Ney, tá ligado que LeBroun Ficou impressionado com o tênis lá em
          Miami... 😁👟
        </p>
      </CommentBox>
    </Container>
  );
};

export default Comment;
