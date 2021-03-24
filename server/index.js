import express from "express";
// import cors from "cors";
import fs from "fs";
import path from "path";
import bodyParser from 'body-parser';
import { fileURLToPath } from "url";


import { courses, authors } from "./data/mockData.js";

const app = express();

//parse json 
// app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// app.use(bodyParser.urlencoded({extended: false}));

const handleSingleRequest = (req, res, arrData) => {
  const { id } = req.params;
  const singleItem = arrData.find((item) => item.id === parseInt(id));
  if (!singleItem)
    return res
      .status(404)
      .json({ error: `Could not find resource with the id of ${id}` });
  res.status(200).json(singleItem);
}

app.get("/api/courses", (req, res) => {
  res.status(200).json(courses);
});

app.get("/api/courses/:id", (req, res) => {
 handleSingleRequest(req, res, courses);
});
// {
//   id: 1,
//   title: "Securing React Apps with Auth0",
//   slug: "react-auth0-authentication-security",
//   authorId: 1,
//   category: "JavaScript"
// },


// Post requests

app.post('/api/courses', (req, res) => {
  const newCourse = {...req.body, id: courses.length + 1, authorId: parseInt(req.body.authorId)}
  const newCourses = [...courses, newCourse];
  console.log(req.body);
  res.status(201).json(req.body);
})

app.get("/api/authors", (req, res) => {
  res.status(200).json(authors);
});

app.get("/api/authors/:id", (req, res) => {
  handleSingleRequest(req, res, authors);
})

app.get("*", (req, res) => {
  res.status(404).send("rewsource not found");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
