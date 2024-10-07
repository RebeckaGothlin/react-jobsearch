import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
`;

export const Column = styled.div`
  padding: 1rem;
`;

export const DialogContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70svh;
`;

export const RegionList = styled.div`
  width: 50%;
  overflow-y: auto;
`;

export const MunicipalityList = styled.div`
  width: 50%;
  overflow-y: auto;
`;

export const RegionItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const CheckboxLabel = styled.label`
  display: block;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const Button = styled.button`
  padding: 1rem;
`;
