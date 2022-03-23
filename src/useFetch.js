import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error("couldn't fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setisPending(false);
        setData(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setisPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
