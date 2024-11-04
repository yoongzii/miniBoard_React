//Styled Components => 모음
import { styled, createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    color: #333; font-size: 18px;
    font-family: 'Pretendard', '맑은 고딕', sans-serif;
    background: #333;
  }
  input, textarea {font: inherit;}
  button {cursor: pointer;font: inherit;}
  .blind {}
`

export const Wrapper = styled.div`
  width: 500px;min-height:600px;
  margin: 20px auto;padding: 40px;
  background: #FFF;border: 1px solid #999;
  border-radius: 15px;
  & h1 {
    font-size: 26px;font-weight: 700;color: #1A4D2E;
    text-align: center;margin-bottom: 30px;
  }
`
export const BtnBox = styled.div`
  display: flex;gap:16px; justify-content: flex-end;
`
const StyleButton = styled.button`
  padding: 8px 16px; font-size: 18px;font-weight:600;border-radius: 5px;
  background: #78A083;border: none;
  color: #FFF; cursor: pointer;
  background: ${props => props.color};
`
export const Button = props => {
  const {label, onClick, color} = props;
  return (
    <StyleButton color={color} onClick={onClick}> {label} </StyleButton>
  )
}
const StyleTextInput = styled.textarea`
  padding: 16px;width : 100%;resize:none;
  height: ${(props) => props.height}px;
  border: 1px solid #CCC;border-radius:5px;
  box-sizing: border-box;font-size: 18px;
`
export const PostInput = (props) => {
  const {height, onChange, placeholder} = props;
  return  <StyleTextInput height={height} onChange={onChange}  placeholder={placeholder} />
}

export const ItemStyle = styled.li`
  padding: 6px 0; font-size: 18px; cursor: pointer;
  display: flex;align-items: center;

  &:hover {
    text-decoration: underline;color: #777;
  }
  & span {
    color: red; font-weight: bold; margin-left: 10px;
  }
  &::before {
    content:''; display: block; width: 4px;height: 4px;
    background-color: #294B29;margin-right: 12px;
    transform: rotate(45deg);
  }
`
export const PostStyle = styled.div`
  padding: 20px 0;
  & h3 {
    margin: 16px 0;
    font-size: 28px; font-weight: 700;
  }
  & p {
    line-height: 1.5em; font-size: 20px;
  }
`
export const CommentStyle = styled.div`
  margin-top: 30px;line-height: 1.3em;
  & h4 {
    margin-bottom: 20px;
    font-size: 22px;font-weight:600;
  }
  & li {
    padding: 20px 15px;margin: 10px 0;
    background: #fcfcfc;
    border: 1px solid #CCC; border-radius: 10px;
  }
  & .comment_write {
    position: relative;
  }
  & .comment_submit {
    position: absolute;right: 24px;bottom: 20px;
    border: none;background: none;
    font-weight: 700;
  }
`
