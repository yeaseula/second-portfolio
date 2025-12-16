import styled from "styled-components"
import SkillContents from "./skill/SkillContents"
import ActiveOne from "./activeTab/ActiveOne"

const Container = styled.div`
    padding-top: 40px;
    > p {
        font-size: 1.8rem;
    }
`
const SkillCategory = styled.p`
    font-size: 1.9rem;
    font-family: 'Pretendard_SemiBold';
    margin-bottom: 15px;
`
const SkillContentss = styled.p`
    font-size: 1.8rem;
`
const TroubleTitle = styled.p`
    font-family: 'Pretendard_SemiBold';
    margin-bottom: 15px;
`
const TroubleContents = styled.p`
    font-size: 1.8rem;
`
const SkillContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
`
const ImageContainer = styled.div`
    width: 100px;
    height: 80px;
    border-radius: 10px;
    display: flex;
    justify-content:center;
    align-items: center;
`
const TextContainer = styled.div`
    width: calc(100% - 120px);
    font-size: 1.8rem;
`

export default function TabBody({activeTab}:{activeTab:number}) {

    if(activeTab === 1) {
        return (
            <Container>
                <ActiveOne></ActiveOne>
            </Container>
        )
    }
    if(activeTab === 2) {
        return (
            <Container>
                <div style={{ marginBottom: '15px' }}>
                <SkillCategory>개발 환경 (Frontend Framework)</SkillCategory>
                <SkillContainer>
                    <ImageContainer>
                        <figure>
                            <img
                                src="/image/React-logo.svg"
                                srcSet="/image/React-logo.svg"
                                alt="리액트 로고"
                                loading="lazy"
                                width={75}
                                height={75}
                            />
                            <figcaption className="sr-only">
                                리액트 로고
                            </figcaption>
                        </figure>
                    </ImageContainer>
                    <TextContainer>
                        React<br />
                        페이지 단위가 아닌 컴포넌트 단위로 렌더링을 제어할 수 있다는 점이<br />
                        독서 기록처럼 인터랙션이 많은 서비스에 적합하다고 판단했습니다.<br />
                    </TextContainer>
                </SkillContainer>
                <SkillContainer>
                    <ImageContainer>
                        <figure>
                            <img
                                src="/image/Nextjs-logo.svg"
                                srcSet="/image/Nextjs-logo.svg"
                                alt="넥스트제이에스 로고"
                                loading="lazy"
                                width={100}
                                height={80}
                            />
                            <figcaption className="sr-only">
                                넥스트제이에스 로고
                            </figcaption>
                        </figure>
                    </ImageContainer>
                    <TextContainer>
                    · Next.js<br />
                    기존 책담 Season 1에서는
                    초기 데이터 패치 이후에야 화면이 완성되는 구조로 인해
                    첫 진입 시 체감 성능의 한계를 느꼈습니다.<br />
                    Season 2에서는 이 문제를 해결하기 위해
                    서버 사이드 렌더링을 직접 적용해보고,<br />
                    초기 렌더링 경험을 개선하는 것을 목표로 Next.js를 선택했습니다.<br />
                    </TextContainer>
                </SkillContainer>
                <SkillContainer>
                    <ImageContainer>
                        <figure>
                            <img
                                src="/image/Typescript-logo.svg"
                                srcSet="/image/Typescript-logo.svg"
                                alt="타입스크립트 로고"
                                loading="lazy"
                                width={100}
                                height={80}
                            />
                            <figcaption className="sr-only">
                                타입스크립트 로고
                            </figcaption>
                        </figure>
                    </ImageContainer>
                    <TextContainer>
                    · TypeScript<br />
                    데이터의 형태와 상태를 명확히 구분할 수 있어
                    CRUD 기능 구현에서 더욱 안전한 개발을 하기 위해 선택했습니다.
                    </TextContainer>
                </SkillContainer>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <SkillCategory>백엔드</SkillCategory>
                    <SkillContentss>
                        · Supabase<br />
                        Supabase는 회원가입/로그인과 CRUD를 한 번에 해결할 수 있었고,<br />
                        SQL 기반 테이블 구조라 데이터 간 관계를 명확히 설계할 수 있었습니다.
                    </SkillContentss>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <SkillCategory>상태관리</SkillCategory>
                    <SkillContentss>
                        · Zustand<br />
                        Context API는 코드 복잡도가 빠르게 증가할 수 있다고 판단했습니다.<br />
                        Zustand는 비교적 간결한 API로 전역 상태를 관리할 수 있었고,<br />
                        TypeScript 지원과 커뮤니티 자료도 충분해 유지보수 측면에서 적합했습니다.
                    </SkillContentss>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <SkillCategory>선택한 라이브러리</SkillCategory>
                    <SkillContentss>
                        · React Error Boundary<br />
                        현재 책담 프로젝트는 개인화 기능 위주의 비교적 단순한 구조이기 때문에
                        에러처리에 있어 복잡도를 최소화하는 방향을 우선했습니다.<br></br>

                        · Swiper<br />
                        접근성, 커뮤니티, 레퍼런스가 풍부한 검증된 라이브러리를 선택했습니다.<br />
                        단순한 슬라이드 기능만 사용하기에는 상대적으로 무거울 수 있다는 점을 인지하고 있었으나<br></br>
                        직접 접근성을 구현하고 유지보수하는 비용을 고려했을 때 검증된 라이브러리를 사용하는 편이 더 합리적이라고 판단했습니다.
                    </SkillContentss>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <SkillCategory>선택하지 않은 라이브러리</SkillCategory>
                    <SkillContentss>
                        · Lottie<br />
                        네비게이션 영역에서 과도한 리소스라고 판단해 제거했습니다.<br />
                        리액트 환경에서는 CSS 기반 인터랙션으로도
                        충분한 사용자 경험을 제공할 수 있었기 때문에
                    </SkillContentss>
                </div>
            </Container>
        )
    }
    if(activeTab === 3) {
        return (
            <Container>
                <TroubleTitle>Form UX와 성능 최적화의 충돌</TroubleTitle>
                <TroubleContents>
                    (문제)
                    초기 유효성 검사 - onBlur 처리<br />
                    문제점 - UX 저하, 폼 신뢰성 하락<br /><br />

                    (1차 시도 / 실패)<br />
                    onChange 방식으로 전환 - 리렌더 폭증<br /><br />

                    (2차 시도 / 실패)<br />
                    state를 ref로 변경<br />
                    useCallback, memo 적용<br />
                    리렌더는 줄었지만 상태와 유효성 로직의 복잡성 증가로 유지보수의 난이도 상승
<br /><br />
                    (전환점)<br />
                    "리렌더가 항상 나쁜 것은 아니다" 라는 점을 인식.<br />
                    중요한 건<br />
                    "무거운 컴포넌트", "무거운(복잡한)연산의 재실행"<br /><br />

                    (해결)<br />
                    react-hook-form 도입<br />
                    - 필요한 필드만 리렌더<br />
                    - 유효성 검사 로직을 대폭 축소<br />
                    - 타입스크립트 지원으로 안전한 폼 생성 가능한<br /><br />

                    (결과)<br />
                    - UX개선과 코드의 복잡도 감소<br />
                    - input, textarea, select 등 폼에 필요한 필드의 분리로 협업 시에도 안전하고 빠른 개발 가능
                </TroubleContents>

                <TroubleTitle>에러 처리 구조 재설계</TroubleTitle>
                <TroubleContents>
                    - Supabase 데이터 패치 실패와 “유저 데이터 없음” 상태를 구분하지 못하는 구조적 문제 발견
                    - 데이터 타입을 data | error로 분리하여 에러 흐름 명확화
                    - 서버 → 페이지 → 컴포넌트 단위로 에러 바운더리 적용
                </TroubleContents>

                <TroubleTitle>모달 중첩 구조로 인한 접근성 문제</TroubleTitle>
                <TroubleContents>
                    - 중첩 모달 구조에서 React-Focus 접근성 적용 불가 문제 발생
                    - 모든 모달을 분리하고, UI와 데이터 로직을 상위 컴포넌트로 이동
                    - 보드 접근성 개선 + 모달 컴포넌트 재사용 가능
                </TroubleContents>
            </Container>
        )
    }
    return (
        <></>
    )
}