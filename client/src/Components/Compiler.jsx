import axios from "axios";
import React, { useEffect, useState } from "react";

const Compiler = () => {
  const [languageType, setlanguageType] = useState("");
  const [code, setCode] = useState(null);
  const handleChange1 = (event) => {
    setlanguageType(event.target.value);
    console.log(languageType);
  };
  const handleChange2 = (event) => {
    setCode(event.target.value);
    console.log(code);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const sendCompilerCode = async () => {
      const payload = {
        languageType,
        code,
      };
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const output = await axios.post("http://localhost:3000/run", payload, {
          headers: headers,
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    sendCompilerCode();
  };

  return (
    <>
      <form className="h-screen mx-2" onSubmit={handleSubmit}>
        <label
          for="message"
          className="flex items-center justify-center mb-8 mt-10 font-bold text-white text-2xl"
        >
          Enter your code here
        </label>

        <div className="flex flex-col w-full">
          <label
            for="countries"
            class="mb-2 p-4 text-lg font-medium text-white"
          >
            Select a language🧾
          </label>
          <select
            id="language"
            class="mx-2 mb-4 bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg p-4"
            onChange={handleChange1}
            value={languageType}
          >
            <option value="">Choose a language</option>
            <option value="cpp">C++</option>
            <option value="py">Python</option>
            <option value="java">Java</option>
          </select>

          <div className="mx-2 mb-4  border border-gray-200 rounded-lg bg-gray-400">
            <label
              for="message"
              className="flex justify-start items-start p-4 mb-2 text-lg font-medium text-gray-900"
            >
              Code goes below👇
            </label>
            <div className="px-4 py-2 bg-gray-400 rounded-t-lg dark:bg-gray-800">
              <label for="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="4"
                className="w-full px-0 text-sm text-gray-900 bg-gray-400 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a comment..."
                required
                onChange={handleChange2}
                value={code}
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-bold    text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Submit Answer
              </button>
            </div>
          </div>
        </div>
        <p className="text-center ml-auto text-sm font-normal text-white">
          Remember, Write this code in consideration of the plagarism of the
          problem statement.
        </p>
      </form>
    </>
  );
};

export default Compiler;
