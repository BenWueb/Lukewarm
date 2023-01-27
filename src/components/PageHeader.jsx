import { Link } from "react-router-dom";
import { useEffect } from "react";
import { StyledButton } from "../components/styled/Button.styled";
import Navbar from "../components/Navbar";

function PageHeader() {
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
        <Navbar />
      </div>
    </div>
  );
}
export default PageHeader;
