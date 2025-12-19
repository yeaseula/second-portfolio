import styled from "styled-components"
import { CategoryTitle, ContentsText } from "../style/tabStyle.style"
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm"

const TroubleContents = styled.p`
    font-size: 1.8rem;
`
export default function ActiveThree({tabContent}:{tabContent: string | undefined}) {
    if(tabContent) {
        return (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {tabContent}
            </ReactMarkdown>
        )
    }
    return (
        <p>상세설명이 없습니다.</p>
    )

    // return (
    //     <>
    //     <CategoryTitle>Form UX와 성능 최적화의 충돌</CategoryTitle>
    //     <TroubleContents>
    //         (문제)<br />
    //         초기 유효성 검사 - onBlur 처리<br />
    //         문제점 - UX 저하, 폼 신뢰성 하락<br /><br />

    //         (1차 시도 / 실패)<br />
    //         onChange 방식으로 전환 - 리렌더 폭증<br /><br />

    //         (2차 시도 / 실패)<br />
    //         state를 ref로 변경<br />
    //         useCallback, memo 적용<br />
    //         리렌더는 줄었지만 상태와 유효성 로직의 복잡성 증가로 유지보수의 난이도 상승
    //         <br /><br />
    //         (전환점)<br />
    //         "리렌더가 항상 나쁜 것은 아니다" 라는 점을 인식.<br />
    //         중요한 건<br />
    //         "무거운 컴포넌트", "무거운(복잡한)연산의 재실행"<br /><br />

    //         (해결)<br />
    //         react-hook-form 도입<br />
    //         - 필요한 필드만 리렌더<br />
    //         - 유효성 검사 로직을 대폭 축소<br />
    //         - 타입스크립트 지원으로 안전한 폼 생성 가능한<br /><br />

    //         (결과)<br />
    //         - UX개선과 코드의 복잡도 감소<br />
    //         - input, textarea, select 등 폼에 필요한 필드의 분리로 협업 시에도 안전하고 빠른 개발 가능
    //     </TroubleContents>

    //     <CategoryTitle>에러 처리 구조 재설계</CategoryTitle>
    //     <TroubleContents>
    //         - Supabase 데이터 패치 실패와 “유저 데이터 없음” 상태를 구분하지 못하는 구조적 문제 발견
    //         - 데이터 타입을 data | error로 분리하여 에러 흐름 명확화
    //         - 서버 → 페이지 → 컴포넌트 단위로 에러 바운더리 적용
    //     </TroubleContents>

    //     <CategoryTitle>모달 중첩 구조로 인한 접근성 문제</CategoryTitle>
    //     <TroubleContents>
    //         - 중첩 모달 구조에서 React-Focus 접근성 적용 불가 문제 발생
    //         - 모든 모달을 분리하고, UI와 데이터 로직을 상위 컴포넌트로 이동
    //         - 보드 접근성 개선 + 모달 컴포넌트 재사용 가능
    //     </TroubleContents>

    //     </>
    // )
}