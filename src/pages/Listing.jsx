import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import ListingSlider from "../components/ListingSlider";
import Spinner from "../components/Spinner";
import { MdShare } from "react-icons/md";
import { toast } from "react-toastify";

function Listing() {
  const [listing, setListing] = useState({});
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [shareLinkCopied, setShareLinkCopied] = useState(false);

  const params = useParams();

  const { category, description, imgUrls, price, subtitle, title } = listing;

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, "testlistings", params.listingId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setListing(docSnap.data());
        setLoading(false);
      } else {
        console.log("No such document");
      }
    };
    fetchListing();
  }, [params.listingId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="listing-container">
        <div className="listing-img-container">
          <ListingSlider imgUrl={imgUrls} />
        </div>
        <div className="listing-content-container">
          <MdShare
            className="listing-share"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setShareLinkCopied(true);
              toast.success("Link Copied!", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
              setTimeout(() => {
                setShareLinkCopied(false);
              }, 2000);
            }}
          />

          <div className="listing-header">
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
          <div className="listing-details-container">
            <div className="listing-name-container">
              <p className="info-name">Category:</p>
              <p className="info-name">Price:</p>
              <p className="info-name">Description:</p>
            </div>
            <div className="listing-info-container">
              <p>{category}</p>
              <p>$ {price}</p>
              <p>{description}</p>
            </div>
          </div>
          <div className="listing-details-footer">
            <p className="purchase">Interested in purchasing? Click here</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Listing;
