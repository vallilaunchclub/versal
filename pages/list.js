import { useState } from "react";

function List({ todo }) {
  const [work, setWork] = useState("");
  console.log(todo);

  const handleChange = (e) => {
    setWork(e.target.value.toLowerCase());
  };

  let dataValue = todo.filter((todos) => {
    if (todo === "") {
      return todos;
    } else {
      return todos.title.toLowerCase().includes(work);
    }
  });

  return (
    <>
      <h1 className="text-3xl font-bold underline">TODO</h1>

      <div class="relative items-center flex">
        <svg
          class="w-6 h-6 absolute left-0"
          fill="gray"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <input
          className="border border-black-700 "
          type="search ml-20"
          name="todo"
          id="todo"
          value={work}
          onChange={handleChange}
          placeholder=" Search ..."
          class="ml-8
          bg-transparent"
        ></input>
      </div>

      { console.log(work) }

      {dataValue.map((item) => (
        <ul class="p-3 divide-x">
          <li class="px-3 py-2 flex items-center" key={item.id}>
            <svg
               class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
            {item.title}
          </li>
        </ul>
      ))}
      {/* 
      {todo.map((to) => {
        return (
          <div key={to.id}>
            <div className={to.column}>{to.title} </div>

            <div className={to.column}>{to.id}</div>
          </div>
        );
      })}  */}
    </>
  );
}

export default List;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return {
    props: {
      todo: data,
    },
  };
}
