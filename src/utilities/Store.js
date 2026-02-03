import { toast } from "react-toastify";

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
    toast.error("Book already marked as read!");
    return;
  }
  existingData.push(id);
  const dataString = JSON.stringify(existingData);
  localStorage.setItem("booksId", dataString);
  toast.success("Book marked as read!");
};

const GetDataFromLocalStorageWish = () => {
  const data = localStorage.getItem("wishlistBooksId");
  if (data) {
    const parsedData = JSON.parse(data);
    return parsedData;
  } else {
    return [];
  }
};
const SetDataToLocalStorageWish = (id) => {
  const existingData = GetDataFromLocalStorageWish();
  if (existingData.includes(id)) {
    toast.error("Book already marked as wishlist!");
    return;
  }
  existingData.push(id);
  const dataString = JSON.stringify(existingData);
  localStorage.setItem("wishlistBooksId", dataString);
  toast.success("Book added to wishlist!");
};
export {
  SetDataToLocalStorage,
  GetDataFromLocalStorage,
  GetDataFromLocalStorageWish,
  SetDataToLocalStorageWish,
};
