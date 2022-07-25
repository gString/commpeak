import styled from "styled-components";

const TAB_HEIGHT = "40px";

export const Wrapper = styled.article`
  display: inline-block;
  width: 600px;
`;

export const Title = styled.h3`
  color: cornflowerblue;
`;

export const TextEditLabel = styled.label`
  margin-top: 70px;
  position: relative;
  display: flex;
  justify-content: center;
  border: 1px solid lightgray;
`;

export const LabelText = styled.span`
  position: absolute;
  top: -${ TAB_HEIGHT };
  left: -1px;
  height: ${ TAB_HEIGHT };
  background-color: #eee;
  color: cornflowerblue;
  line-height: ${ TAB_HEIGHT };
  padding: 0 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid lightgray;
  border-bottom: none;
`;

export const TextEdit = styled.textarea`
  width: 100%;
  min-height: 120px;
  border: none;
  outline: none;
  padding: 20px;
  overflow: scroll;
  resize: none;
`;

export const ResetButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Bar = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  padding: 0 20px;
`;

export const StyledButton = styled.button`
  height: ${ TAB_HEIGHT };
  background-color: #efeeef;
  color: ${props => props.added ? "cornflowerblue" : "darkslateblue"};
  line-height: ${ TAB_HEIGHT };
  border: none;
  padding: 0 20px;
  border-radius: ${ TAB_HEIGHT };
  text-transform: uppercase;
  font-weight: 600;
  opacity: ${props => props.added ? 1 : .8};
  cursor: ${props => props.added ? "default" : "pointer"};


  &:hover {
    opacity: 1;
  }
`;

export const Counter = styled.p`
  text-align: left;
  font-size: 12px;
  color: gray;
`;

export const PreviewTitle = styled.h4`
  text-align: left;
  color: cornflowerblue;
  margin-bottom: 2px;
`;

export const Preview = styled.p`
  text-align: left;
  white-space: pre-line;
  background-color: cornflowerblue;
  color: white;
  margin-top: 0;
  padding: 20px;
  min-height: 60px;
  border-radius: 15px;
  border-top-left-radius: 0;
`;
