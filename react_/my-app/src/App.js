// --------------------------------------------CSS : ------------------------------------------
// 1. inline Style
// function App() {
//   return (
//     <div style={{ backgroundColor: "pink" }}>
//       <p>
//         This is
//         <span style={{ fontSize: 50, color: "green" }}>Codecamp</span>
//       </p>
//     </div>
//   );
// }
// 2. กำหนดตัวแปร
// function App() {
//   const style = {
//     color: "white",
//     backgroundColor: "Yellow",
//   };
//   return <div style={style}>Hello World!</div>;
// }

// ------------------------------------------ Event ------------------------------------------

// # การแทรก Event
// แบบ 1
// function App() {
//   return (
//     <button
//       onClick={() => {
//         alert("hi");
//       }}
//     >
//       Click
//     </button>
//   );
// }
// แบบ 2
// function App() {
//   const handle = () => {
//     alert("HI");
//   };
//   return <button onClick={handle}> Click</button>; // ทุกครั้งที่มีการ click brwoser จะสร้าง event แล้ว pass เข้ามาเป็น parameter ของ function
// }

// ## Event Object
// แบบ 1
// function App() {
//   const handle = (event) => {
//     console.log(event.target);
//   };
//   return <button onClick={handle}> Click</button>; // ทุกครั้งที่มีการ click brwoser จะสร้าง event แล้ว pass เข้ามาเป็น parameter ของ function
// }
// แบบ 2
// function App() {
//   return <button onClick={(event) => console.log(event)}> Click</button>;
// }

// example : onChange จะเกิดขึ้นเมื่อมีการเปลี่ยน value ในกล่อง input > function จะทำงาน > browser สร้าง event
// target เป็นตัวบอกว่า element ไหนที่ทำให้ event เกิดขึ้น
// function App() {
//   return (
//     <input
//       name="username"
//       placeholder="username"
//       onChange={(event) => {
//         console.log(event.target.value);
//       }}
//     ></input>
//   );
// }

// # Event เรียกใช้ Parameter
// function App() {
//   const ano = (a, b) => {
//     console.log(a + b);
//
//   return <button onClick={() => ano(2, 8)}> click</button>;
// }

// # Envent preventDefault() ไม่ให้ทำงาน
// function App() {
//   return (
//     <a
//       href="https://google.com"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//     >
//       Click
//     </a>
//   );
// }

// -----------------------------------------Component  example  -----------------------------------------
// function Comp(props) {
//   return (
//     <div>
//       {props.titles} : {props.description}
//     </div>
//   );
// }

// function App() {
//   const titles = ["React", "Angular", "Vue"];
//   return (
//     <div>
//       <Comp titles={titles[0]} description="Frontend Framework" />
//       <Comp titles={titles[1]} />
//       <Comp titles={titles[2]} />
//     </div>
//   );
// }

// ------------------------------------- State : re- render เฉพาะส่วนที่เปลี่ยนแปลง => ex. Counter --------------------------------------
// update state ที่เป็น obj / array  ต้อง clone ก่อนเสมอ
import { useState } from "react";
import Counter from "./Counter";
import Header from "./Header";
function App() {
  const [obj, setObj] = useState({
    name: "John",
    age: 28,
    email: "test@gmail.com",
  });
  const [input, setInput] = useState("");
  return (
    <div>
      <Header />
      Hello React
      <Counter />
      <button
        onClick={() => {
          const clone = { ...obj };
          clone.name = "Jack";
          setInput(clone);
          console.log(clone);
        }}
      >
        Click
      </button>
      <input
        type="text"
        placeholder="Enter"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
