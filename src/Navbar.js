import { links, socials } from "./data";
import { FaBars } from "react-icons/fa";

const Navbar = function () {
  return (
    <nav>
      <section className="nav">
        <div className="logo">
          <h3>shokes</h3>
        </div>
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
        <div className="social">
          {socials.map((social) => {
            const { id, url, icon } = social;
            return <article key={id}>{icon}</article>;
          })}
        </div>
        <div className="menu">
          <FaBars />
        </div>
      </section>
    </nav>
  );
};
export default Navbar;
