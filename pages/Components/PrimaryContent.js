import styled from "styled-components";

export const ButtontextContent = (props) => {
  return (
    <CommonContent
      label="Button content"
      sourcename="button_content"
      {...props}
    />
  );
};

export const ButtonMessContent = (props) => {
  return (
    <CommonContent label="Aler messages" sourcename="button_mess" {...props} />
  );
};

export const ParagraphContent = (props) => {
  return (
    <CommonContent
      label="Paragraph content"
      sourcename="paraghrah_content"
      {...props}
    />
  );
};

const CommonContent = (props) => {
  return (
    <Container>
      <label htmlFor={props.sourcename}>{props.label}: </label>
      <input value={props.value} onChange={props.onChange} />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 20px 20px 0;
  label {
    display: block;
    font-weight: 600;
    margin-bottom: 10px;
    color: #575962;
    font-size: 14px;
  }
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    font-size: 14px;
    color: #575962;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus {
      border-color: #4b7cf3;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
`;
