export interface Course {
  id: number;
  title: string;
  url: string;
  authorId: number;
  category: string;
};
export type Author = {
  id: number,
  name: string
}
export type State = {
  courses: Course[];
  authors: Author[];
};
export const initialState: State = {
  courses: [
      {
        id: 1,
        title: "Securing React Apps with Auth0",
        url: "react-auth0-authentication-security",
        authorId: 1,
        category: "JavaScript"
      },
      {
        id: 2,
        title: "React: The Big Picture",
        url: "react-big-picture",
        authorId: 2,
        category: "JavaScript"
      },
      {
        id: 3,
        title: "Creating Reusable React Components",
        url: "react-creating-reusable-components",
        authorId: 1,
        category: "JavaScript"
      },
      {
        id: 4,
        title: "Building a JavaScript Development Environment",
        url: "javascript-development-environment",
        authorId: 3,
        category: "JavaScript"
      },
      {
        id: 5,
        title: "Building Applications with React and Redux",
        url: "react-redux-react-router-es6",
        authorId: 2,
        category: "JavaScript"
      },
      {
        id: 6,
        title: "Building Applications in React and Flux",
        url: "react-flux-building-applications",
        authorId: 3,
        category: "JavaScript"
      },
      {
        id: 7,
        title: "Clean Code: Writing Code for Humans",
        url: "writing-clean-code-humans",
        authorId: 1,
        category: "Software Practices"
      },
      {
        id: 8,
        title: "Architecting Applications for the Real World",
        url: "architecting-applications-dotnet",
        authorId: 1,
        category: "Software Architecture"
      },
      {
        id: 9,
        title: "Becoming an Outlier: Reprogramming the Developer Mind",
        url: "career-reboot-for-developer-mind",
        authorId: 3,
        category: "Career"
      },
      {
        id: 10,
        title: "Web Component Fundamentals",
        url: "web-components-shadow-dom",
        authorId: 2,
        category: "HTML5"
      }
    ],
  authors: [  { id: 1, name: "Cory House" },
    { id: 2, name: "Scott Allen" },
    { id: 3, name: "Dan Wahlin" }],
};