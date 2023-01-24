import { Link } from "react-router-dom";
import { useEffect } from "react";
import ListingsSlider from "../components/ListingsSlider";
import HomepageSection from "../components/HomepageSection";
import HomepageSectionReverse from "../components/HomepageSectionReverse";
import { StyledButton } from "../components/styled/Button.styled";
import Event from "../components/Event";

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

      <div className="header-container">
        <div className="cta-container">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            voluptate totam vitae numquam, soluta quae incidunt iusto at illum
            eaque non quo, cum dolores aliquam
          </h1>
          <div className="button-container">
            <div className="button-holder">
              <Link to="/listings" style={{ textDecoration: "none" }}>
                <StyledButton bg="var(--darker)">Browse Listings</StyledButton>
              </Link>
            </div>
            <div className="button-holder">
              <Link to="/events" style={{ textDecoration: "none" }}>
                <StyledButton bg="var(--primary)">Upcoming Events</StyledButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ListingsSlider />
      <div className="hidden-right">
        <HomepageSection />
      </div>
      <div className="hidden">
        <HomepageSectionReverse />
      </div>
      <div className="hidden-right">
        <div className="section-header">
          <h1>Upcoming Events</h1>
        </div>
        <Event />
      </div>
    </div>
  );
}
export default Main;
