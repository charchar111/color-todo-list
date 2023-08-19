import TodoList from "./TodoList";
import Header1Memo from "./Header";
import TodoArea from "./TodoArea";

import { useState } from "react";
import TodoDetail from "./TodoDetail";

function App() {
  const [conveyToApp, setConveyToApp] = useState([]);
  const [conveyToDetail, setConveyToDetail] = useState();
  console.log("app");
  console.log(conveyToApp);
  console.log(conveyToDetail);
  return (
    <main className="root__main">
      <Header1Memo />
      <div className="main-content">
        <TodoList conveyToApp={conveyToApp} setConveyToApp={setConveyToApp} />
        <TodoArea
          conveyToApp={conveyToApp}
          setConveyToApp={setConveyToApp}
          setConveyToDetail={setConveyToDetail}
        />
        <TodoDetail
          conveyToDetail={conveyToDetail}
          setConveyToDetail={setConveyToDetail}
        />
      </div>
    </main>
  );
}

export default App;
