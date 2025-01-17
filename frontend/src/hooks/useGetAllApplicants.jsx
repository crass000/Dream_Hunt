import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAllApplicants } from "@/redux/applicationSlice";
import { useParams } from "react-router-dom";

export default function useGetAllApplicants() {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
         `https://dream-hunt-1.onrender.com/api/v1/application/${params.id}/applicants`,
          { withCredentials: true }
        );
        if (res.data.success) {
          dispatch(setAllApplicants(res.data.job));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllApplicants();
  }, []);
}
