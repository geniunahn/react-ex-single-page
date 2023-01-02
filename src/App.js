import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <>
      {/* header + nav */}
      <Header />

      {/* 디즈니 대표 섹션. 이미지 경로의 경우 최대한 여기서 짧게만 쓸 수 있도록 하는 게 좋으므로 Section 문서에서 긴 경로를 최대한 적어주도록 한다.  */}
      <Section
        title="디즈니 플러스"
        logo="logo-dp.png"
        bg="bg-dp.jpg"
        id="title"
      />

      {/* 디즈니 */}
      <Section title="디즈니" logo="logo-dp.png" bg="bg-d.jpg" id="디즈니" />

      {/* 마블 */}
      <Section title="디즈니" logo="logo-dp.png" bg="bg-m.jpg" id="마블" />

      {/* 스타워즈 */}
      <Section title="디즈니" logo="logo-dp.png" bg="bg-s.jpg" id="스타워즈" />

      {/* 네셔널지오그래피 */}
      <Section title="디즈니" logo="logo-dp.png" bg="bg-ng.jpg" id="NGO" />

      {/* 20세기 스튜디오 */}
      <Section title="디즈니" logo="logo-dp.png" bg="bg-20.jpg" id="20C" />
    </>
  );
}

export default App;
