export default function SkillsInner() {
  return (
    <section>
      <h3>Frontend</h3>
      <ul>
        <li>
          React / Next.js (App Router)
          <ul>
            <li>
              App Router 기반의 서버/클라이언트 컴포넌트 분리를 통해 초기 로딩
              성능 최적화 경험
            </li>
            <li>
              재사용성과 책임 분리를 고려한 아토믹 디자인 지향 및 Custom Hook을
              통한 비즈니스 로직 캡슐화
            </li>
            <li>memo, useCallback 등 Hook을 활용한 렌더링 최적화 고려</li>
          </ul>
        </li>
        <li>
          Typescript
          <ul>
            <li>데이터 구조를 명확히 정의, 협업 안정성 확보</li>
          </ul>
        </li>
      </ul>

      <h3>State Management</h3>
      <ul>
        <li>
          Zustand
          <ul>
            <li>UI 인터랙션에 따른 상태 변화를 중심으로 전역 상태 관리</li>
          </ul>
        </li>
        <li>
          Context API
          <ul>
            <li>
              props drilling이 과도해지는 구간에서 공통 데이터 전달을 위한
              수단으로 활용
            </li>
          </ul>
        </li>
      </ul>

      <h3>Styling & Graphics</h3>
      <ul>
        <li>
          tailwind CSS
          <ul>
            <li>빠른 UI 구성 및 단순한 레이아웃 구현에 활용</li>
          </ul>
        </li>
        <li>
          styled-components
          <ul>
            <li>컴포넌트 단위 스타일링 캡슐화가 필요한 부분에 활용</li>
            <li>상태에 따른 동적 스타일링 가능</li>
          </ul>
        </li>
        <li>
          Three.js / GSAP
          <ul>
            <li>
              프로젝트에 필요한 범위 내에서 3D 렌더링과 애니메이션 적용 경험
            </li>
            <li>기존 예제 및 문서를 참고해 구조를 이해, 커스터마이징 가능</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
