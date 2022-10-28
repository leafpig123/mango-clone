import CarouselSection from "../components/carouselSection";
import ItemSection from "../components/itemSection";
import HeaderContainer from "../containers/headerContainer";
import styled from "styled-components";
import backGroundImg from "./mainHeaderBackground.jpg";
import FooterContainer from "../containers/FooterContainer";
import SearchBar from "../components/searchBar";
import CarouselItem from "../components/carouselItem"

const Header = styled.header`
  height: 349px;
  background-image: url(${backGroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bolder;
  color: white;
  padding-top: 150px;
  text-align: center;
  
  fieldset{
    font-family: "SpoqaHanSans", "Noto Sans SC", "APPLE SD Gothic NEO", "sans-serif";
    word-wrap: break-word;
    line-height: 100%;
    -webkit-text-size-adjust: 100%;
    word-break: keep-all;
    font-size: 100%;
    text-align: center;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    appearance: none;
    position: relative;
    background-color: #ffffff;
    margin: 45px auto 0 auto;
    height: 50px;
    width: 738px;
    border: 2px solid #ff7100;
    border-radius: 80px;
    overflow: hidden;
  }

  .title {
    font-size: 2.2rem;
    margin: 0;
  }

  .btn-search {
    word-wrap: break-word;
    -webkit-text-size-adjust: 100%;
    word-break: keep-all;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    vertical-align: top;
    font-family: "SpoqaHanSans", "Noto Sans SC", "APPLE SD Gothic NEO", "sans-serif";
    cursor: pointer;
    border: 0px;
    display: block;
    position: absolute;
    top: 0;
    right: -1px;
    color: #ffffff;
    background-color: #ff7100;
    height: 100%;
    -webkit-appearance: none;
    width: 180px;
    font-size: 1.313rem;
    line-height: 52px;
    border-radius: 80px;
  }
`;


function MainPage() {
    return (
        <div>
            <HeaderContainer/>
            <Header>
                <p className={"title"}>솔직한 리뷰, 믿을 수 있는 평점!</p>
                <h1 className={"title"}>망고플레이트</h1>
                <fieldset>
                    <SearchBar/>
                    <input
                        className="btn-search" type="submit" value="검색"
                        onClick="trackEvent('CLICK_KEYWORD_SEARCH');"/>
                </fieldset>
            </Header>
            <CarouselSection/>
            <ItemSection/>
            <FooterContainer/>
        </div>
    );
}

export default MainPage;