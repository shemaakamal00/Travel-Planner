import axiosInstance from "./axiosConfig";

export const getAllCountries = async () => {
  try {
    const response = await axiosInstance.get(
      "/all?fields=name,flags,capital,region,population,cca3"
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch countries");
  }
};

  export const getCountryByName = async (name) => {
    try {
      const response = await axiosInstance.get(
        `/name/${name}?fullText=true&fields=name,flags,capital,region,population,cca3`
      );
      
      return response.data[0];
    } catch (error) {
      throw new Error("Failed to fetch country details");
    }
    };
