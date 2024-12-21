import { setAllLatestJobs } from "@/redux/jobSlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useGetAllLatestJobs() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllLatestJobs = async () => {
      try {
        const res = await axios.get("https://dream-hunt-1.onrender.com/api/v1/job/get", {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllLatestJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllLatestJobs();
  }, []);
}
