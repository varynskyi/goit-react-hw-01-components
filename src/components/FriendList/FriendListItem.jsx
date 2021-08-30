import { Item, StatusOn, StatusOf, Avatar, Name } from './FriendList-style';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <Item evtType={isOnline} key={id}>
      {isOnline ? (
        <StatusOn>{isOnline}</StatusOn>
      ) : (
        <StatusOf>{isOnline}</StatusOf>
      )}
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};