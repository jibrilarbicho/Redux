const initialState = {
  notes: [],
};
const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      const newNote = {
        id: Math.random,
        title: action.payload.title,
        content: action.payload.content,
      };
      return {
        ...state,
        notes: [...state.notes, newNote],
      };
    default:
      return state;
  }
};
export default notesReducer;
