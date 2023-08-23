import LayoutDefault from "../../layouts/Default";

import RequestFriend from "../../components/RequestFriend";

import FriendCard from "../../components/FriendCard";

import { Camera, PencilSimple, MapPin, Phone, Clock } from "phosphor-react";

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
  Avatar,
  UserInfo,
  General,
  Total,
  Contact,
  Sidebar,
  Requests,
  RequestList,
  EditInfoButton,
} from "./styles";

const Profile: React.FC = () => {
  return (
    <LayoutDefault>
      <Container>
        <Content>
          <Overview>
            <UserBanner>
              <EditCoverButton>
                <Camera size={22} weight="fill" />
              </EditCoverButton>
              <Cover src="https://img.freepik.com/free-photo/magical-mystical-landscape-wallpaper-purple-tones_23-2150293331.jpg?t=st=1691626643~exp=1691630243~hmac=b0f2432fc002e13f98d86a9d84dd4583ea2998fc6af6a59c1b8438bc2d3fb89e&w=1060" />

              <Avatar src="https://pm1.aminoapps.com/7855/295c9fa3a57d71b5d2c9a9d593cdefb115dd75e2r1-917-918v2_00.jpg" />
              <EditInfoButton>
                <PencilSimple size={22} weight="bold" />
              </EditInfoButton>
            </UserBanner>

            <UserInfo>
              <General>
                <h1>Ana Alves</h1>
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

                <span>
                  <Phone size={20} weight="bold" />
                  (17) 98802-8775
                </span>

                <span>
                  <Clock size={20} weight="bold" />
                  Entrou em Fevereiro de 2023
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
        </Sidebar>
      </Container>
    </LayoutDefault>
  );
};

export default Profile;
