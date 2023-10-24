import React, { useState } from "react"; //useState=React.useState

const Item = ({ content, id, deleteTodo }) => {
  //useStateをを分割代入構文で定義
  const [isDone, setIsDone] = useState(false);
  //isDone=現在の状況　setIsDone=状況を更新
  //useState(false)=初期値はfalse

  //   const handleDelete = () => {
  //     deleteTodo(id);
  //   };

  return (
    <li>
      <input
        type="checkbox"
        onChange={() => {
          //input.addEventListener('change',()=>{})と同じ
          setIsDone(!isDone);
          //更新後、()の中の値に更新
        }}
      />
      <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {content}
      </span>
      <button onClick={() => deleteTodo(id)}>削除</button>
    </li>
    //三項演算子でisDoneの値によって線の有無を替える
    //style属性で線をつける
  );
};

export default Item;
