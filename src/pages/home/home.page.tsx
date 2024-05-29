import { useEffect, useMemo, useState } from "react";
import { Card } from "components/features/card/card.component";
import { Category } from "components/features/category/category.component";
import { fetchCourses } from "services/course.service";
import { ICourse } from "types/course.type";
import { Tags } from "types/tags.enum";
import Skeleton from "react-loading-skeleton";
import { toast, ToastContainer } from "react-toastify";
import "./home.scss";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tag, setTag] = useState<Tags>(Tags.All);
  const getCourses = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await fetchCourses();
      setCourses(response);
    } catch (err) {
      toast.error(err?.message, {
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const filteredCourses = useMemo(() => {
    if (tag === Tags.All) return courses;
    return courses.filter((course) => course.tags.includes(tag));
  }, [courses, tag]);

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="home">
      <div className="course-section">
        <Category setTag={setTag} activeTag={tag} />
        <div className="course-section--cards">
          {isLoading
            ? [...Array(6)].map((e, i) => <Skeleton height={210} />)
            : filteredCourses.map((course: ICourse) => (
                <Card key={course.id} {...course} />
              ))}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};
