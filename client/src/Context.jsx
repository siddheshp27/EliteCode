import { createContext, useState } from "react";
import axios from "axios";
export const ClientContext = createContext(null);

export const ClientProvider = ({ children }) => {
  const [languageType, setlanguageType] = useState("py");
  const [fileName, setFileName] = useState("py");
  const [code, setCode] = useState(`print("Hello Word")`);
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
      name: "Main.java",
      language: "java",
      value: `public class Main {
            public static void main(String[] args) {
                System.out.println("Hello World");
            }
        }`,
    },
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const sendCompilerCode = async () => {
      const payload = {
        languageType,
        code: languageData[languageType].value,
      };
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const output = await axios.post(
          "http://3.109.208.152:5000/compile",
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

  const values = {
    handleSubmit,
    languageData,
    setlanguageType,
    fileName,
    setFileName,
    code,
    setCode,
  };
  return (
    <ClientContext.Provider value={values}>{children}</ClientContext.Provider>
  );
};
