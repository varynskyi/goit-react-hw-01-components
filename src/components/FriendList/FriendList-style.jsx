import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  margin-bottom: 5px;
  width: 250px;
  border: 1px solid rgb(22, 22, 22);
  background: rgb(233, 241, 237);
`;

export const StatusOn = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(50,205,50);
`;

export const StatusOf = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
`;

export const Avatar = styled.img`
  margin: 10px;
`;

export const Name = styled.p`
  font-weight: 600;
`;