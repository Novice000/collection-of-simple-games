type Payload = {
  row: number;
  col: number;
  value: string;
};

function tictactoeReducer(
  state: string[][],
  action: {
    type: "UPDATE_VALUE" | "RESET";
    payload?: Payload;
  }
): string[][] {
  switch (action.type) {
    case "UPDATE_VALUE":
      if (action.payload) {
        const { row, col, value } = action.payload;
        return state.map((r, rowIndex) => {
          if (rowIndex === row) {
            return r.map((cell, colIndex) => {
              if (colIndex === col) {
                return value;
              }
              return cell;
            });
          }
          return r;
        });
      }
      return state;
    case "RESET":
      return state.map((row) => row.map(() => ""));
    default:
      return state;
  }
}

export default tictactoeReducer;
