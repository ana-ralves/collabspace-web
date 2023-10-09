import api from "../Api/api";

import {
  ICancelRequestRequest,
  ICancelRequestResponse,
  ICreateFriendRequest,
  ICreateFriendResponse,
  IListAllFriendsByUserRequest,
  IListAllFriendsByUserResponse,
  IListAllRequestsByUserRequest,
  IListAllRequestsByUserResponse,
} from "./types";

const listAllFriendsByUser = async ({
  id,
}: IListAllFriendsByUserRequest): Promise<IListAllFriendsByUserResponse> => {
  const response = await api
    .get(`/friends/listAllFriends/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const listAllRequestsByUser = async ({
  id,
}: IListAllRequestsByUserRequest): Promise<IListAllRequestsByUserResponse> => {
  const response = await api
    .get(`/friends/listAllRequests/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const createFriend = async ({
  id,
}: ICreateFriendRequest): Promise<ICreateFriendResponse> => {
  const response = await api
    .post(`/friends/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const cancelRequest = async ({
  id,
}: ICancelRequestRequest): Promise<ICancelRequestResponse> => {
  const response = await api
    .patch(`/friends/cancelRequest/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

export {
  listAllFriendsByUser,
  listAllRequestsByUser,
  createFriend,
  cancelRequest,
};
