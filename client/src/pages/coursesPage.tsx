import React, { ReactNode } from "react";
import { DefaultRootState, useDispatch, useSelector } from "react-redux";
import { Author, Course, State } from "../redux/reducers/initialState";

const TableRow = ({ children }: { children: JSX.Element[] }) => (
  <tr>{children}</tr>
);
const TableHeading = ({ children }: { children: ReactNode }) => (
  <th>{children}</th>
);
const TableData = ({ children }: { children: JSX.Element | ReactNode }) => (
  <td>{children}</td>
);

const CourseList = ({courses}: {courses: NewCourses[]}) => {
  return (
    <>
    {courses.map(course => (
       <TableRow>
       <TableData>
         <a href={course.url}>Start Course</a>
       </TableData>
       <TableData>
        {course.title}<button>edit</button>
       </TableData>
       <TableData>{course.authorName}</TableData>
       <TableData>{course.category}</TableData>
       <TableData>
         <button>Delete</button>
       </TableData>
     </TableRow>
    ))}
    </>
  )
}
interface NewCourses extends Course {
  authorName:string;
}

const CoursesPage = () => {
  let {courses, authors} = useSelector((state: State) => state);
  
  const newCourses:NewCourses[] = courses.map((course): NewCourses | any => {
    return {...course, authorName: authors.find((author: Author): boolean => author.id === course.authorId)?.name}
  })
  console.log(newCourses);
  

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
        <tbody>
         <CourseList courses={newCourses} />
        </tbody>
      </table>
    </div>
  );
};

export default CoursesPage;
