import React, {useState} from 'react';

const NoteForm = () => {
    const [title, setTitle] = useState("") // ERROR 1: Fixed variable name and setter
    const [priority, setPriority] = useState("Medium")
    const [category, setCategory] = useState("Work")
    const [description, setDescription] = useState("") // ERROR 2: Removed duplicate 'description' state

    return (
        <form className="mb-6">
            <div className="mb-4">
                <label htmlFor="title" className="block font-semibold"> {/* ERROR 3: Fixed htmlFor to match input */}
                    Title:
                </label>
                <input
                    type="text"
                    className="w-full p-2 border rounded-lg"
                    value={title} // ERROR 4: Using correct s http://localhost:5173tate variable
                    onChange={(e) => setTitle(e.target.value)} // ERROR 5: Using correct setter
                /> http://localhost:5173
            </div>

            <div className="mb-4">
                <label htmlFor="priority" className="block font-semibold">
                    Priority:http://localhost:5173
                </label>
                <select
                    className="w-full p-2 border rounded-lg"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="High">🔴 High</option>
                    <option value="Medium">🟠 Medium</option>
                    <option value="Low">🟢 Low</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="category" className="block font-semibold">
                    Category:
                </label>
                <select
                    className="w-full p-2 border rounded-lg"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="Work">💼 Work</option>
                    <option value="Personal">🏚️ Personal</option>
                    <option value="Ideas">💡 Ideas</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block font-semibold">
                    Description:
                </label>
                <textarea
                    className="w-full p-2 border rounded-lg" // ERROR 6: Removed type="text" from textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            
            <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600">
                Add Note
            </button>
        </form>
    );
};

export default NoteForm;