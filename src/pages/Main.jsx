import { Link } from "react-router-dom";
import { useEffect } from "react";
import ListingsSlider from "../components/ListingsSlider";
import HomepageSection from "../components/HomepageSection";
import HomepageSectionReverse from "../components/HomepageSectionReverse";
import { StyledButton } from "../components/styled/Button.styled";
import Event from "../components/Event";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

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
      <Header />
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
