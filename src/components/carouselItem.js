import React, {useState} from "react";
import Logo from "../logo.svg"
import styled from "styled-components";

const CarouselItemBlock = styled.div`
  figure {
    width: 25vw;
    height: 20vw;
    margin: 0;
    min-width: 175px;
    z-index: 0;
  }

  .innerWrap {
    text-align: center;
    z-index: 5;
    position: relative;
    top: -13vw;
    left: 0;
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


function CarouselItem() {
    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (<>
        <CarouselItemBlock>
            <figure onClick={showModal}>
                <img src={Logo}/>
                <div className={"innerWrap"}>
                    <h2>베스트 30곳</h2>
                    <p>"이것 저것 요곳 조곳"</p>
                </div>
            </figure>
        </CarouselItemBlock>
        {modalOpen && <Modal className={"container"}>
            <button className={"close"} onClick={closeModal}>
                X
            </button>
            <p>모달창입니다.</p>
        </Modal>}
    </>)
}

export default CarouselItem;