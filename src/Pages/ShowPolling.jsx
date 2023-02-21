import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import polling from "../Hooks/pollings";
import votes from "../Hooks/vote";
import Layout from "../Layouts/Layout";
import Voted from "./Voted";

const ShowPolling = () => {
  const params = useParams();

  const [data, setData] = useState({});
  const [choiseId, setChoiseId] = useState();
  const [isVote, setIsVote] = useState(false);

  const checkVote = () => {
    if (sessionStorage.getItem("votes")) {
      const votesSession = sessionStorage.getItem("votes");
      const dataSession = JSON.parse(votesSession);

      dataSession.map((item) => {
        if (item.polling_id == params.id) {
          setIsVote(true);
          return;
        }
      });
    } else {
      setIsVote(false);
    }
  };

  const storeSessionVote = () => {
    if (sessionStorage.getItem("votes")) {
      const votesSession = sessionStorage.getItem("votes");
      let dataSession = JSON.parse(votesSession);

      dataSession.map((item) => {
        if (item.polling_id == params.id) {
          setIsVote(true);
          return;
        }
      });

      dataSession = [...dataSession, { polling_id: params.id }];

      sessionStorage.setItem("votes", JSON.stringify(dataSession));
      setIsVote(true);
    } else {
      sessionStorage.setItem(
        "votes",
        JSON.stringify([{ polling_id: params.id }])
      );
      setIsVote(true);
    }
  };

  const getPoll = () => {
    polling
      .show(params.id)
      .then((res) => setData(res.data))
      .catch((e) => console.log({ e }));
  };

  const vote = async () => {
    const result = await votes.store({
      polling_id: params.id,
      choise_id: choiseId,
    });

    console.log(result);
    if (result.status) {
      alert("Vote berhasil");
      storeSessionVote();
    }
  };

  useEffect(() => {
    getPoll();
    checkVote();
  }, []);

  return (
    <Layout>
      {!isVote ? (
        <div className="container-fluid d-flex justify-content-center">
          <div className="card" style={{ width: "30rem" }}>
            <div className="card-header text-center fw-bold fs-4">
              {data?.question}
            </div>
            <div className="card-body pt-4">
              {data?.choises?.map((choise, i) => {
                return (
                  <div key={i}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id={i}
                        value={choise?.id}
                        onChange={(e) => setChoiseId(e.target.value)}
                      />
                      <label className="form-check-label ms-1" htmlFor={i}>
                        {choise?.choise}
                      </label>
                    </div>
                  </div>
                );
              })}

              <div className="container-fluid d-flex justify-content-end mt-3">
                <button className="btn btn-primary" onClick={vote}>
                  Vote
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Voted />
      )}
    </Layout>
  );
};

export default ShowPolling;