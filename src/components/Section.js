import React from "react";

export default function Section(props) {
  console.log(props);
  let bgStyle = {
    // 꼭 필요한 css만 여기서 적도 나머지는 그냥 App.css에서 편하게 소스를 만드는 것이 효율적이다.
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/${props.bg})`,
  };
  return (
    <section style={bgStyle} id={props.id}>
      <div className="title-group">
        <h1>{props.title}</h1>
        <img
          src={`${process.env.PUBLIC_URL}/images/${props.logo}`}
          alt="타이틀이미지"
        />
      </div>
    </section>
  );
}
