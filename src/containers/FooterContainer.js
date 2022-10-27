import styled from "styled-components";

const Footer = styled.div

function FooterContainer() {
    return (
        <Footer>
            <div>
                logo
                subtitle
            </div>
            <p> sns shortcut</p>
            <nav>
                <ul></ul>
                <ul></ul>
            </nav>
            <div>
                인기지역 : 이태원 | 홍대 | 강남역 | 가로수길 | 신촌 | 명동 | 대학로 | 연남동 | 부산 | 합정 | 대구 | 여의도 | 건대 | 광화문 | 일산 | 제주 | 경리단길 |
                한남동 | 삼청동 | 대전 | 종로 | 서촌 | 잠실 | 사당역 | 인천 | 코엑스 | 상수 | 서래마을 | 송도 | 왕십리 | 분당 | 혜화 | 고속터미널
            </div>
            <div>
                <p>
                    ㈜ 여기어때컴퍼니<br/>서울특별시 강남구 봉은사로 479, 479타워 11층<br/>대표이사: 정명훈<br/>사업자 등록번호: 742-86-00224 <a
                    href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=7428600224" target="_blank">[사업자정보확인]</a><br/>통신판매업
                    신고번호: 2017-서울강남-01779<br/>고객센터: 02-565-5988<br/><br/>
                        <span className="copyrights">© 2022 MangoPlate Co., Ltd. All rights reserved.</span>
                </p>
            </div>
        </Footer>
    );
}

export default FooterContainer;