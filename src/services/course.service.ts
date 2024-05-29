import api from "api";
import { AxiosResponse } from "axios";
import { ICourse } from "types/course.type";

export const fetchCourses = async (): Promise<Array<ICourse>> => {
    const response: AxiosResponse<Array<ICourse>> = await api.get(
      "/courses.json"
    );

    return response.data || [];
};
