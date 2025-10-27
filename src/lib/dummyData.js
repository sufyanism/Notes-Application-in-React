import { Users } from "lucide-react";
import { initDB } from "./db.js";

export const addDummyTodos = async () => {
    const db = await initDB();
    const tx = db.transaction("users", "readwrite");
    const store = tx.objectStore("users");
  
    const dummyTodos = [
      {
        title: "Learn React",
        description:
          "Start with the basics of React such as components, props, and state. Then move on to hooks like useState and useEffect. Finally, build small projects to strengthen your knowledge and prepare yourself for real-world applications.",
      },
      {
        title: "Build a Todo App",
        description:
          "Create a fully functional todo application with add, update, delete, and complete features. Use React state for managing the todos and style the application using TailwindCSS or plain CSS. Later, integrate a backend for data persistence.",
      },
      {
        title: "Explore IndexedDB",
        description:
          "IndexedDB allows you to store significant amounts of data inside the user's browser. Learn how to open databases, create object stores, use transactions, and perform CRUD operations. It is especially useful for offline-first applications.",
      },
      {
        title: "Practice Algorithms",
        description:
          "Dedicate time daily to practice data structures and algorithms. Focus on arrays, strings, linked lists, trees, graphs, and dynamic programming. Solve problems on platforms like LeetCode, HackerRank, or Codeforces to enhance problem-solving skills.",
      },
    ];
  
    for (let todo of dummyTodos) {
      await store.add(todo);
    }
  
    await tx.done;
  };

export const getAllData =async ()=>{
    const db = await initDB();
    return await db.getAll("users");
}

export const add = async(data)=>{
  const db = await initDB();
  return await db.add("users",data)
}

export const deleteDB = async(id)=>{
  const db = await initDB();
  await db.delete("users",id)
}

export const getOneDB = async(id)=>{
  const db = await initDB();
  return await db.get("users",id)
}

export const EditDB = async(id,title,description)=>{
  const db = await initDB();
  await db.put("users",{id,title,description})
}