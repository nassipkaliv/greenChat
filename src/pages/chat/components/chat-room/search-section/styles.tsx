import styled from "styled-components";
import SearchField from "../../search-field/SearchField";

export const Search = styled(SearchField)`
  /* common styles for bottom border */
  border-bottom: 1px solid ${(props) => props.theme.common.borderColor};
  /* common styles for bottom border */
`;

export const Content = styled.div`
  background: white;
  height: 100%;
  padding-top: 5pc;
  color: ${props => props.theme.common.titleColor};
  text-align: center;
  font-size: 0.85rem;
`;