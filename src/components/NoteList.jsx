const NoteList = ({notes}) => {
    if (notes.length === 0) {
        return (
            <p className="text-center text-gray-500">
                No notes found.
            </p>
        )
    }

    return (
        <div className="space-y-4">
            {notes.map((note) => (
                <div className="p-4 bg-white rounded-l shadow-md border-l-4"
                key={notes.id}>
                    <h3 className="text-lg font-bold">
                        {note.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                        <strong>Category:</strong> {note.category}
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Priority:</strong> {note.priority}
                    </p>
                    <p className="mt-2">
                        {note.description}
                    </p>

                </div>
            ))}
        </div>
    );
};

export default NoteList;