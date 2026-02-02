const GetDataFromLocalStorage = () => {
  const data = localStorage.getItem("booksId");
  if (data) {
    const parsedData = JSON.parse(data);
    return parsedData;
  } else {
    return [];
  }
};
const SetDataToLocalStorage = (id) => {
  const existingData = GetDataFromLocalStorage();
  if (existingData.includes(id)) {
    alert("Book already marked as read");
    return;
  }
  existingData.push(id);
  const dataString = JSON.stringify(existingData);
  localStorage.setItem("booksId", dataString);
};
export { SetDataToLocalStorage };
