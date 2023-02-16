const base_url_api = process.env.REACT_APP_BASE_URL_API;
const token = sessionStorage.getItem("ssid");

const auth = {
  login: (body) => {
    try {
      const data = fetch(`${base_url_api}/api/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
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

  logout: () => {
    try {
      const data = fetch(`${base_url_api}/api/auth/logout`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (e) {
      console.log({ e });
    }
  },

  me: () => {
    try {
      const data = fetch(`${base_url_api}/api/auth/me`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json());

      return data;
    } catch (e) {
      console.log({ e });
    }
  },

  register: (body) => {
    try {
      const data = fetch(`${base_url_api}/api/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .catch((e) => console.log(e));

      return data;
    } catch (e) {
      console.log({ e });
    }
  },
};

export default auth;
