import React, { useState } from "react";
import axios from "axios";

export default function ProblemForm() {
  const [problem, setProblem] = useState({
    p_id: "",
    title: "",
    statement: "",
    difficulty: "Easy",
  });

  async function sendReq(problem) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.post(
        "http://localhost:8080/problem/ ",
        problem,
        headers
      );

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(problem);
    sendReq(problem);
  };

  function changeHandler(e) {
    const { name, value } = e.target;
    setProblem((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function submitHandler1(e) {
    e.preventDefault();
    const file = e.target.file.files[0];

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      console.log(data);
      sendReq(JSON.parse(data));
    };

    reader.readAsText(file);
  }

  return (
    <div className="m-5 p-5">
      <form
        onSubmit={submitHandler}
        className="px-20 py-10 border-2 border-gray-700"
      >
        <label htmlFor="p_id">Id</label>
        <input
          name="p_id"
          id="p_id"
          type="number"
          value={problem.p_id}
          onChange={changeHandler}
          className="block border-2 border-gray-500 rounded-md"
        />

        <label htmlFor="title">Title</label>
        <input
          name="title"
          id="title"
          type="text"
          value={problem.title}
          onChange={changeHandler}
          className="block border-2 border-gray-500 rounded-md"
        />

        <label htmlFor="statement">Statement</label>
        <textarea
          name="statement"
          id="statement"
          value={problem.statement}
          onChange={changeHandler}
          className="block border-2 border-gray-500 rounded-md"
        />

        <label htmlFor="difficulty">Difficulty</label>
        <select
          name="difficulty"
          id="difficulty"
          value={problem.difficulty}
          onChange={changeHandler}
          className="block border-2 border-gray-500 rounded-md"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <button>Submit</button>
      </form>
      <form onSubmit={submitHandler1}>
        <input type="file" name="file" />
        <button>Submit</button>
      </form>
    </div>
  );
}
