import { useEffect, useState } from "react";
// import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic(`/menu`)
      // .then((res) => res.json())
      .then((res) => {
        setMenu(res.data);
        setLoading(false);
      });
  }, []);

  return [menu, loading];
};

export default useMenu;
