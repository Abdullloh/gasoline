import React, { useEffect, useState } from "react";
import Axios from "../utils/axios";

export default function useFetchHook(url) {
  const [state, setState] = useState([]);

  const fetchData = async () => {
    try {
      const res = await Axios.get(url);
      console.log(res);
      const { status, data } = res;
      if (status === 200) {
        setState(data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return [state];
}
