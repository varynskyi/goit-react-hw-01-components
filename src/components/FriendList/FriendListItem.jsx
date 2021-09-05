import { Item, Status, Avatar, Name } from "./FriendList-style";

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <Item key={id}>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};