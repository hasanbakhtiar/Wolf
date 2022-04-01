


import { BasicContext } from "./BasicContext";

const MovieList = () => {
  const [state, setState] = useContext(BasicContext);
  return (
    <div>
      {state.map((set) => (
        <Compo x={set.a} />
      ))}
    </div>
  );
};

export default MovieList;