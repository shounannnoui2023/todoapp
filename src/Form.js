//ユーザーの入力を受け付ける
//入力値を状態として管理する
//ユーザーの入力値を検証する
//入力確定を受け付ける

import React, { useState } from "react";

// const Form = ({ todos, setTodos }) => {
//   const [value, setValue] = useState(""); //初期値は空

//inputの入力が空の状態だと追加できないようにする
const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  //formが送信された時に実行される関数
  const handleSubmit = (e) => {
    e.preventDefault();

    //リロード止める(onSubmitは実行時にリロードしてしまう)
    if (value.trim() === "") {
      //trim
      return alert("文字を入力してください");
    }
    addTodo(value);
    //addTodoにvalueを入れる

    setValue("");
    //追加処理の完了後フォームを空にする
  };

  return (
    //onSubmitでhandleSubmitを動かす
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        // value={value}
        onChange={(e) => {
          setValue(e.target.value);
          // placeholder = "タスクを入力...";

          //inputから入力されたデータを読み取る
        }}
      />
      <button disabled={value.trim() === ""}>送信</button>
    </form>
  );
};

export default Form;
