import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {
  const [name, namechange] = useState("");
  const [vize, vizechange] = useState("");
  const [final, finalchange] = useState("");
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    const empdata = { name, vize, final };

    fetch(" http://localhost:3000/employee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Kaydetme Başarılı.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="all-form">
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div
              className="card"
              style={{ backgroundColor: "rgb(100, 90, 200)" }}
            >
              <div className="card-title">
                <h2>Kullanıcı Oluştur</h2>{" "}
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="title-name">
                        {" "}
                        <i> Öğrenci İsmi </i>
                      </label>
                      <input
                        required
                        value={name}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      ></input>
                      {name.length === 0 && validation && (
                        <span className="text-danger">Bir isim girin</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        {" "}
                        <b> Vize Notu </b>
                      </label>
                      <input
                        value={vize}
                        onChange={(e) => vizechange(e.target.value)}
                        className="form-control"
                        placeholder="geçerli bir sayı giriniz"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        <b> Final Notu </b>
                      </label>
                      <input
                        value={final}
                        onChange={(e) => finalchange(e.target.value)}
                        className="form-control"
                        placeholder="geçerli bir sayı giriniz"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check">
                      <div className="col-lg-12">
                        <div className="form-group1">
                          <button className="btn btn-success" type="submit">
                            Kaydet
                          </button>
                          <Link to="/" className="btn btn-danger">
                            Geri
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpCreate;
