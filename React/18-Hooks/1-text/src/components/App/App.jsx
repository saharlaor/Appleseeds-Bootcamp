import React from "react";
import TextContainer from "../TextContainer/TextContainer";
import "./App.css";

const TEXT_EXAMPLE =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate totam nam reprehenderit excepturi soluta expedita iste laboriosam, obcaecati assumenda, at libero facilis consequatur eos nostrum tempora. Ducimus, vitae. Illo sequi optio eius eum possimus at soluta deserunt dolor. Error quo blanditiis recusandae, fugiat ad iusto, laudantium fuga nostrum vero doloribus reprehenderit expedita assumenda tenetur officiis minus omnis dicta modi ullam deleniti nesciunt voluptatibus exercitationem dolores! Eius, in at? Ut, porro nisi illo assumenda laboriosam maiores autem. Blanditiis, vero. Corporis placeat aliquid optio amet vero in atque necessitatibus, ducimus soluta maxime ad tempore magnam quo aperiam doloribus laboriosam sequi quia suscipit nisi. Molestias animi beatae facilis minima officia voluptates minus perferendis praesentium sapiente consequatur quos, aut provident eaque veniam totam cumque distinctio natus eos magni aperiam. Fuga dicta fugit in facilis nulla sunt praesentium recusandae quibusdam molestias deleniti iste, quae incidunt maxime officiis expedita similique est eaque adipisci tempore aliquid! Suscipit, quidem aliquam? Quae corrupti, sunt a provident repellat laborum nam, quas id est reprehenderit laboriosam molestias ipsa ex eaque, veritatis itaque rerum? Facilis autem deleniti sapiente, quo tempora officia officiis modi pariatur tenetur quos perferendis, sint accusamus aut provident ducimus voluptatum vero fugiat atque rem possimus, impedit iure cumque consequatur?";

function App() {
  return (
    <div id="App">
      <TextContainer content={TEXT_EXAMPLE} maxLength={400} />
    </div>
  );
}

export default App;
