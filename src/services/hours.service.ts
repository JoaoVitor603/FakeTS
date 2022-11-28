import { IscheduledHours } from "../interfaces/timeSheet";
import HttpClient from "./httpConfig";

class ApiService {
  static async readAll(): Promise<IscheduledHours[]> {
    const { data } = await HttpClient.api.get("/hours");

    return data;
  }
}

export default ApiService;
