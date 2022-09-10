import { useState } from "react";
// useState(initial) return arry [count,setCount] => count = ค่า state   , setCount = function ที่ใช้ update state
// ** อะไรที่ต้องการให้เปลี่ยนแปลงได้ คือ state
// initial value => เป็น string / number / array / object อะไรก็ได้ ซึ่ง

function Counter() {
  // const countState = useState(0); // [0 , updateStateFunction]
  // destructuring => [count , setCount] ** state = action , function = set+action
  const [count, setCount] = useState(0);

  // 1 component มีได้หลาย state
  const [user, setUser] = useState("");
  const [cart, setCart] = useState([]);

  // ยุบ state
  const [state, setState] = useState({
    count: 0,
    user: "",
    cart: [],
  });

  const handleIncrease = () => {
    // setCount(count + 1); // วิธีที่ 1 : setCount(nexStageValue)
    setCount((curr) => curr + 1);
    // วิธีที่ 2 : callBackFunction  => setCount(function (currentStateValue) {return nextStateValue}); *ใช้วิธีที่ 2 ในกรณีต้องการอ้างอิงจากค่าปัจจุบัน
  };
  const handleDecrease = () => {
    setCount((curr) => {
      if (curr > 0) {
        return curr - 1;
      }
      return 0;
    });
  };
  return (
    <div style={{ marginLeft: "5rem" }}>
      <button style={{ marginRight: "2rem" }} onClick={handleIncrease}>
        +
      </button>
      {/* <button
        style={{ marginRight: "2rem" }}
        onClick={() => setCount(count + 1)}
      >
        +
      </button> */}

      <span>{count}</span>
      <button style={{ marginLeft: "2rem" }} onClick={handleDecrease}>
        -
      </button>
    </div>
  );
}

export default Counter;
