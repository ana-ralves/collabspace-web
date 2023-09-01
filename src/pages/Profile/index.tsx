import { useParams } from "react-router-dom";
import moment from "moment";
import { toast } from "react-toastify";
import { useState, useCallback, useEffect } from "react";

import LayoutDefault from "../../layouts/Default";

import RequestFriend from "../../components/RequestFriend";

import FriendCard from "../../components/FriendCard";

import AvatarCircle from "../../components/AvatarCircle";

import { Camera, PencilSimple, MapPin, Phone, Clock } from "phosphor-react";
import { listUserById } from "../../services/users";
import { IUser } from "../../services/users/types";

import {
  Container,
  Content,
  Overview,
  Friends,
  FriendList,
  AreaFriendButton,
  Cover,
  UserBanner,
  EditCoverButton,
  UserInfo,
  General,
  Total,
  Contact,
  Sidebar,
  Requests,
  RequestList,
  EditInfoButton,
} from "./styles";
import { useAuthentication } from "../../contexts/Authentication";

moment.defineLocale("pt-br", {
  weekdays:
    "Segunda_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado_Domingo".split(
      "_",
    ),
  months:
    "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
      "_",
    ),
});

const Profile: React.FC = () => {
  const { id } = useParams();
  const { signOut } = useAuthentication();

  const [user, setUser] = useState<IUser | null>(null);

  const handleListUserById = useCallback(async () => {
    try {
      if (id) {
        const { result, message, data } = await listUserById({ id });

        if (result === "success") {
          if (data) setUser(data.user);
        }

        if (result === "error") toast.error(message);
      }
    } catch (error: any) {
      toast.error(error.message as string);
    }
  }, [id]);

  useEffect(() => {
    handleListUserById();
  }, [id, handleListUserById]);

  return (
    <LayoutDefault>
      <Container>
        <Content>
          <Overview>
            <UserBanner>
              <EditCoverButton>
                <Camera size={22} weight="fill" />
              </EditCoverButton>
              <Cover src="https://i.imgur.com/gH2QLjf.png" />

              <div>
                <AvatarCircle
                  size="192px"
                  src={user?.avatarUrl || "https://i.imgur.com/HYrZqHy.jpg"}
                />
              </div>

              <EditInfoButton>
                <PencilSimple size={22} weight="bold" />
              </EditInfoButton>
            </UserBanner>

            <UserInfo>
              <General>
                <h1>{user?.name}</h1>
                <p>
                  Você só vai me olhar, me julgar, tirar conclusões
                  precipitadas, mas ainda… assim não vai me conhecer.
                </p>

                <Total>
                  <span>
                    <strong>115</strong> publicações
                  </span>
                  <span>
                    <strong>1562</strong> amigos
                  </span>
                </Total>
              </General>

              <Contact>
                <span>
                  <MapPin size={20} weight="bold" />
                  Jaborandi, São Paulo, Brasil
                </span>

                {user?.telephone && (
                  <span>
                    <Phone size={20} weight="bold" />
                    {user?.telephone}
                  </span>
                )}

                <span>
                  <Clock size={20} weight="bold" />
                  {moment(user?.createdAt).format("[Entrou em] MMMM [de] YYYY")}
                </span>
              </Contact>
            </UserInfo>
          </Overview>

          <Friends>
            <h1>Amigos</h1>

            <FriendList>
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
            </FriendList>

            <AreaFriendButton>
              <button>Ver todos os amigos</button>
            </AreaFriendButton>
          </Friends>
        </Content>

        <Sidebar>
          <Requests>
            <h1>Solicitações de amizade</h1>

            <RequestList>
              <RequestFriend />
              <RequestFriend />
              <RequestFriend />
              <RequestFriend />
              <RequestFriend />
            </RequestList>
          </Requests>

          <a style={{ color: "white", marginTop: "16px" }} onClick={signOut}>
            Sair
          </a>
        </Sidebar>
      </Container>
    </LayoutDefault>
  );
};

export default Profile;
