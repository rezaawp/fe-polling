import { ProgressBar } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Voted = (props) => {
  const dataPolling = props?.polling;
  const loading = props.loading;
  const deadline = props.deadline;

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div
          className="container-fluid bg-light shadow rounded"
          style={{ height: "100%" }}
        >
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ height: "100%" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="170"
              height="170"
              fill="currentColor"
              className="bi bi-ui-checks"
              viewBox="0 0 16 16"
            >
              <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
            </svg>

            <div>
              {loading ? (
                <ProgressBar
                  height="80"
                  width="100%"
                  ariaLabel="progress-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass="progress-bar-wrapper"
                  borderColor="#FFB84C"
                  barColor="#FFB84C"
                />
              ) : (
                <>
                  {deadline ? (
                    <h5 className="fw-bold text-center">
                      KUIS INI SUDAH MELEWATI DEADLINE
                    </h5>
                  ) : (
                    <h5 className="fw-bold text-center">ANDA SUDAH MENGISI</h5>
                  )}
                  <br />
                  <h6>Result : </h6>
                  <h6>Q: {dataPolling.question}</h6>
                  {dataPolling?.choises?.map((choise, i) => {
                    return (
                      <div
                        key={i}
                        className="progress mb-3"
                        style={{ height: "25px" }}
                      >
                        <div
                          className="progress-bar bg-success ps-2 fw-bold"
                          role="progressbar"
                          style={{
                            width: `${choise.percentage}%`,
                            overflow: "visible",
                          }}
                          aria-valuenow={`${choise.percentage}`}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="shadow">
                            {choise.choise} {`${choise.percentage}%`}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
              <Link
                to={"/"}
                className="btn btn-warning mt-3 mb-4"
                style={{ width: "100%" }}
              >
                KE HALAMAN UTAMA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Voted;
