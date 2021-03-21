import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { courses, authors } from "./mockData.js";


// get the directory path
const data = JSON.stringify({ courses, authors });
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filepath = path.join(__dirname, 'db.json');


fs.writeFile(filepath, data, (err) => {
  err ? console.log(err) : console.log("Database created successfully");
});
