export const httpRequest = {
  post: ({ apiUrl, endpoint, values }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${apiUrl}/${endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-ndjson",
          },
          body: JSON.stringify(values),
        });
        const data = await response.json()
        resolve({
          data,
          response
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  },
};
