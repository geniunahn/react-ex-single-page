import myStyle from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <h1 className={myStyle.textPrimary}>디즈니 홈페이지</h1>
      <nav>
        <a href="#title">타이틀</a>
        <a href="#디즈니">디즈니</a>
        <a href="#마블">마블</a>
        <a href="#스타워즈">스타워즈</a>
        <a href="#NGO">네쇼널지오그래픽</a>
        <a href="#20C">20세기 스튜디오</a>
      </nav>
    </header>
  );
}
