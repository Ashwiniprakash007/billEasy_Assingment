import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const CreateNotes = ({ add }) => {
  const [taskname, settaskname] = useState("");
  const params = useParams();
  const { id } = params;
  const userId = id;

  const handletaskname = (e) => {
    settaskname(e.target.value);
  };

  const handleSubmit = async () => {
    const payload = {
      taskname,
      userId,
    };
    add(payload);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="taskname"
        value={taskname}
        onChange={handletaskname}
      ></input>
      <button onClick={handleSubmit}>createTodos</button>
    </div>
  );
};

export default CreateNotes;
