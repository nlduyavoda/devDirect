const path = require("path");
const fs = require("fs");

const baseDirectory = process.env.BASE_DIRECTORY || "/";
const generateFilePath = () => {
  return path.join(baseDirectory, `data.json`);
};

let items = [
  { id: 1, type: "button", label: "Button", text: "add", alerMess: "hello !" },
  {
    id: 2,
    type: "paragraph",
    label: "Paragraph",
    content: "this is a paragraph ! =))",
  },
];

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await readData();
      const items = data || [];
      res.status(200).json(items);
    } catch (error) {
      console.error("Error reading data:", error);
      throw error;
    }
  } else if (req.method === "POST") {
    const payload = req.body;
    await writeData(payload);
    res.status(201).json(payload);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    items = items.filter((item) => item.id !== id);
    res.status(200).end();
  }
}

// Function to read data from the JSON file
const readData = () => {
  return new Promise((resolve, reject) => {
    const filePath = generateFilePath();
    console.log("filePath", filePath);
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      try {
        const jsonData = JSON.parse(data);
        resolve(jsonData);
      } catch (error) {
        reject(error);
      }
    });
  });
};

const writeData = (jsonData) => {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(jsonData, null, 2);
    const filePath = generateFilePath();
    fs.writeFile(filePath, data, "utf8", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
};
