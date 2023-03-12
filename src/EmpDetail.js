import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
  const { empid } = useParams();

  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid]);
  return (
    <div className="all-form">
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <div className="container">
            <div
              className="card row"
              style={{ backgroundColor: "rgb(100, 90, 200)" }}
            >
              <div className="card-title">
                <h2>Sınav Detayları</h2>
              </div>
              <div className="card-body">
                {empdata && (
                  <div>
                    <h2>
                      Öğrenci Adı : <b>{empdata.name}</b>
                    </h2>
                    <hr></hr>
                    <h3>Detaylar</h3>
                    <h5>Kişi Sırası : {empdata.id}</h5>
                    <h5>Vize Not : {empdata.vize}</h5>
                    <h5>Final Not : {empdata.final}</h5>
                    <Link className="btn btn-danger" to="/">
                      Listeye geri dön
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpDetail;
