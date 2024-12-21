import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setCompanies } from "@/redux/companySlice";

export default function useGetAllCompanies() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get("https://dream-hunt-1.onrender.com/api/v1/company/get", {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setCompanies(res.data.companies));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCompanies();
  }, []);
}
