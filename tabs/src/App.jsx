import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const url = "https://course-api.com/react-tabs-project";
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [jobIndex, setJobIndex] = useState(0);

  const fetchJobs = async () => {
    let response = await fetch(url);
    let jobs = await response.json();
    console.log(jobs);
    setJobs(jobs);
    setIsLoading(false);
    console.log("jobssss ", jobs);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  const handleJobPick = (index) => {
    setJobIndex(index);
  };
  if (isLoading) {
    return <div>{isLoading && <h4>Loading .... </h4>}</div>;
  }
  const { title, company, duties, dates } = jobs[jobIndex];
  return (
    <>
      <div className="container-md">
        <div className="list-group">
          {jobs.map((job, index) => {
            return (
              <button
                onClick={() => handleJobPick(index)}
                key={job.id}
                type="button"
                className={`list-group-item list-group-item-action ${
                  index === jobIndex && "active"
                }`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {company}
            </h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">{dates}</h6>
          </div>
          <ul className="list-group list-group-flush">
            {duties.map((duty, dutyIndex) => {
              return (
                <li className="list-group-item" key={dutyIndex}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg>
                  {duty}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
