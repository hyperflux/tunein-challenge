import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            setLoaded(true);
            setData(result.data);
          },
          (error) => {
            setLoaded(true);
            setError(error.toString());
          }
        );
    }, 200);
  }, [url]);

  return { data, loaded, error };
};

export default useFetch;
