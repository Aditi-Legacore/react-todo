import { useState } from "react";

export default function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [filter, setFilter] = useState("all"); // all | active | completed
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");


    // Add new task
    const addTask = () => {
        if (!newTask.trim()) return;
        const newItem = {
            id: tasks.length + 1,
            text: newTask,
            completed: false,
        }; 
        // ...tasks → expands the existing array into its elements
        // newItem → adds the new task at the end       
        setTasks([...tasks, newItem]);
        setNewTask("");
    };

    // Mark complete / toggle
    const toggleTask = (id) => {
        setTasks(
            tasks.map((t) =>
                // Spread operator (...t) copies all existing properties of the task into a new object.
                t.id === id ? { ...t, completed: !t.completed } : t
            )
        );
    };

    // Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    // Edit task
    const saveEdit = (id) => {
        setTasks(
            tasks.map((t) =>
                t.id === id ? { ...t, text: editText } : t
            )
        );
        setEditId(null);
        setEditText("");
    };

    // Filter tasks
    const filteredTasks = tasks.filter((t) => {
        if (filter === "active") return !t.completed;
        else if (filter === "completed") return t.completed;
        return true;
    });

    return (
        <div
            style={{
                padding: "24px",
                maxWidth: "400px",
                margin: "0 auto",
                backgroundColor: "white",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                borderRadius: "12px",
            }}
        >
            <h1 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>
                Todo List
            </h1>

            {/* Input */}
            <div style={{ marginBottom: "16px" }}>
                <input
                    type="text"
                    style={{
                        border: "1px solid #ccc",
                        padding: "8px 12px",
                        borderRadius: "6px 0 0 6px",
                    }}
                    placeholder="Add a new task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTask()}
                />
                <button
                    style={{
                        backgroundColor: "#3B82F6",
                        color: "white",
                        padding: "8px 16px",
                        border: "none",
                        borderRadius: "0 6px 6px 0",
                        cursor: "pointer",
                    }}
                    onClick={addTask}
                >
                    Add
                </button>
            </div>

            {/* Filters */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
                <button
                    style={{
                        padding: "6px 12px",
                        borderRadius: "6px",
                        border: "none",
                        backgroundColor: filter === "all" ? "#3B82F6" : "#E5E7EB",
                        color: filter === "all" ? "white" : "black",
                        cursor: "pointer",
                    }}
                    onClick={() => setFilter("all")}
                >
                    All
                </button>
                <button
                    style={{
                        padding: "6px 12px",
                        borderRadius: "6px",
                        border: "none",
                        backgroundColor: filter === "active" ? "#3B82F6" : "#E5E7EB",
                        color: filter === "active" ? "white" : "black",
                        cursor: "pointer",
                    }}
                    onClick={() => setFilter("active")}
                >
                    Active
                </button>
                <button
                    style={{
                        padding: "6px 12px",
                        borderRadius: "6px",
                        border: "none",
                        backgroundColor: filter === "completed" ? "#3B82F6" : "#E5E7EB",
                        color: filter === "completed" ? "white" : "black",
                        cursor: "pointer",
                    }}
                    onClick={() => setFilter("completed")}
                >
                    Completed
                </button>
            </div>

            {/* Task list */}
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {filteredTasks.map((task) => (
                    <li
                        key={task.id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderBottom: "1px solid #E5E7EB",
                            padding: "8px 0",
                        }}
                    >
                        {editId === task.id ? (
                            <>
                                <input
                                    style={{
                                        border: "1px solid #ccc",
                                        padding: "4px 8px",
                                        marginRight: "8px",
                                        borderRadius: "4px",
                                    }}
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    // This listens for keyboard key presses.
                                    // onKeyDown allows saving changes when pressing Enter
                                    // onKeyDown={(e) => e.key === "Enter" && saveEdit(task.id)}
                                />
                                <button
                                    style={{
                                        color: "green",
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => saveEdit(task.id)}
                                >
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTask(task.id)}
                                    style={{
                                        marginRight: "8px",
                                        width: "18px",
                                        height: "18px",
                                        cursor: "pointer",
                                    }}
                                />
                                <span
                                    style={{
                                        cursor: "pointer",
                                        textDecoration: task.completed ? "line-through" : "none",
                                        color: task.completed ? "#6B7280" : "black",
                                        flex: 1,
                                    }}
                                    onClick={() => toggleTask(task.id)}
                                >
                                    {task.text}
                                </span>
                                <div style={{ display: "flex", gap: "8px" }}>
                                    <button
                                        style={{
                                            color: "orange",
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => {
                                            setEditId(task.id);
                                            setEditText(task.text);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        style={{
                                            color: "red",
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => deleteTask(task.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
