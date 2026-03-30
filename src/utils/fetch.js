let baseUrl, username, password;
baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
username = process.env.NEXT_PUBLIC_WOO_KEY;
password = process.env.NEXT_PUBLIC_WOO_SECRET;

const fetchWrapper = (endPoint, options) =>
  fetch(baseUrl + endPoint, {
    headers: { Authorization: !username ? "" : "Basic " + btoa(`${username}:${password}`) },
    ...options,
  }).then((response) =>
    response.json().then((data) => {
      if (!response.ok) {
        const err = new Error(`Status: ${response.status}`);
        err.name = "Fetch Error";
        err.response = { ok: response.ok, status: response.status, data };
        throw err;
      }

      return {
        data,
        totalPages: response.headers.get("x-wp-totalpages"),
        totalItems: response.headers.get("x-wp-total"),
      };
    }),
  );

const API = {
  get: fetchWrapper,
  post: (endPoint, payload, options) => {
    return fetchWrapper(endPoint, {
      method: "POST",
      body: JSON.stringify(payload),
      ...options,
    });
  },
};

export default API;
