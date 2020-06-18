
export const fetchAmiiboList = async () => {
  const response = await fetch(`https://www.amiiboapi.com/api/amiibo/`);
  if (response.ok) {
    let data = await response.json();
    data = data.amiibo.splice(0, 100);
    return data;
  } else {
    return false;
  }
}