const r=`## description\r
\r
> 프로젝트 소개\r
\r
- 나눔카드를 드러내지 않고도, 아이들이 자연스럽게 동네의 나눔 가게를 이용할 수 있도록 연결하는 서비스\r
\r
> 주요 기능\r
\r
- 아동 / 가게 유형별 회원 시스템 : 사용자 역할에 맞는 회원가입·로그인 제공\r
- 위치 기반 나눔가게 탐색 : 내 주변에서 이용 가능한 나눔 가게를 지도 기반으로 확인\r
- 비노출 예약 시스템 : 나눔카드를 드러내지 않고 일반 예약처럼 서비스 이용\r
- 실시간 채팅 : 예약 전·후 가게와 직접 소통 가능\r
\r
> 기여 내용\r
\r
- 서비스 문제 정의부터 기획·UI/UX 설계 전반 주도\r
- 재사용성을 고려한 공통 컴포넌트 시스템 설계 및 구현\r
  (Button, Modal, Toast, Card, Pagination)\r
- 메인·리스트·상세 페이지 사용자 흐름 기반 구현\r
- 위치 기반 주변 가게 탐색 및 비노출 예약 시스템 구현\r
- 모바일 환경을 고려한 Bottom Sheet 인터랙션 구현\r
\r
## skills\r
\r
> React\r
\r
> React Three Fiber\r
\r
> Tailwind CSS\r
\r
## trouble\r
\r
> URL 기반 단일 상태 관리 훅 도입으로 상태 동기화 문제 해결\r
\r
**문제**\r
\r
- 카테고리, 정렬, 페이지, 위치, 검색 기능이 추가되면서 상태가 state와 URL에 동시 존재\r
- 새로고침 시 필터 상태 초기화\r
- 뒤로가기/URL 공유 불가\r
- 필터 로직이 Nearby 컴포넌트 내부에 흩어져 있어 코드 복잡도 증가\r
\r
**해결**\r
\r
- URL을 단일 상태 소스로 정의, 각 핸들러는 URL의 파라미터를 변경시키고 파라미터가 변경되며 api를 호출하는 단일 로직으로 변경\r
- useStoreFilter 커스텀 훅을 만들어 필터/정렬/검색/위치 로직 캡슐화\r
- TanStack Query와 URL을 연동하여 URL 변경 시 자동 데이터 refetch\r
\r
**결과**\r
\r
- 새로고침/공유/뒤로가기 시 상태 유지 가능\r
- 필터 로직 중복 제거 및 재사용 가능성 상승\r
- 서버 상태(TanStack Query)와 URL 상태의 명확한 역할 분리\r
\r
> 데스크톱/모바일 디자인 분리로 인해 컴포넌트가 무거워짐\r
\r
**문제**\r
\r
- 모바일/데스크톱 대응을 위한 조건부 렌더링과 여러 상태 관리 로직이 한 컴포넌트에 집중되면서\r
  page.tsx가 200줄 이상으로 비대해져 가독성과 유지보수성이 저하됨.\r
\r
**분석**\r
\r
- Import 문이 30줄 이상\r
- 상태 관리 로직(useState, useEffect)과 UI 렌더링이 혼재\r
- 모바일/데스크톱 UI 코드 중복 (StoreCardList 렌더링 로직 2번 반복)\r
- 코드 가독성 저하로 신규 기능 추가 시 어디를 수정해야 할지 파악이 어려움\r
\r
**해결**\r
\r
- Container/Presentational Pattern을 적용하여 로직과 뷰를 분리\r
- Container Component는 상태관리와 데이터 패칭을 담당\r
- Presentational Component는 UI 렌더링과 props 전달만을 담당\r
\r
**결과**\r
\r
- 가독성 향상: 200+줄 → 70+줄 (약 60% 이상 감소)\r
- 유지보수 개선 : 로직 수정 시 page.tsx만, UI 수정 시 View 컴포넌트만 수정\r
- 코드 재사용성 : StoreCardList를 Desktop/Mobile 양쪽에서 재사용\r
\r
## retrospect\r
\r
블라블라..\r
`;export{r as default};
