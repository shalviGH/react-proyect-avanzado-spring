import { useState } from "react";

const Course = () => {
  const [n1, setN1] = useState();
  const [n2, setN2] = useState();
  const [result, setResult] = useState();
  const [operation, setOperation] = useState();

  const sumar = (e) => {
    e.preventDefault();

    switch (operation) {
      case "suma":
        return setResult(Number(n1) + Number(n2));
      case "resta":
        return setResult(Number(n1) - Number(n2));
      case "division":
        return setResult(Number(n1) / Number(n2));
      case "multiplicacion":
        return setResult(Number(n1) * Number(n2));
      default:
        return setResult(Number(n1) + Number(n2));
    }
  };

  return (
    <div>
      <div className="card mb-3 mt-2">
        <h1 className="text-center">course</h1>
      </div>

      <form className="card col-md-6 offset-md-3 offset-md-3">
        <div className="form-group mb-2 p-3">
          <input
            type="number"
            className="form-control "
            name="n1"
            placeholder="ingrese un numero"
            value={n1}
            required
            onChange={(e) => setN1(e.target.value)}
          />
        </div>

        <div className="form-group p-3">
          <input
            type="number"
            className="form-control"
            name="n2"
            placeholder="ingrese otro numero"
            value={n2}
            required
            onChange={(e) => setN2(e.target.value)}
          />
        </div>

        <div className="form-group p-3">
          <label className="lbl">
            Selecione que operacion desea realizar:{" "}
          </label>
          <select
            type="number"
            className="form-control"
            name="n2"
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            required
          >
            <option value={"suma"}>Suma</option>
            <option value={"resta"}>Resta</option>
            <option value={"multiplicacion"}>Multiplicacion</option>
            <option value={"division"}>Division</option>
          </select>
        </div>
        <br />

        <button className="btn btn-success mb-7 mt-3" onClick={(e) => sumar(e)}>
          sumar
        </button>
        <br></br>
        <p>Resultado : {result}</p>
      </form>
    </div>
  );
};

export default Course;
