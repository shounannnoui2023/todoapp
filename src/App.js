//他のコンポーネントをラップする
//todoの状態を管理する

import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import { nanoid } from "nanoid";

const App = () => {
  const [todos, setTodos] = useState([
    {
      content: "課題をする",
      id: nanoid(),
    },
    {
      content: "洗濯をする",
      id: nanoid(),
    },
    {
      content: "電話をする",
      id: nanoid(),
    },
    {
      content: "料理をする",
      id: nanoid(),
    },
  ]);
  //propsを渡すための処理

  const addTodo = (content) => {
    //スプレッド構文
    setTodos([
      ...todos,
      {
        content: content,
        //obj内のkey名とvalueの変数名が同じ場合は省略可
        id: nanoid(),
        //ユニークなidを設定
      },
    ]);
  };

  const deleteTodo = (id) => {
    //filter関数
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }; //テスト関数:配列の要素(todo)のidと引数にとったidと一致しないものがテストパス

  return (
    <>
      <h1>Todo App</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo}></List>
    </>
  );
};

export default App;
