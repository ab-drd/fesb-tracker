import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, accessToken) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url, {
        headers: {
           Authorization: accessToken,
           }
          }
        )
        setData(response.data.schedule);
      } catch (error) {
        setError({
          isError: true,
          message: error.message,
        });
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [accessToken, url]);
  return { data, loading, error };
};
export default useFetch;