import { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";

const ListingsContext = createContext();

export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState();

  let listingsArr = [];

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsSnapshot = await getDocs(collection(db, "testlistings"));

        listingsSnapshot.forEach((listing) => {
          return listingsArr.push({
            id: listing.id,
            data: listing.data(),
          });
        });

        setListings(listingsArr);
        console.log(listingsArr);
      } catch (error) {
        console.log(error);
      }
    };

    fetchListings();
  }, []);

  return (
    <ListingsContext.Provider value={{ listings }}>
      {children}
    </ListingsContext.Provider>
  );
};
export default ListingsContext;
