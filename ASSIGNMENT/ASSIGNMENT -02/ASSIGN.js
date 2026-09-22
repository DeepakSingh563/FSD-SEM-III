// CRUD operations on JSON file using Node.js

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/create") {
    const initialData = [{ name: "DEEPAK", age: 30 }];
    fs.writeFile("data.json", JSON.stringify(initialData, null, 2), (err) => {
      if (err) {
        res.end("Error writing file");
      } else {
        res.end("File created successfully");
      }
    });
  } else if (url === "/read") {
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
        res.end("Error reading file");
      } else {
        res.end(data);
      }
    });
  } else if (url.startsWith("/update/")) {
    const index = parseInt(url.split("/")[2]);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const updatedData = JSON.parse(body);

      const newUserData = {
        name: updatedData.name,
        age: updatedData.age,
      };

      res.end(
        fs.writeFile(
          "data.json",
          JSON.stringify(newUserData, null, 2),
          (err) => {
            if (err) {
              res.end("Error writing file");
            } else {
              res.end("File updated successfully");
            }
          },
        ),
      );
    });
  } else if (url === "/delete") {
    fs.unlink("data.json", (err) => {
      if (err) {
        res.end("Error deleting file");
      } else {
        res.end("File deleted successfully");
      }
    });
  } else {
    res.end("Route not found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
