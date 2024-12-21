import { setAllAdminJobs } from "@/redux/jobSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function useGetAllAdminJobs() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllAdminJobs = async () => {
      try {
        const res = await axios.get("https://dream-hunt-1.onrender.com/api/v1/job/getadminjobs", {
          withCredentials: true,
        });
        if (res.data.success && res.data.jobs) {
          dispatch(setAllAdminJobs(res.data.jobs));
        } else {
          dispatch(setAllAdminJobs([]));
        }
      } catch (error) {
        console.error(error);
        dispatch(setAllAdminJobs([]));
      }
    };
    fetchAllAdminJobs();
  }, []);
}
