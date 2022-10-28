import Logo from "../logo.svg"
import styled from "styled-components";
import React, {useState} from "react";

const ItemBlock = styled.div`
  figure {
    width: 20vw;
    height: 20vw;
    margin: 0.625vw;
    display: flex;
    flex-wrap: wrap;
    min-width: 175px;
  }

  div {
    text-align: left;
    width: 4.5vw;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 10px;
    max-height: 15px;
  }

  .local-tag {
    width: 20vw;
  }
`;

const Modal = styled.div`
  position: fixed;
  width: 800px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1100;

  background-color: white;
  border: 1px solid #dea826;

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;


function Item() {

    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }


    return (<>
            <ItemBlock>
                <figure onClick={showModal}>
                    <img src={Logo}/>
                    <div className={'title'}>Title</div>
                    <div className={'grade'}>Grade</div>
                    <div className={'local-tag'}>봉산동 - 디저트/베이커리</div>
                </figure>
            </ItemBlock>
            {modalOpen && <Modal className={"container"}>
                <button className={"close"} onClick={closeModal}>
                    X
                </button>
                <p>모달창입니다.</p>
            </Modal>}
        </>
    )
}

export default Item;