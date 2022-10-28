import {useState} from "react";
import SearchBar from '../components/searchBar';
import React from "react";
import {IoIosAlbums} from "react-icons/io";
import styled from "styled-components";
import LOGO from "../components/mangoplate-gray-logo.svg"

const TrueHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  z-index: 10;
  background: white;
  width: 100%;
  height: 62px;
  border: 1px solid #282c34;

  img {
    vertical-align: middle;
    width: 100px;
    height: 33px;
  }
  a{
    text-align: center;
    line-height: 60px;
  }

  .logo {
    position: relative;
    border: 1px solid;
    margin-right: auto;
    width: 150px;
  }

  .page {
    width: 10vw;
    border: 1px solid;
  }

  div {
    width: 60px;
  }
  
  svg{
    display : inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const Modal = styled.div`

  position: fixed;
  top: 72px;
  right: 10px;
  z-index: 1100;
  width: 320px;
  height: 524px;
  border: 1px solid #dea826;
  border-radius: 0 0 3px 3px;
  background-color: #FFFFFF;

  .close {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;


function HeaderContainer() {
    const [headerModal, setHeaderModal] = useState(false);

    const mainpage = false;

    const OpenModal = () => {
        setHeaderModal(true);
    }

    const CloseModal = () => {
        setHeaderModal(false);
    }

    return (
        <>
            <TrueHeader>
                <a className={'logo'}> <img src={LOGO}/> </a>
                {mainpage && <SearchBar/>}
                <a className={'page'}> EAT딜 </a>
                <a className={'page'}> 맛집 리스트 </a>
                <a className={'page'}> 망고 스토리 </a>
                <div onClick={() => OpenModal()}>
                    <IoIosAlbums size={"60"}/>
                </div>
            </TrueHeader>
            {headerModal && <Modal className={"container"}>
                <button className={"close"} onClick={CloseModal}>
                    X
                </button>
                <p>모달창입니다.</p>
            </Modal>}
        </>)

}

export default HeaderContainer;