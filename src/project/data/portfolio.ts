import { projectInforType } from "../types/type";
export const Projects: projectInforType[] = [
  {
    src: "/image/poster_bookdam_302.webp",
    srcSet: "/image/poster_bookdam_604.webp",
    alt: "책담 시즌2 포스터",
    srOnly: "책담 서비스 시즌2 공식 포스터 - 아늑한 분위기의 도서관 풍경",
    contentsId: "bookdam2",
    title: "책담2(리팩토링)",
    period: "2025.11 - 2025.12",
    contribution: "개인 프로젝트",
    description: [
      {
        id: "line1",
        des: "사용자의 독서 취향 데이터를 활용해 맞춤형 도서 추천 로직을 구현한 개인화 관리 플랫폼입니다.",
      },
      {
        id: "line2",
        des: "초기 CSR 환경의 성능 한계를 극복하기 위해 라이트하우스 지표를 분석하고, SSR 전환으로 Network 완료 시간을 60% 단축했습니다.",
      },
      {
        id: "line3",
        des: "Figma를 활용해 디자인하고, Supabase를 활용해 백엔드 인프라를 구축했습니다.",
      },
    ],
    skills: [
      "Next.js",
      "Typescript",
      "supabase",
      "zustand",
      "tailwind CSS",
      "styled-components",
    ],
  },
  {
    src: "/image/poster_bbang_302.webp",
    srcSet: "/image/poster_bbang_604.webp",
    alt: "빵그리의 오븐 포스터",
    srOnly: "빵그리의 오븐 공식 포스터 - 따뜻한 오븐",
    contentsId: "bbangri",
    title: "빵그리의 오븐",
    period: "2026.01 - 진행중",
    contribution: "팀 프로젝트",
    description: [
      {
        id: "line1",
        des: "건강 디저트를 한 눈에 볼 수 있는 건강 디저트 판매 플랫폼의 Admin, Seller 개발에 참여중입니다.",
      },
      {
        id: "line2",
        des: "Git Flow 전략과 PR 기반 코드 리뷰, Husky 및 CI를 활용한 빌드 자동화 환경에서 협업 개발을 진행했습니다.",
      },
      {
        id: "line3",
        des: "FSD 아키텍처 기반의 엄격한 폴더 구조 설계를 엄수하고 있으며,",
      },
      {
        id: "line4",
        des: "Monorepo와 Storybook을 활용해 디자인토큰 및 공통 컴포넌트를 관리하며 디자인 일관성 및 개발 효율성을 확보했습니다.",
      },
    ],
    skills: [
      "React",
      "Typescript",
      "TanStack Query",
      "Story book",
      "tailwind CSS",
      "Radix UI",
      "TanStack Table",
    ],
  },
  // {
  //   src: "/image/poster_onharu_302.webp",
  //   srcSet: "/image/poster_onharu_604.webp",
  //   alt: "온하루 포스터",
  //   srOnly: "온하루 공식 포스터 - 해질녘 착한 가게를 찾는 아이",
  //   contentsId: "onharu",
  //   title: "온하루",
  //   period: "2026.01 - 진행중",
  //   contribution: "팀 프로젝트",
  //   description: [
  //     {
  //       id: "line1",
  //       des: "나눔카드를 드러내지 않아도 아이들이 내 주변의 따뜻한 가게를 탐색하고 이용할 수 있는 서비스입니다.",
  //     },
  //     {
  //       id: "line2",
  //       des: "식당을 넘어 의료·생활까지, 나눔을 실천하는 동네 가게를 한곳에 모아",
  //     },
  //     {
  //       id: "line3",
  //       des: "예약만으로 자연스럽게 서비스를 이용해 아이들의 존엄을 지킬 수 있도록 돕습니다.",
  //     },
  //   ],
  //   skills: ["Next.js", "Typescript", "zustand", "tailwind CSS"],
  // },
  {
    src: "/image/poster_maserati_302.webp",
    srcSet: "/image/poster_maserati_604.webp",
    alt: "마세라티 3D 갤러리 포스터",
    srOnly:
      "마세라티 3D 갤러리 공식 포스터 - 고급스러운 분위기의 마세라티 차량",
    contentsId: "maserati",
    title: "마세라티 3D 갤러리",
    period: "2025.09 - 2025.09",
    contribution: "개인 프로젝트",
    description: [
      {
        id: "line1",
        des: "Three.js 학습을 실제 서비스 수준으로 발전시키고자 자기주도적으로 기획했습니다.",
      },
      {
        id: "line2",
        des: "React와 React Three Fiber로 제작한 인터랙티브 자동차 갤러리 입니다.",
      },
      {
        id: "line3",
        des: "glb 모델을 통해 입체감 있고 정교한 자동차 모델을 사용하였으며",
      },
      {
        id: "line4",
        des: "orbitcontrol을 이용해 360도 회전 및 확대 축소가 가능합니다.",
      },
    ],
    skills: ["React", "React Three Fiber", "tailwind CSS"],
  },
  {
    src: "/image/poster_hero_302.webp",
    srcSet: "/image/poster_hero_604.webp",
    alt: "fight hero 포스터",
    srOnly:
      "fight hero 공식 포스터 - 용사와 괴수가 맞서 싸우는 판타지풍 포스터",
    contentsId: "fighthero",
    title: "Fight Hero",
    period: "2025.08 - 2025.09 (2주)",
    contribution: "개인 프로젝트",
    description: [
      {
        id: "line1",
        des: "JavaScript 클래스 기반으로 구현한 판타지 미니 게임입니다.",
      },
      {
        id: "line2",
        des: "생성형 AI를 활용해 대부분의 이미지 에셋을 제작했으며,",
      },
      {
        id: "line3",
        des: "상속 및 확장을 활용해 다양한 캐릭터 특성을 구현했습니다.",
      },
    ],
    skills: ["JavaScript"],
  },
];
