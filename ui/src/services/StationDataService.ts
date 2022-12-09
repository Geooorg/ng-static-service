import http from "@/http-common";
import StationList from "@/types/StationType";

/* eslint-disable */
class StationDataService {
  getAll(): Promise<any> {
    return http.get("http://localhost:1042/stations.json");
  }

  get(id: any): Promise<any> {
    return http.get(`/stations/${id}`);
  }

  // create(data: any): Promise<any> {
  //   return http.post("/stations", data);
  // }

  // update(id: any, data: any): Promise<any> {
  //   return http.put(`/stations/${id}`, data);
  // }
  //
  // delete(id: any): Promise<any> {
  //   return http.delete(`/stations/${id}`);
  // }
  //
  // deleteAll(): Promise<any> {
  //   return http.delete(`/stations`);
  // }

  findByTitle(title: string): Promise<any> {
    return http.get(`/stations?title=${title}`);
  }
}

export default new StationDataService();
