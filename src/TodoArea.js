function TodoArea({ conveyToApp, setConveyToApp, setConveyToDetail }) {
  return (
    <div className="todolist-area">
      <ul>
        {conveyToApp.map((element, index) => (
          <li
            className={`todolist-area__li ${
              element.color == "yellow"
                ? "bg-yellow"
                : element.color == "blue"
                ? "bg-blue"
                : element.color == "puple"
                ? "bg-puple"
                : "bg-red"
            }`}
            data-index={index}
            key={index}
          >
            <p
              className="todolist-area__li__title"
              onClick={(event) => {
                const liIndex = event.target.parentElement.dataset.index;

                setConveyToDetail(conveyToApp[liIndex]);
                const todoDetail = document.getElementById("todo-detail");
                console.log(todoDetail);
                todoDetail.classList.remove("toggle-translate");
              }}
            >
              {element.title}
            </p>
            <div className="li__btn-box">
              <button
                className="button1"
                onClick={(event) => {
                  console.log("버튼 클릭");
                  const p =
                    event.target.parentElement.parentElement.parentElement.querySelector(
                      "p"
                    );
                  if (!p) {
                    console.log("오류: 요소 찾지 못함");
                    return;
                  }
                  p.classList.toggle("todo-complete");
                }}
              >
                <i className="fa-solid fa-check icon1"></i>
              </button>
              <button
                className="button1"
                onClick={(event) => {
                  const index =
                    event.target.parentElement.parentElement.parentElement
                      .dataset.index;
                  if (!index) {
                    console.log("오류: 요소 찾지 못함");
                    return;
                  }
                  setConveyToApp((current) =>
                    current.filter(
                      (element, filterIndex) => filterIndex != index
                    )
                  );
                }}
              >
                <i className="fa-solid fa-xmark icon1"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoArea;
