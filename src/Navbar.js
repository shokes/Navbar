import { links, socials } from "./data";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = function () {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className="nav">
      <section className="container">
        <div className="logo">
          <h3>shokes</h3>
          <div className="menu" onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </div>
        </div>

        <div
          className={
            showLinks ? "nav-links-container show-link" : "nav-links-container"
          }
        >
          <div className="nav-links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <article className="nav-link" key={id}>
                  {text}
                </article>
              );
            })}
          </div>
        </div>

        <div className="social">
          {socials.map((social) => {
            const { id, url, icon } = social;
            return <article key={id}>{icon}</article>;
          })}
        </div>
      </section>
    </nav>
  );
};
export default Navbar;
