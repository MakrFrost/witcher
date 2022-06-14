const getData = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  } else {
    throw `Ты ошибся, дружок, ${response.status}`;
  }
};

export default getData;
