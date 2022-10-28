import styled from "styled-components";
import LOGO from "../components/mangoplate-gray-logo.svg"

const Footer = styled.div`
  position: relative;
  background-color: #3e3e3e;
  text-align: left;
  color: #7d7d7d;
  display: block;

  .logo img {
    width: 100%;
  }

  .inner {
    margin: 0 auto;
    padding-top: 65px;
    min-height: 430px;
    max-width: 1200px;
  }

  a {
    color: #7d7d7d;
    text-decoration: none;
  }


  .logo {
    display: inline-block;
    margin-right: 168px;
    vertical-align: top;
  }

  nav {
    display: inline-block;
    width: 614px;
    margin-bottom: 10px;
    overflow: hidden;
  }

  ul {
    margin: 0;
    padding: 0;
    float: left;
  }

  li {
    display: block;
    width: 307px;
    height: 35px;
    list-style: none;
    font-style: normal;
  }

  .snsShortCut {
    position: absolute;
    top: 62px;
    right: 0;
  }

  .desc {
    display: block;
    position: relative;
    margin-top: 28px;
    padding-top: 15px;
    font-size: 0.875rem;
    color: #6a6a6a;
  }

  .locationKeyword {
    font-size: 15px;
    line-height: 23px;
    border-top: 1px solid #282c34;
    margin-bottom: 30px;
    padding-top: 15px;
  }

  .lang-copyright {
    font-size: 0.875rem;
    line-height: 22px;
    padding: 36px 0 42px;
    border-top: 1px solid #282c34;
  }
`;

function FooterContainer() {
    return (
        <Footer>
            <div className={"inner"}>
                <div className={"logo"}>
                    <a> <img src={LOGO}/></a>
                    <p className={"desc"}>Eat, Share, Be Happy. </p>
                </div>
                <nav>
                    <ul className="list-links">
                        <li>
                            <a href="/company">
                                회사소개
                            </a>
                        </li>

                        <li>
                            <a href="/careers">
                                망고플레이트 채용
                            </a>
                        </li>

                        <li>
                            <a href="/investment">
                                투자 정보
                            </a>
                        </li>

                        <li className="only-desktop">
                            <a href="/etc/download_company_ci" target="_blank">
                                브랜드 가이드라인
                            </a>
                        </li>

                        <li>
                            <a href="https://www.mangoforbiz.com/?utm_campaign=main_bottom_business&amp;utm_medium=bizhome&amp;utm_source=web"
                               target="_blank">
                                망고플레이트 비즈니스
                            </a>
                        </li>

                        <li>
                            <a href="https://www.mangoforbiz.com/?utm_campaign=20180116v1&amp;utm_medium=main_bottom_adinquiry&amp;utm_source=mp_web"
                               target="_blank">
                                광고 문의
                            </a>
                        </li>

                    </ul>
                    <ul className="list-links">
                        <li>
                            <a href="/notice" target="_blank">
                                공지사항
                            </a>
                        </li>

                        <li>
                            <a className="" href="/terms/contract" onClick="trackEvent('CLICK_TERMS', 'contract')"
                               target="_blank">
                                이용약관
                            </a>
                        </li>
                        <li>
                            <a className="" href="/terms/contract_non_signup"
                               onClick="trackEvent('CLICK_TERMS', 'contract_non_signup')" target="_blank">
                                비회원 이용자 이용정책
                            </a>
                        </li>
                        <li>
                            <a className="bold" href="/terms/privacy" onClick="trackEvent('CLICK_TERMS', 'privacy')"
                               target="_blank">
                                개인정보처리방침
                            </a>
                        </li>
                        <li>
                            <a className="" href="/terms/location" onClick="trackEvent('CLICK_TERMS', 'location')"
                               target="_blank">
                                위치기반서비스 이용약관
                            </a>
                        </li>
                        <li>
                            <a className="" href="/terms/community_guidelines"
                               onClick="trackEvent('CLICK_TERMS', 'community_guidelines')" target="_blank">
                                커뮤니티 가이드라인
                            </a>
                        </li>
                        <li>
                            <a className="" href="/terms/youth_protection"
                               onClick="trackEvent('CLICK_TERMS', 'youth_protection')" target="_blank">
                                청소년보호정책
                            </a>
                        </li>

                        <li>
                            <a href="https://brunch.co.kr/@mangoplate/14" target="_blank">
                                홀릭 소개
                            </a>
                        </li>

                        <li>
                            <a href="/company#contact">
                                문의하기
                            </a>
                        </li>
                    </ul>
                </nav>
                <p className={"snsShortCut"}> sns shortcut</p>
                <div className={"locationKeyword"}>
                    인기지역 : 이태원 | 홍대 | 강남역 | 가로수길 | 신촌 | 명동 | 대학로 | 연남동 | 부산 | 합정 | 대구 | 여의도 | 건대 | 광화문 | 일산 | 제주 | 경리단길
                    |
                    한남동 | 삼청동 | 대전 | 종로 | 서촌 | 잠실 | 사당역 | 인천 | 코엑스 | 상수 | 서래마을 | 송도 | 왕십리 | 분당 | 혜화 | 고속터미널
                </div>
                <div className={"lang-copyright"}>
                    <p>
                        ㈜ 여기어때컴퍼니<br/>서울특별시 강남구 봉은사로 479, 479타워 11층<br/>대표이사: 정명훈<br/>사업자 등록번호: 742-86-00224 <a
                        href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=7428600224" target="_blank">[사업자정보확인]</a><br/>통신판매업
                        신고번호: 2017-서울강남-01779<br/>고객센터: 02-565-5988<br/><br/>
                        <span className="copyrights">© 2022 MangoPlate Co., Ltd. All rights reserved.</span>
                    </p>
                </div>
            </div>
        </Footer>
    );
}

export default FooterContainer;