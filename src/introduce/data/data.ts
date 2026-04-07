import {
  RiGithubFill,
  RiBloggerFill,
  RiMailAiFill,
  RiHome2Fill,
} from "@remixicon/react";

export const Introduce = {
  title: "저는 이런 개발을 지향합니다.",
  contents: [
    {
      id: "line1",
      cont: "기술적 제약을 사전에 조율하고, 코드 리뷰와 기술 공유를 통해 팀과 함께 성장합니다.",
    },
    {
      id: "line2",
      cont: "디자인 의도를 이해하며 1px의 오차 없는 정교한 UI를 구현합니다.",
    },
    {
      id: "line3",
      cont: "확장성을 고려한 아토믹한 단위 설계로, 팀의 생산성을 높이는 공통 컴포넌트 시스템을 구축합니다.",
    },
  ],
};

export const IntroduceContact = {
  title: "김예슬 · Frontend Developer",
  contents: [
    {
      id: "line1",
      icon: RiGithubFill,
      link: "https://github.com/yeaseula",
      cont: "깃허브 바로가기",
    },
    {
      id: "line2",
      icon: RiBloggerFill,
      link: "https://velog.io/@somv/posts",
      cont: "블로그 바로가기",
    },
    {
      id: "line3",
      icon: RiMailAiFill,
      link: "mailto:somv12@naver.com",
      cont: "somv12@naver.com",
    },
    {
      id: "line4",
      icon: RiHome2Fill,
      cont: "경기도 수원시",
    },
  ],
};
