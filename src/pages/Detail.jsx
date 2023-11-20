import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Detail({ letters, setLetters }) {
  const navigate = useNavigate();
  const param = useParams();
  const letter = letters.find((item) => {
    return (item.id === param.id);
  });
  const [isModifying, setIsModifying] = useState(false);
  const [modifyingContent, setModifyingContent] = useState(letter.content);

  const modifyHandler = () => {
    setIsModifying(true);
  };

  const completeHandler = () => {
    const updatedLetters = letters.map((item) => {
      if (item.id === letter.id) {
        return { ...item, content: modifyingContent }
      } else {
        return item;
      }
    })
    setLetters(updatedLetters);
    setIsModifying(false);
  }
  const deleteHandler = () => {
    const deletedList = letters.filter((item) => {
      return (item.id !== param.id)
    });
    setLetters(deletedList);
    navigate(`/`);
  };

  return (
    <>
      <StSection>
        <StArticle key={letter.id}>
          <StfigureDiv>
            <StFigure>
              <StImg
                src={letter.avatar} alt="profile" />
            </StFigure>
            <StNameP>{letter.nickname}</StNameP>
          </StfigureDiv>
          <StContentBoxDiv>
            {isModifying ?
              <StInput value={modifyingContent} onChange={(e) => {
                e.preventDefault();
                setModifyingContent(e.target.value);
              }} />
              : <StContentDiv>{letter.content}</StContentDiv>}
            <StDateP>{letter.createdAt}</StDateP>
          </StContentBoxDiv>
        </StArticle>

        <STbuttonDiv>
          {isModifying ?
            <button onClick={completeHandler} >확인</button> :
            (
              <>
                <button onClick={modifyHandler}>수정</button>
                <button onClick={deleteHandler}>삭제</button>
              </>
            )
          }
        </STbuttonDiv>
      </StSection >
    </>
  )
}

export default Detail;

const StSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StArticle = styled.article`
  display: flex;
  width: 500px;
  height: fit-content;
  border: 2px solid black;
  border-radius: 10px;
  margin: 0 0 10px 0;
  padding: 10px;
`;
const StfigureDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`;
const StFigure = styled.figure`
  width: 100px;
`;
const StImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 0 10px 10px;
`;

const StNameP = styled.p`
  text-align: center;
`;

const StContentBoxDiv = styled.div`
  display:flex;
  flex-direction: column;
  margin-left:10px;
`;

const StContentDiv = styled.div`
  /* display: inline-block; */
  width: 350px;
  min-height: 100px;
  height: fit-content;
  padding: 10px;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  margin: auto 0 auto 0;
  background-color: lightgray;
  border-radius: 10px;
`;

const StInput = styled.textarea`
  width: 350px;
  min-height: 100px;
  height: fit-content;
  padding: 10px;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  margin: auto 0 auto 0;
  background-color: lightgray;
  border-radius: 10px;
`;

const StDateP = styled.p`
  margin-left: auto;
`;

const STbuttonDiv = styled.div`
    
`;