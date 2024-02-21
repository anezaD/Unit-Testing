import { useState } from "react";

const Greeding = () => {
  const [myClick, setmyClick] = useState(false);
  const clickHandler = () => {
    setmyClick(true);
  };

  return (
    <div className="App">
      <div>
        <h2>Hello World </h2>
        {myClick && <p>This is Aneza</p>}
        {!myClick && <p>Not Clicked</p>}
        <button onClick={clickHandler}> Click me! </button>
      </div>
    </div>
  );
};

export default Greeding;
