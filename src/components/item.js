import Logo from "../logo.svg"
import styled from "styled-components";

const ItemBlock = styled.div`
  figure{
    width: 20vw;
    height: 25vw;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
  div {
    text-align: left;
    width: 10vw;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 20px;
  }
  .local-tag{
    width: 20vw;
  }
`;


function Item() {
    return (<ItemBlock>
        <figure>
            <img src={Logo}/>
            <div className={'title'}>Title</div>
            <div className={'grade'}>Grade</div>
            <div className={'local-tag'}>봉산동 - 디저트/베이커리</div>
        </figure>
    </ItemBlock>)
}

export default Item;