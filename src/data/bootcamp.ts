import { bootcampInforType } from "../types/bootcamp";

export const bootCamp:bootcampInforType[] = [
    {
        layoutId: 'frontend-basic',
        title: '프론트엔드 기초 역량',
        subtitle : 'HTML/CSS 시멘틱 마크업과 접근성을 고려한 코드 작성'
    },
    {
        layoutId: 'frontend-deepening',
        title: '자바스크립트 · 인터랙션 구현',
        subtitle : 'JavaScript 클래스 기반 로직 설계와 Three.js를 활용한 기본적인 3D 인터랙션 구현'
    },
    {
        layoutId: 'frontend-react',
        title: 'React · Typescript',
        subtitle : '상태 복잡도에 따라 컴포넌트를 분리, 타입 정의를 통해 유지보수 가능한 로직 구현'
    },
]