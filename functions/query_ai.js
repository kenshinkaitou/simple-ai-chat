export default async function queryAi(query) {
  const core_url = process.env.CORE_URL;
  const response = await fetch("http://" + core_url + "/query?" + new URLSearchParams({
      input: query,
    })
  , {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
  });

  const data = await response.json();
  return data.result;
}
