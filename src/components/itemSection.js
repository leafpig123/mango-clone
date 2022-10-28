import Item from "./item"
import styled from "styled-components";

const SectionHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  h2{
    margin-right: auto;
  }
  a{
    margin-left: auto;
  }
`;

const Articles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Section = styled.div`
    width: 85vw;
  margin: auto;
`;

function ItemSection() {
    return (
        <Section>
            <SectionHeader>
                <h2>섹션제목</h2>
                <a>아이템더보기</a>
            </SectionHeader>
            <Articles>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </Articles>
        </Section>
    )
}

export default ItemSection;