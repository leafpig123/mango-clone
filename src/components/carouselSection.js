import {useState, useRef, useEffect} from "react";
import CarouselItem from "./carouselItem"
import styled from "styled-components";

const SectionHeader = styled.div`
  display: flex;
  justify-content: center;
  align-Items: center;

  h2 {
    margin-right: auto;
  }

  a {
    margin-left: auto;
  }
`;

const Articles = styled.div`
  display: flex;

  .vertical {
    height: 45vw;
    margin: 0 1.5vw;
  }
`;

const Section = styled.div`
  width: 84vw;
  margin: auto;
  overflow: hidden;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-Items: center;
  margin-top: 5px;

  button{
    width: 20px;
    height: 20px;
    margin: 0 20px;
    border-radius: 10px;
  }
`;

function CarouselSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

const SetSlide = Num => {
    setCurrentSlide(Num);
}

    useEffect(() => {
            slideRef.current.style.transition = '0.5s ease-in-out';
            slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
        }
        ,
        [currentSlide]
    )
    ;

    return (
        <Section>
            <SectionHeader>
                <h2>카로셀섹션제목</h2>
                <a>스토리더보기</a>
            </SectionHeader>
            <Articles ref={slideRef}>
                <div className={"vertical"}>
                    <CarouselItem/>
                    <CarouselItem/>
                </div>
                <div className={"vertical"}>
                    <CarouselItem/>
                    <CarouselItem/>
                </div>
                <div className={"vertical"}>
                    <CarouselItem/>
                    <CarouselItem/>
                </div>
                <div className={"vertical"}>
                    <CarouselItem/>
                    <CarouselItem/>
                </div>
                <div className={"vertical"}>
                    <CarouselItem/>
                    <CarouselItem/>
                </div>
                <div className={"vertical"}>
                    <CarouselItem/>
                    <CarouselItem/>
                </div>
                <div className={"vertical"}>
                    <CarouselItem/>
                    <CarouselItem/>
                </div>
                <div className={"vertical"}>
                    <CarouselItem/>
                    <CarouselItem/>
                </div>
                <div className={"vertical"}>
                    <CarouselItem/>
                    <CarouselItem/>
                </div>
            </Articles>
            <Buttons>
                <button onClick={()=>SetSlide(0)}/>
                <button onClick={()=>SetSlide(1)}/>
                <button onClick={()=>SetSlide(2)}/>
            </Buttons>
        </Section>
    );
}

export default CarouselSection;