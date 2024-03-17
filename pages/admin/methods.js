export const postMethods = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log("Data successfully sent to the server!");
      return response.json();
    } else {
      console.error("Error sending data to the server.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const getList = async (url) => {
  try {
    const data = await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
    return { data };
  } catch (error) {
    return error;
  }
};
