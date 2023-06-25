import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";

const Compiler = () => {
  const [languageType, setlanguageType] = useState("py");
  const [fileName, setFileName] = useState("py");
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const languageData = {
    py: {
      name: "script.py",
      language: "python",
      value: "print('Hello World')",
    },
    js: {
      name: "script.js",
      language: "javascript",
      value: "console.log('Hello World')",
    },
    cpp: {
      name: "script.cpp",
      language: "cpp",
      value: `#include <iostream>

      int main() {
          std::cout << "Hello, World!" << std::endl;
          return 0;
      }`,
    },
    java: {
      name: "Test.java",
      language: "java",
      value: `public class Test {
        public static void main(String[] args) {
            System.out.println("Hello World");
        }
    }`,
    },
  };
  const file = languageData[fileName];
  const [code, setCode] = useState(file.value);
  const [outputValue, setOutputValue] = useState("Output goes here");
  const handleChange1 = (event) => {
    setlanguageType(event.target.value);
    setFileName(event.target.value);
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
        const output = await axios.post(
          "http://localhost:8080/compiler/compile",
          payload,
          {
            headers: headers,
          }
        );
        console.log(output);
        setOutputValue(output.data.output);
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
          htmlFor="message"
          className="flex items-center justify-center mb-8 mt-10 font-bold text-white text-2xl"
        >
          Enter your code here
        </label>

        <div className="flex flex-col w-full">
          <label
            htmlFor="countries"
            className="mb-2 p-4 text-lg font-medium text-white"
          >
            Select a language🧾
          </label>
          <select
            id="language"
            className="mx-2 mb-4 bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg p-4"
            onChange={handleChange1}
            value={languageType}
          >
            <option value="">Choose a language</option>
            <option value="cpp">C++</option>
            <option value="py">Python</option>
            <option value="java">Java</option>
            <option value="js">Javascript</option>
          </select>

          <div className="mx-2 mb-4  border border-gray-200 rounded-lg bg-gray-400">
            <label
              htmlFor="message"
              className="flex justify-start items-start p-4 mb-2 text-lg font-medium text-gray-900"
            >
              Code goes below👇
            </label>
            <div className="px-4 py-2 w-full bg-gray-400 rounded-t-lg dark:bg-gray-800">
              <Editor
                height="50vh"
                width="100%"
                theme="vs-dark"
                onMount={handleEditorDidMount}
                path={file.name}
                defaultLanguage={file.language}
                defaultValue={file.value}
                onChange={handleEditorChange}
              />
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

        <label
          htmlFor="output"
          className="mt-2 mb-2 p-4 text-lg font-medium text-white"
        >
          Output 📩:
        </label>
        <p className="p-4 ml-auto text-lg font-normal text-white">
          {outputValue}
        </p>
      </form>
    </>
  );
};

export default Compiler;
