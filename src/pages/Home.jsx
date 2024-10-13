import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const param = useParams();

  const view = () => {
    navigate("course");
  };

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.value = "vjkbfs,fbv";
  }, []);

  const save = (e) => {
    e.preventDefault();
    console.log("dfghjklñ ===================");
    alert("guardando informacion");
  };

  return (
    <div className="mt-2">
      <h1 className="text-center">Home</h1>

      <div
        className="container-sm mt-0"
        style={{
          display: "flex",
          alignItems: "center",
          background: "none",
          justifyContent: "center",
        }}
      >
        <form className="col-10 col-sm-8 col-md-6 col-lg-5" style={{}}>
          <div className="form-group">
            <label className="form-label">name</label>
            <input
              ref={inputRef}
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group mt-2 ">
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => save(e)}
            >
              {"Enviar"}
            </button>

            <button type="button" className="btn btn-danger m-3" onClick={view}>
              {"Cancelar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
