## description

> 프로젝트 소개

- 나눔카드를 드러내지 않고도, 아이들이 자연스럽게 동네의 나눔 가게를 이용할 수 있도록 연결하는 서비스

> 주요 기능

- 아동 / 가게 유형별 회원 시스템 : 사용자 역할에 맞는 회원가입·로그인 제공
- 위치 기반 나눔가게 탐색 : 내 주변에서 이용 가능한 나눔 가게를 지도 기반으로 확인
- 비노출 예약 시스템 : 나눔카드를 드러내지 않고 일반 예약처럼 서비스 이용
- 실시간 채팅 : 예약 전·후 가게와 직접 소통 가능

> 기여 내용

- 서비스 문제 정의부터 기획·UI/UX 설계 전반 주도
- 재사용성을 고려한 공통 컴포넌트 시스템 설계 및 구현
  (Button, Modal, Toast, Card, Pagination)
- 메인·리스트·상세 페이지 사용자 흐름 기반 구현
- 위치 기반 주변 가게 탐색 및 비노출 예약 시스템 구현
- 모바일 환경을 고려한 Bottom Sheet 인터랙션 구현

## skills

> React

> React Three Fiber

> Tailwind CSS

## trouble

> 위치 기반 매장 탐색 기능 구현 시 데이터 중복 관리 문제

**문제**

- 지도(Map), 검색(keyword), 카테고리(category), 마커/카드 포커싱 상태를 각각 다른 컴포넌트와 커스텀 훅에서 관리하면서 동일한 데이터(stores)가 여러 곳에서 state로 중복 관리되는 구조가 만들어짐.

**분석**

- 카테고리 필터, 내 위치 기반 주변 가게 필터 등 데이터 정렬의 기준이 다수 존재.
- 필터링마다 계산 가능한 값을 state로 저장해 필터링의 기준점이 불분명해지며 복잡한 상태가 발생.
- 단순히 저장해야 될 값과 계산해야 될 값을 구분해야 함을 인지.

**해결**

- 저장값과 계산값을 분리
- 저장(State): 사용자 입력, 외부에서 들어오는 값
- 계산(Derived): 기존 state로부터 만들어지는 값

```
allStores        // 원본 데이터
keyword          // 검색어
category         // 선택된 카테고리
activeId         // 포커싱된 매장

// 계산
const stores = useMemo(() => {
  let result = allStores;

  if (keyword) {
    result = searchStores({ stores: result, keyword });
  }

  if (!keyword && category !== "전체") {
    result = filterByCategory(result, category);
  }

  return result;
}, [allStores, keyword, category]);
```

- stores를 state로 저장하지 않고 계산된 값으로만 유지함으로써
  상태 변경의 책임을 한 곳(page.tsx)에 집중시켰고,
  컴포넌트들은 결과를 소비하는 역할만 갖도록 구조를 단순화

> 데스크톱/모바일 디자인 분리로 인해 컴포넌트가 무거워짐

**문제**

- 모바일/데스크톱 대응을 위한 조건부 렌더링과 여러 상태 관리 로직이 한 컴포넌트에 집중되면서
  page.tsx가 200줄 이상으로 비대해져 가독성과 유지보수성이 저하됨.

**분석**

- Import 문이 30줄 이상
- 상태 관리 로직(useState, useEffect)과 UI 렌더링이 혼재
- 모바일/데스크톱 UI 코드 중복 (StoreCardList 렌더링 로직 2번 반복)
- 코드 가독성 저하로 신규 기능 추가 시 어디를 수정해야 할지 파악이 어려움

**해결**

- Container/Presentational Pattern을 적용하여 로직과 뷰를 분리
- Container Component는 상태관리와 데이터 패칭을 담당
- Presentational Component는 UI 렌더링과 props 전달만을 담당

**결과**

- 가독성 향상: 200+줄 → 70+줄 (약 60% 이상 감소)
- 유지보수 개선 : 로직 수정 시 page.tsx만, UI 수정 시 View 컴포넌트만 수정
- 코드 재사용성 : StoreCardList를 Desktop/Mobile 양쪽에서 재사용

## retrospect

블라블라..
