import { projectInforType } from "../types/type";
export const Projects: projectInforType[] = [
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
