import axios from "axios";
import { generalData } from "../data/global";

export const getData = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:8000/api/timetracking/data"
    );
    return data;
  } catch (err) {
    const data = generalData;
    return data;
  }
};
