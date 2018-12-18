import styled from '@emotion/styled';

const InfoText = styled.div`
  text-transform: uppercase;
  font-family: ${props => props.theme.fontFamily.heading};
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.colors.black.lighter};
`;

export default InfoText;
