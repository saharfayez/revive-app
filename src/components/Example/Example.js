import React, { useState } from "react";
import "../Styles/api_styles.css";

const Example = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  return (
    <section className="contact section bd-container" id="contact">
      <div className="contact__container bd-grid">
        <div className="contact__data">
          <span className="section-subtitle contact__initial">
            Example Code
          </span>
          <pre>
            <code>
              fetch('https://fakestoreapi.com/products/1')
              <br />
              .then(res =&gt; res.json())
              <br />
              .then(json =&gt; console.log(json))
            </code>
          </pre>
          <pre id="result">
            <code className="ss">
              {loading ? (
                <span className="loading">Loading...</span>
              ) : (
                JSON.stringify(data, undefined, 2)
              )}
            </code>
          </pre>
          <div className="contact__button">
            <button onClick={fetchData} className="button">
              Try it
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Example;
