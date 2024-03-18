import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure(`/menu`)
      // .then((res) => res.json())
      .then((res) => {
        setMenu(res.data);
        setLoading(false);
      });
  }, []);

  return [menu, loading];
};

export default useMenu;
