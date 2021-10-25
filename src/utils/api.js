const formDataToString = (data = new FormData()) => {
  let res = "";
  for (let [k, v] of data.entries()) res += k + "=" + v + "&";
  return res.slice(0, -1);
};

// convert from object to URLSearchParams
export const PrepareDataToFetch = (datas = {}) => {
  const data = new FormData();
  for (let [k, v] of Object.entries(datas)) data.append(k, v);
  return data;
};

/**
 * use fetching by both method
 * @param {string} action - where to send req
 * @param {object} data - which data send in object
 * @param {string} method - method req
 * @returns
 */
export const Fetching = async (action, data = {}, method = "POST") => {
  if (action === undefined) return { err: "action undefined" };
  data = PrepareDataToFetch(data);

  const fetchOption = { method: method, mode: "cors", credentials: "include" };
  if (method === "GET") action += "?" + encodeURI(formDataToString(data));
  else fetchOption["body"] = data;

  return await fetch(action, fetchOption)
    .then((resp) => {
      if (resp.status !== 200) return { err: "сервис не доступен" };
      return resp.json();
    })
    .catch((err) => Object.assign({}, { err: err }));
};
