import React, { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthors } from "../redux/actions/authorActions";
import { fetchCourses } from "../redux/actions/courseActions";
import LoadingGif from "../images/Fountain.gif";

const TableRow = ({ children }: { children: JSX.Element[] | ReactNode }) => (
  <tr>{children}</tr>
);
const TableHeading = ({ children }: { children: ReactNode }) => (
  <th>{children}</th>
);
const TableData = ({ children }: { children: JSX.Element | ReactNode }) => (
  <td>{children}</td>
);

const CourseList = ({ courses }: any) => {
  return (
    <>
      {courses.map((course: any) => (
        <TableRow>
          <TableData>
            <a href={course.url}>Start Course</a>
          </TableData>
          <TableData>
            {course.title}
            <button>edit</button>
          </TableData>
          <TableData>{course.authorName}</TableData>
          <TableData>{course.category}</TableData>
          <TableData>
            <button>Delete</button>
          </TableData>
        </TableRow>
      ))}
    </>
  );
};
// interface NewCourses extends Course {
//   authorName: string;
// }

const CoursesPage = () => {
  const {
    courses,
    authors,
    apiCalls: { isLoading, isError },
  } = useSelector((state: any) => state);
  console.log(
    "Selector",
    useSelector((state) => state)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchAuthors());
  }, [dispatch]);

  const newCourses = courses.map((course: any) => {
    return {
      ...course,
      authorName: authors.find((author: any) => author.id === course.authorId)
        ?.name,
    };
  });
  console.log(newCourses);

  if (isError) {
    return <h1>OOps!!! There was an error loading this page!</h1>;
  }

  return (
    <div>
      <header>
        <h1>Courses on Web Development</h1>
        <button>Add New Course</button>
      </header>

      <table>
        <thead>
          <TableRow>
            <TableHeading>Link</TableHeading>
            <TableHeading>Title</TableHeading>
            <TableHeading>Author</TableHeading>
            <TableHeading>Category</TableHeading>
          </TableRow>
        </thead>
        {isLoading ? (
          <TableRow>
            <td colSpan={4}>
              <img src={LoadingGif} alt="loading..." />
              <h1>Loading Courses...</h1>
            </td>
          </TableRow>
        ) : (
          <tbody>
            <CourseList courses={newCourses} />
          </tbody>
        )}
      </table>
    </div>
  );
};

export default CoursesPage;
