import React, { useState } from "react";
import uuid from "react-uuid";
import styled from "styled-components";

//TODO : 글로벌 스타일 , 글씨체,크기 
const StForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  width: 500px;
  height: fit-content;
  gap: 5px;
  background-color: lightcoral;
  margin: 20px auto;
  border: 1px solid black;
  box-sizing: border-box;
`;

const STSection = styled.section`
  display: flex;
`;

const StLabel = styled.label`
  width: 80px;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  font-weight: 600;
  /* margin-right: auto; */
`;

const StInput = styled.input`
  width: 400px;
  border: 1px solid black;
  height: ${(props) => props.height};
  border-radius: 10px;
/* TODO : text 줄바꿈
  display: inline-block;
  white-space: wrap;
  overflow: scroll; */
`;
const StTextarea = styled.textarea`
  width: 400px;
  border: 1px solid black;
  height: ${(props) => props.height};
  border-radius: 10px;
  margin-left: auto;
`;

const StButton = styled.button`
  width: 200px;
  height: 40px;
  border: 1px solid black;
  background-color: white;
  border-radius: 20px;
  margin-left: auto;
`;

function LetterForm(props) {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [writedTo, setWritedTo] = useState("Heejun");

  const addLetterHandler = (e) => {
    e.preventDefault();
    if (nickname === "" || content === "") {
      alert("닉네임과 컨텐츠를 모두 입력하세요!");
      return;
    }

    const newLetter = {
      id: uuid(),
      content: content,
      nickname: nickname,
      writedTo: writedTo,
      createdAt: Date(),
      avatar: "https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-default-avatar-image_2238788.jpg",
    };

    props.setLetters([...props.letters, newLetter]);
    setNickname("");
    setContent("");
  };

  return (
    <StForm>
      <STSection>
        <StLabel>닉네임 : </StLabel>
        <StInput
          value={nickname}
          onChange={(e) => {
            if (e.target.value.length <= 10)
              setNickname(e.target.value)
          }}
          height="40px"
          placeholder="10자 이내로 작성해주세요"
        />
      </STSection>
      <STSection>
        <StLabel>내용 : </StLabel>
        <StTextarea
          value={content}
          onChange={(e) => {
            if (e.target.value.length <= 100)
              setContent(e.target.value)
          }}
          height="200px"
          placeholder="100자 이내로 작성해주세요"
        />
      </STSection>
      <STSection>
        <StLabel>To.</StLabel>
        <select onChange={(e) => { setWritedTo(e.target.value) }}>
          <option value="Heejun">Heejun</option>
          <option value="Woohyuck">Woohyuck</option>
          <option value="Tony">Tony</option>
          <option value="Kangta">Kangta</option>
          <option value="Jaewon">Jaewon</option>
        </select>
        <StButton onClick={addLetterHandler}>팬레터 등록</StButton>
      </STSection>

    </StForm>
  );
}

export default LetterForm;