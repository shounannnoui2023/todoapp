//itemコンポーネントをtodoおデータの数だけ繰り返し呼び出す
//todoリスト全体のスタイルを調整する

import React from "react";
import Item from "./Item";
const List = ({ todos, deleteTodo }) => {
  //todo: データの数(todosの個数)の分だけItemコンポーネントを呼び出す
  console.log(todos);
  return (
    <ul>
      {/* <Item content={todos[0].content} />
      <Item content={todos[1].content} />
      <Item content={todos[2].content} /> */}
      {todos.map((todo) => {
        return (
          <Item
            key={todo.id}
            content={todo.content}
            id={todo.id}
            deleteTodo={deleteTodo}
          ></Item>
        );
      })}
    </ul>
  );
};

export default List;
