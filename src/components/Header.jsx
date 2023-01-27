import { Link } from "react-router-dom";
import { useEffect } from "react";
import { StyledButton } from "../components/styled/Button.styled";
import Navbar from "../components/Navbar";

function Main() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden, .hidden-right");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div>
      {/* CTA Section */}

      <div className="main-header-container">
        <Navbar />
        <div className="button-container">
          <Link to="/listings" style={{ textDecoration: "none" }}>
            <StyledButton bg="var(--darker)">Browse Listings</StyledButton>
          </Link>

          <Link to="/events" style={{ textDecoration: "none" }}>
            <StyledButton bg="var(--primary)">Upcoming Events</StyledButton>
          </Link>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          voluptate totam vitae numquam, soluta quae incidunt iusto at illum
          eaque non quo, cum dolores aliquam
        </h1>
      </div>
    </div>
  );
}
export default Main;
