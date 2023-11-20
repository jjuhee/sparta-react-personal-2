import styled from "styled-components";

function Header({ memberSelect, setMemberSelect, memberData }) {

  return (
    <StHeader>
      <h1>H.O.T 팬레터 페이지</h1>

      <StUl>
        {
          memberData.map((item) => {
            return (
              <StBtn
                key={item.name}
                color={(memberSelect === item.name) ? item.color : "white"}
                onClick={() => setMemberSelect(item.name)}>
                {item.name}
              </StBtn>
            )

          })
        }
      </StUl>
    </StHeader>
  );
}

export default Header;

const StHeader = styled.header`
  display: flex;
  text-align: center;
  flex-direction: column;
  height: 200px;
  color: black;
  background-color: white;
  background-image: url(https://cdnimg.melon.co.kr/resource/image/cds/musicstory/imgUrl20190702041608627.jpg);
  background-position: top;
  //background-size: cover;
  background-repeat: no-repeat;
`;

const StUl = styled.ul`
  display: flex;
  margin-top: auto;
`;
const StBtn = styled.button`
  width: 90px;
  height: 30px;
  line-height: 30px;
  border: 1px solid black;
  border-radius: 10px 10px 0 0;
  background-color: ${(props) => props.color};
`;