"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return;
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };

  useEffect(() => {
    console.log("Updated Tasks:", mainTask);
  }, [mainTask]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl rounded-2xl bg-white/30 shadow-2xl backdrop-blur-md p-8 border border-white/20">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6 tracking-wide">
          ✨ My To-Do List
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8"
        >
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 rounded-lg text-black bg-white/70 border border-gray-300 shadow-inner focus:outline-none"
          />
          <input
            type="text"
            placeholder="Enter Description"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 rounded-lg text-black bg-white/70 border border-gray-300 shadow-inner focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold px-6 py-2 rounded-full shadow-lg"
          >
            ➕ Add Task
          </button>
        </form>

        <hr className="mb-6 border-white/40" />

        {/* Task List */}
        <div className="bg-white/20 p-4 rounded-lg shadow-inner">
          <ul className="space-y-4">
            {mainTask.length > 0 ? (
              mainTask.map((t, i) => (
                <li
                  key={i}
                  className="flex flex-col md:flex-row justify-between items-center bg-white/70 p-4 rounded-xl shadow hover:shadow-md transition-all"
                >
                  <div className="text-left mb-2 md:mb-0 md:w-2/3">
                    <h5 className="text-lg font-semibold text-gray-800">
                      📝 {t.title}
                    </h5>
                    <p className="text-gray-700">{t.desc}</p>
                  </div>
                  <button
                    onClick={() => deleteHandler(i)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium transition"
                  >
                    ❌ Delete
                  </button>
                </li>
              ))
            ) : (
              <li className="text-center text-gray-800 font-semibold">
                🚫 No Tasks Available
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
