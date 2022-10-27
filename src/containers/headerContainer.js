import SearchBar from '../components/searchBar';
import React from "react";
import {IoIosAlbums} from "react-icons/io";
import styled from "styled-components";
import MangoGrey from "../components/mangoplate-gray-logo.svg"

const TrueHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  z-index: 10;
  background: white;
  width: 100vw;
  height: 3vw;
  border: 1px solid #282c34;

  img {
    width: 7vw;
    margin: auto;
  }

  .logo {
    border: 1px solid;
    width: 9vw;
  }

  form {
    margin-right: auto;
  }

  .page {
    width: 10vw;
    border: 1px solid;
  }
  
  div{
    width: 4vw;
  }
`;

function Header() {
    return <TrueHeader>
        <a className={'logo'}> <img src={MangoGrey}/> </a>
        <SearchBar/>
        <a className={'page'}> EAT딜 </a>
        <a className={'page'}> 맛집 리스트 </a>
        <a className={'page'}> 망고 스토리 </a>
        <div>
            <IoIosAlbums/>
        </div>
    </TrueHeader>
}

export default Header;