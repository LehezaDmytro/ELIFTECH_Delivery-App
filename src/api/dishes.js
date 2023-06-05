import axios from "axios";

const baseURL = "https://eliftech-delivery-app-backend.onrender.com/";

const dishesInstance = axios.create({
  baseURL,
});

export const getDishes = async (shop = "Mc Donald") => {
  try {
    const { data } = await dishesInstance.get(`/dishes?shop=${shop}`);
    return data;
  } catch (error) {
    throw error;
  }
};
