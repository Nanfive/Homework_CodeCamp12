// CSS :
// inline Style
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

// กำหนดตัวแปร
// function App() {
//   const style = {
//     color: "white",
//     backgroundColor: "Yellow",
//   };
//   return <div style={style}>Hello World!</div>;
// }

// Event

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

// Event Object
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

// เรียกใช้ Parameter
// function App() {
//   const ano = (a, b) => {
//     console.log(a + b);
//   };
//   return <button onClick={() => ano(2, 8)}> click</button>;
// }

// preventDefault() ไม่ให้ทำงาน
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

// function App() {
//   return
// }

// function App() {
//   return
// }
export default App;
