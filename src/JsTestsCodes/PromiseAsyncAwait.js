import axios from "axios";

//How Create a Promice
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(46);
    }, 1);
  });
}

// Handle Promise with
const fetchData = () => {
  axios
    .get("https://api.example.com/data")
    .then((response) => {
      console.log("Data fetched:", response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

fetchData();

const fetchDataAsyncAwait = async () => {
  try {
    const response = await axios.get("https://api.example.com/data");
    console.log("Data fetched:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchDataAsyncAwait();
