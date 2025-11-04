import React, {useState} from 'react';

const NoteForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'Work',
        priority: 'Medium',
        description: '',
    })

    // FIX 1: Added handleChange function to update form data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    // FIX 2: Proper form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    }

    return (
        // FIX 3: Added onSubmit handler to form
        <form className="mb-6" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="title" className="block font-semibold">
                    Title:
                </label>
                <input
                    type="text"
                    name="title"
                    className="w-full p-2 border rounded-lg"
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="priority" className="block font-semibold">
                </label>
                <select
                    name="priority"
                    className="w-full p-2 border rounded-lg"
                    value={formData.priority}
                    onChange={handleChange}
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
                    name="category"
                    className="w-full p-2 border rounded-lg"
                    value={formData.category}
                    onChange={handleChange}
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
                    name="description"
                    className="w-full p-2 border rounded-lg"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>
            </div>

            {/* FIX 10: Fixed hover class syntax */}
            <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600"
            >
                Add Note
            </button>
        </form>
    );
};

export default NoteForm;