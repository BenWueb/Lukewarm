import { useContext } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import ListingsContext from "../context/ListingsContext";

function Listings() {
  const { listings } = useContext(ListingsContext);

  if (!listings) {
    return <Spinner />;
  }

  return (
    <div>
      <header className="page-header-container">
        <h1 className="page-title">Listings</h1>
        <p className="page-description">
          All items here are currently for sale. Contact us for more details.
        </p>
      </header>

      <div className="listings-container">
        {listings.map((listing) => (
          <Card
            title={listing.data.title}
            subtitle={listing.data.subtitle}
            imgUrl={listing.data.imgUrl}
            price={listing.data.price}
            category={listing.data.category}
            description={listing.data.description}
            key={listing.id}
            id={listing.id}
          />
        ))}
      </div>
    </div>
  );
}
export default Listings;
