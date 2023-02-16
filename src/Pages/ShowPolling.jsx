import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import polling from "../Hooks/pollings";
import Layout from "../Layouts/Layout";

const ShowPolling = () => {
  const params = useParams();

  const [data, setData] = useState({});

  const getPoll = () => {
    polling
      .show(params.id)
      .then((res) => setData(res.data))
      .catch((e) => console.log({ e }));
  };

  useEffect(() => {
    getPoll();
  }, []);

  return (
    <Layout>
      <div className="container-fluid d-flex justify-content-center">
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-header text-center fw-bold fs-4">
            {data?.question}
          </div>
          <div className="card-body pt-4">
            {data?.choises?.map((choise, i) => {
              return (
                <>
                  <input
                    key={i}
                    type="radio"
                    className="form-control-input mb-3"
                    id={i}
                  />
                  <label htmlFor={i}>{choise?.choise}</label> <br />
                </>
              );
            })}

            <div className="container-fluid d-flex justify-content-end mt-3">
              <button className="btn btn-primary">Vote</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShowPolling;
