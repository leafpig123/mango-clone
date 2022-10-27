import Item from "./item"
import styled from "styled-components";

const SectionHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Slider = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function ItemSection() {
    return (
        <div>
            <SectionHeader>
                <h2>섹션제목</h2>
                <a>아이템더보기</a>
            </SectionHeader>
            <Slider>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </Slider>
        </div>
    )
}

export default ItemSection;