import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/QuotesPage.style.css";

function QuotesPage() {
  const [quotesData, setQuotesData] = useState();

  const fetchQuotesData = async () => {
    try {
      const response = await axios.get("https://animechan.xyz/api/random");
      setQuotesData(response.data);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    fetchQuotesData();
  }, []);

  const handleGenerate = () => {
    fetchQuotesData();
  };

  return (
    <section className="quotes-page">
      <div className="quotes-wrapper">
        <div className="content">
          <h1>
            {quotesData?.quote} -{" "}
            <span className="blocked-text">{quotesData?.character}</span> from{" "}
            <span className="blocked-text">{quotesData?.anime}</span>
          </h1>
          <button className="btn-generate" onClick={handleGenerate}>
            Generate Other
          </button>
        </div>
      </div>
    </section>
  );
}

export default QuotesPage;
