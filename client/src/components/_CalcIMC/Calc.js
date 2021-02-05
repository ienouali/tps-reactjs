import React, { useState } from "react";
 
export default function Calculator() {

  const [state, setState] = useState({
    poids: null,
    taille: null,
    IMC: null,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, IMC: state.poids / state.taille ** 2 });
  };

  const reset = () =>
    setState({
      poids: null,
      taille: null,
      IMC: null,
    });

  const getResult = (imc) => {
    const poids = {
      insuffisance: { val: "insuffisance pondérale", textColor: "text-info" },
      normal: { val: "poids normal", textColor: "text-success" },
      surpoids: { val: "surpoids", textColor: "text-warning" },
      obesite: { val: "obésité", textColor: "text-danger" },
    };
    if (imc < 18.5) return poids.insuffisance;
      if (imc > 18.5 && imc < 25) return poids.normal;
      if (imc > 25 && imc < 29.9) return poids.surpoids;
       if (imc > 30) return poids.obesite;
  };

  return (
      <div className="m-auto w-50">
        <h3 className="mt-5">Calcul d'IMC</h3>
        <hr/>
        <form onSubmit={handleSubmit}>
       
            <div className="col">
              <div className="form-group">
                <input
                className="form-control"
                style={{ border: "none", borderBottom: "1px solid #ccc" }}
                  onChange={handleChange}
                  value={state.poids !== null ? state.poids : ""}
                  name="poids"
                  type="text"
                  placeholder="Poids en (Kg)"
                  required
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <input
                 style={{ border: "none", borderBottom: "1px solid #ccc" }}
                 className="form-control"
                  onChange={handleChange}
                  value={state.taille !== null ? state.taille : ""}
                  name="taille"
                  type="text"
                  placeholder="Taille en (m)"
                  required
                  autoComplete="off"
                />
              </div>
            </div>
                <div className="form-group">
                    <button 
                    style={{ backgroundColor : "#122636" }}
                    className="ml-3 btn btn-secondary" onClick={reset}>
                      Rénisialiser
                    </button>

                    <button className="btn btn-info ml-3" type="submit">
                      Calculer
                    </button>

                  </div>
          </form>
     
          {state.IMC !== null ? (
            <div className="mt-3 bg-white p-2">
              Le resultat est: &nbsp;
              <small>{state.IMC.toFixed(2)}</small>
              <span
                className={`${getResult(state.IMC).textColor} float-right`}
              >
                {getResult(state.IMC).val}
              </span>
            </div>
          ) : null}
        </div>
  );
}
