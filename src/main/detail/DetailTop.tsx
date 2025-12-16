import styled from "styled-components"

const DefaultInfor = styled.ul`
    display: flex;
    gap: 5px;
    font-size: 1.4rem;
`
const MainCopy = styled.p`
    font-size: 1.8rem;
    margin: 10px 0 25px 0;
`
const HashTag = styled.li`
    border-radius: 50px;
    background-color: #fff;
    font-size: 1.4rem;
    color: #000000;
    padding: 1px 10px;
`
const LinkButtonContainer = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 30;
    display: flex;
    gap: 7px;
`

export default function DetailTop() {
    return (
        <>
            <DefaultInfor>
                <li>책담 2 (리팩토링) · </li>
                <li>2025.11 - 2025.12 · </li>
                <li>기여도 100%</li>
            </DefaultInfor>

            <MainCopy>기록은 쌓이고, 경험은 진화한다.<br />
                리팩토링으로 더 새로워진 책담 Season 2
            </MainCopy>

            <DefaultInfor>
                <HashTag># 1인 프로젝트</HashTag>
                <HashTag># 모바일</HashTag>
                <HashTag># 독서리뷰</HashTag>
            </DefaultInfor>

            <div>
                Next.js / typescript / supabase / zustand / tailwind / style-components / vercel
            </div>
            <LinkButtonContainer>
                <a href="">깃헙</a>
                <a href="">페이지보기</a>
            </LinkButtonContainer>
        </>
    )
}