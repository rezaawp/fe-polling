import { useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
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
  const [loading, setLoading] = useState(false);
  const [deadline, setDeadline] = useState(false);

  const checkVote = () => {
    if (sessionStorage.getItem("votes")) {
      const votesSession = sessionStorage.getItem("votes");
      const dataSession = JSON.parse(votesSession);

      dataSession.map((item) => {
        if (item.polling_id == params.id) {
          setIsVote(true);
          getPoll();

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
          getPoll();

          return;
        }
      });

      dataSession = [...dataSession, { polling_id: params.id }];

      sessionStorage.setItem("votes", JSON.stringify(dataSession));
      setIsVote(true);
      getPoll();
    } else {
      sessionStorage.setItem(
        "votes",
        JSON.stringify([{ polling_id: params.id }])
      );
      setIsVote(true);
      getPoll();
    }
  };

  const getPoll = async () => {
    setLoading(true);
    try {
      setLoading(true);
      let result = await polling.show(params.id);
      if (result.data.is_deadline) {
        setDeadline(true);
      }
      setData(result.data);
      console.log({ result });
      setLoading(false);
    } catch (e) {
      setLoading(true);

      console.log({ e });
    }
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
    } else if (!result.status) {
      if (result.message == "sudah pernah vote") {
        alert("anda sudah pernah mengisi vote ini");
        storeSessionVote();
      } else {
        alert("ada beberapa kesalahan. tidak dapa menyimpan vote");
      }
    }
  };

  useEffect(() => {
    getPoll();
    checkVote();
  }, []);

  return (
    <Layout>
      {!isVote ? (
        <>
          {loading ? (
            <div
              className="container d-flex justify-content-center align-items-center flex-column"
              style={{ height: "100%" }}
            >
              <MagnifyingGlass
                visible={true}
                height="100"
                width="100%"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor="#c0efff"
                color="#e15b64"
              />
              <i>
                <small>Mencari Polling</small>
              </i>
            </div>
          ) : (
            <>
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
                            <label
                              className="form-check-label ms-1"
                              htmlFor={i}
                            >
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
            </>
          )}
        </>
      ) : (
        <Voted polling={data} loading={loading} />
      )}
    </Layout>
  );
};

export default ShowPolling;
