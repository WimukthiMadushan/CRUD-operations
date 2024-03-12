import { useState } from "react";
import Student from "./Components/Student";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Student />
    </div>
  );
}

export default App;
