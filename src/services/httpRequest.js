export const httpRequest = {
  post: ({ apiUrl, endpoint, values }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${apiUrl}/${endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          ...(values && { body: JSON.stringify(values) }),
          credentials: "same-origin",
        });
        const data = await response.json();
        resolve({
          data,
          status: response.status,
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  },
};
