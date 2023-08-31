import type Unit from "./Unit";

type InputRow = {
  [unit in Unit]?: string | number;
};

export default InputRow;
