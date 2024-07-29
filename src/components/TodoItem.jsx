export const TodoItem = ({ nmbr, display, text, setTodos }) => {
  const Delete = (number) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.nmr !== number);
    setTodos(data);
  };

  const toggle = (number) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].nmr === number) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  };

  return (
    <div className="flex justify-between items-center py-4 px-0">
      <div className="flex  items-center ">
        <div className={` `} onClick={() => toggle(nmbr)}>
          {display === "" ? (
            <svg
              className="font-bold text-xl"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14zM17 8.4L13.4 12l3.6 3.6l-1.4 1.4l-3.6-3.6L8.4 17L7 15.6l3.6-3.6L7 8.4L8.4 7l3.6 3.6L15.6 7z"
              ></path>
            </svg>
          ) : (
            <svg
              className="font-bold text-xl "
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5zm-9 12l-4-4l1.41-1.42L10 14.17l6.59-6.59L18 9"
              ></path>
            </svg>
          )}
        </div>

        <div className={`pl-4 text-gray-700 text-[22px] ${display}`}>
          {text}
        </div>
      </div>

      <div className=" pr-[25px] cursor-pointer ">
        <svg
          onClick={() => Delete(nmbr)}
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-3.4 14L12 13.4L8.4 17L7 15.6l3.6-3.6L7 8.4L8.4 7l3.6 3.6L15.6 7L17 8.4L13.4 12l3.6 3.6z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
