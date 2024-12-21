import { setAllAppliedJobs } from "@/redux/jobSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useGetAppliedJobs() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const res = await axios.get("https://dream-hunt-1.onrender.com/api/v1/application/get", {
          withCredentials: true,
        });
        if (res.data.success && res.data.application) {
          dispatch(setAllAppliedJobs(res.data.application));
        } else {
          dispatch(setAllAppliedJobs([])); 
        }
      } catch (error) {
        console.log(error);
        dispatch(setAllAppliedJobs([]));
      }
    };
    fetchAppliedJobs();
  }, []);
}
