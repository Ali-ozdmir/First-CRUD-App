import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate(`/employee/detail/${id}`);
  };
  const LoadEdit = (id) => {
    navigate(`/employee/edit/${id} `);
  };
  const Removefunction = (id) => {
    if (window.confirm("Silmek mi istiyorsun?")) {
      fetch(" http://localhost:3000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Silme Başarılı.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="divbtn">
            <Link to="employee/create" className="btn btn-success">
              Kişi Ekle (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Kişiler</td>
                <td>İsim</td>
                <td>Vize</td>
                <td>Final</td>
                <td>İşlemler</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.vize}</td>
                    <td>{item.final}</td>
                    <td>
                      <button
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Düzenle
                      </button>
                      <button
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        {" "}
                        Sil{" "}
                      </button>
                      <button
                        onClick={() => LoadDetail(item.id)}
                        className="btn btn-info"
                      >
                        Detaylar
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;
