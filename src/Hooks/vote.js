const base_url_api = process.env.REACT_APP_BASE_URL_API;
const token = sessionStorage.getItem("ssid");

const votes = {
  store: async (body) => {
    try {
      let data = await fetch(`${base_url_api}/api/vote`, {
        method: "post",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("ssid")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });
      data = data.json();

      return data;
    } catch (e) {
      console.log({ e });
    }
  },
};

export default votes;
