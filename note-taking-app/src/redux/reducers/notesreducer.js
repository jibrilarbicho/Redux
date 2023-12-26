const initialState = {
  notes: [],
};
const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      const newNote = {
        id: Math.random(),
        title: action.payload.title,
        content: action.payload.content,
      };
      const updateNotes = [...state.notes, newNote];
      localStorage.setItem("notes", JSON.stringify(updateNotes));
      return {
        ...state,
        notes: [...state.notes, newNote],
      };
    case "FETCH_NOTE":
      return {
        notes: JSON.parse(localStorage.getItem("notes"))
          ? JSON.parse(localStorage.getItem("notes"))
          : [],
      };
    case "DELETE_NOTE":
      const FilterNote = state.notes.filter(
        (note) => note.id !== action.payload
      );
      localStorage.setItem("notes", JSON.stringify(FilterNote));
      return {
        ...state,
        notes: FilterNote,
      };
    default:
      return state;
  }
};
export default notesReducer;
