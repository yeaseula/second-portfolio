import { PortfolioType, projectInforType } from "../types/portfolio";

export const SkillHashColor = {
  // Core Framework
  "Next.js": {
    bg: "#0f766e",
    text: "#ECFEFF",
  },
  React: {
    bg: "#115e59",
    text: "#ECFEFF",
  },
  "React Three Fiber": {
    bg: "#134e4a",
    text: "#ECFEFF",
  },

  // Language
  TypeScript: {
    bg: "#14b8a6",
    text: "#042f2e",
  },
  JavaScript: {
    bg: "#2dd4bf",
    text: "#042f2e",
  },

  // State / Backend
  zustand: {
    bg: "#5eead4",
    text: "#042f2e",
  },
  supabase: {
    bg: "#99f6e4",
    text: "#042f2e",
  },

  // Styling
  "tailwind CSS": {
    bg: "#ccfbf1",
    text: "#042f2e",
  },
  "styled-components": {
    bg: "#e6fffa",
    text: "#042f2e",
  },
};

export const TABCONTENTS = [
  {
    id: 1,
    title: "상세설명",
  },
  {
    id: 2,
    title: "기술 선택 이유",
  },
  {
    id: 3,
    title: "트러블슈팅",
  },
  {
    id: 4,
    title: "회고",
  },
];

export const TABCONTENTS_TYPE2 = [
  {
    id: 1,
    title: "상세설명",
  },
  {
    id: 2,
    title: "기술 활용 포인트",
  },
  {
    id: 4,
    title: "회고",
  },
];

export const yeOriginal: projectInforType[] = [
  {
    src: "/image/poster_onharu_302.webp",
    srcSet: "/image/poster_onharu_604.webp",
    alt: "온하루 포스터",
    srOnly: "온하루 공식 포스터 - 해질녘 착한 가게를 찾는 아이",
    contentsId: "onharu",
    title: "온하루",
    period: "2026.01 - 2026.02",
    contribution: "팀 프로젝트",
    description: [
      {
        id: "line1",
        des: "나눔카드를 드러내지 않아도 아이들이 내 주변의 따뜻한 가게를 탐색하고 이용할 수 있는 서비스입니다.",
      },
      {
        id: "line2",
        des: "식당을 넘어 의료·생활까지, 나눔을 실천하는 동네 가게를 한곳에 모아",
      },
      {
        id: "line3",
        des: "예약만으로 자연스럽게 서비스를 이용해 아이들의 존엄을 지킬 수 있도록 돕습니다.",
      },
    ],
    skills: ["Next.js", "Typescript", "zustand", "tailwind CSS"],
  },
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
        des: "사용자의 리뷰 데이터와 관심분야를 분석해 맞춤형 도서를 추천하고,",
      },
      {
        id: "line2",
        des: "독서 시간 기록 및 습관 형성을 지원하는 개인화 독서 관리 웹/앱 서비스입니다.",
      },
      {
        id: "line3",
        des: "기획,디자인,백엔드/프론트 모두 1인 주도 개발했습니다.",
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
        des: "Three.js와 React로 제작한 인터랙티브 자동차 갤러리 입니다.",
      },
      {
        id: "line2",
        des: "glb 모델을 통해 입체감 있고 정교한 자동차 모델을 사용하였으며",
      },
      {
        id: "line3",
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

export const portfolio: PortfolioType[] = [
  {
    id: "onharu",
    video_url: "",
    title: "온하루",
    period: "2026.01 - 2026.02",
    contribution: "팀 프로젝트",
    description:
      "기록은 쌓이고, 경험은 진화한다. \n 리팩토링으로 더 새로워진 책담 Season 2",
    hashtags: ["#팀 프로젝트", "예약"],
    skills: ["Next.js", "Typescript", "zustand", "tailwind CSS"],
    site_url: "",
    github_url: "",
  },
  {
    id: "bookdam2",
    video_url: "",
    title: "책담2(리팩토링)",
    period: "2025.11 - 2025.12",
    contribution: "개인 프로젝트",
    description:
      "기록은 쌓이고, 경험은 진화한다. \n 리팩토링으로 더 새로워진 책담 Season 2",
    hashtags: ["#1인 프로젝트", "독서리뷰"],
    skills: [
      "Next.js",
      "TypeScript",
      "zustand",
      "supabase",
      "tailwind CSS",
      "styled-components",
    ],
    site_url: "https://bookdam-ver2.vercel.app/",
    github_url: "https://github.com/yeaseula/BookdamVer2",
  },
  {
    id: "maserati",
    video_url: "",
    title: "마세라티 3D 갤러리",
    period: "2025.09 - 2025.09",
    contribution: "개인 프로젝트",
    description: "정교함을 회전시키다. Maserati 3D Experience",
    hashtags: ["#3D 전시장", "#자동차"],
    skills: ["React", "tailwind", "Three.js", "React Fiber"],
    site_url: "https://maserati-3d-gallery.pages.dev",
    github_url: "https://github.com/yeaseula/Maserati-3D-Gallery",
  },
  {
    id: "fighthero",
    video_url: "",
    title: "Fight Hero - 미니게임",
    period: "2025.08.21 - 2025.09.02",
    contribution: "개인 프로젝트",
    description: "JavaScript 클래스 기반으로 구현한 판타지 미니 게임!",
    hashtags: ["#미니게임"],
    skills: ["javascript", "html", "css"],
    site_url: "https://yeaseula.github.io/FightHero/",
    github_url: "https://github.com/yeaseula/FightHero",
  },
];
