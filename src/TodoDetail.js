function TodoDetail({ conveyToDetail, setConveyToDetail }) {
  return (
    <div id="todo-detail" className="todo-detail toggle-translate">
      <div
        className={`todo-detail__title-box ${
          conveyToDetail?.color == "yellow"
            ? "bg-yellow"
            : conveyToDetail?.color == "blue"
            ? "bg-blue"
            : conveyToDetail?.color == "puple"
            ? "bg-puple"
            : "bg-red"
        }`}
      >
        <h3 className="title">{conveyToDetail?.title}</h3>
        <span
          className="x-mark"
          onClick={(event) => {
            document
              .getElementById("todo-detail")
              .classList.toggle("toggle-translate");
          }}
        >
          <i className="fa-solid fa-xmark icon1"></i>
        </span>
      </div>

      <p className="content">{conveyToDetail?.content}</p>
    </div>
  );
}

export default TodoDetail;
