const base_url_api = process.env.REACT_APP_BASE_URL_API;
const token = sessionStorage.getItem("ssid");

const polling = {
  store: () => {
    try {
      // fetch.
    } catch (e) {}
  },

  index: () => {
    try {
      const data = fetch(`${base_url_api}/api/polling`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          return res;
        });
      return data;
    } catch (e) {
      console.log({ e });
    }
  },

  show: (id) => {
    try {
      const data = fetch(`${base_url_api}/api/polling/${id}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          return res;
        });

      return data;
    } catch (e) {
      console.log({ e });
    }
  },
};

export default polling;
