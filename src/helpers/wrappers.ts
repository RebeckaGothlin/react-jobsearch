import styled from 'styled-components';

export const PageWrapper = styled.div`
display: grid;
grid-template-rows: auto auto 1fr auto;
grid-template-columns: 1fr;
height: 100vh;
`;

export const HeaderWrapper = styled.div`
grid-row: 1;
grid-column: 1;
`;

export const SearchBarWrapper = styled.div`
grid-row: 2;
grid-column: 1;
`;

export const ContentWrapper = styled.div<{ jobSelected: boolean}>`
grid-row: 3;
grid-column: 1;
display: grid;
grid-template-columns: ${(props) => 
props.jobSelected ? '1fr 3fr' : '1fr'};
`;
export const SearchResultsWrapper = styled.div`
  background-color: white;
`;

export const AdWrapper = styled.div<{visible: boolean}>`
display: ${(props) => (props.visible ?  'block' : 'none')};
`;

export const FooterWrapper = styled.div`
grid-row: 4;
grid-column:1;
`;