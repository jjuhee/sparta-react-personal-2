import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;
const StArticle = styled.article`
  display: flex;
  width: 500px;
  height: 150px;
  border: 2px solid black;
  border-radius: 10px;
  margin: 0 0 10px 0;
  padding: 10px;
`;
const StDiv = styled.div`
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
  height: fit-content;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: auto 0 auto 0;
  background-color: lightgray;
  border-radius: 10px;
`;

const StDatep = styled.p`
  margin-left: auto;
`;

function Detail() {
    const param = useParams();
    console.log("param:", param);
    return (
        <div>
            <StSection>
                details
                {/* {props.letters.filter((item) => {
                    console.log("writedTo:", item.writedTo, "mem:", props.memberSelect)
                    return (item.writedTo === props.memberSelect)
                })
                    .map((item) => {
                        return (
                            <StArticle key={item.id}>
                                <StDiv>
                                    <StFigure>
                                        <StImg
                                            src={item.avatar} alt="profile" />
                                    </StFigure>
                                    <StNameP>{item.nickname}</StNameP>
                                </StDiv>
                                <StContentBoxDiv>
                                    <StContentDiv>{item.content}</StContentDiv>
                                    <StDatep>{item.createdAt}</StDatep>
                                </StContentBoxDiv>
                            </StArticle >
                        );
                    })} */}
            </StSection >
        </div>
    )
}

export default Detail;