import { useState } from "react";
import polling from "../Hooks/pollings";
import Layout from "../Layouts/Layout";

const CreatePoll = () => {
  const [dataPoll, setDataPoll] = useState({
    question: "",
    thumbnail: "",
    choises: "",
  });

  const storePolling = async () => {
    try {
      const result = await polling.store(dataPoll);

      if (result.status) {
        alert("sukses membuat polling");
      } else if (!result.status) {
        alert("gagal membuat polling");
        console.log(result);
      }
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <Layout>
      <div className="container-fluid d-flex align-item-center justify-content-center">
        <div className="card mb-5" style={{ width: "30rem" }}>
          <div className="card-header text-center fw-bold fs-4">
            Create Polling Here
          </div>

          <div className="card-body">
            <label htmlFor="">Question : </label>
            <input
              className="form-control"
              type="text"
              placeholder="Question"
              onChange={(e) =>
                setDataPoll({ ...dataPoll, question: e.target.value })
              }
            />{" "}
            <br />
            <label htmlFor="">Choises : </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="form-control"
              onChange={(e) =>
                setDataPoll({ ...dataPoll, choises: e.target.value })
              }
            ></textarea>{" "}
            <br />
            <label htmlFor="">Thumbnail : </label> <br />
            <input
              type="file"
              placeholder="File"
              className="form-control"
              onChange={(e) =>
                setDataPoll({ ...dataPoll, thumbnail: e.target.files[0] })
              }
            />{" "}
            <br />
            <button className="btn btn-primary" onClick={storePolling}>
              CREATE
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePoll;
