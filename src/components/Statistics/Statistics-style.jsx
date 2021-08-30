import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border: 1px solid black;
  background: ${props => (props.evtType <= '20' ? 'tomato' : 'green')};
`;

export const Label = styled.span`
  margin-bottom: 5px;
  color: black;
`;