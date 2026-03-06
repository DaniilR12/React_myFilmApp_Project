import facebook from "../../assets/icons/icons8-facebook-новый-144.png";
import instagram from "../../assets/icons/icons8-instagram-144.png";
import youtube from "../../assets/icons/icons8-youtube-144.png";
import linkedin from "../../assets/icons/icons8-линкедин-144.png";

export default function Footer() {
  const socialMediaLinks = [
    { href: "https://www.facebook.com", imgSrc: facebook, alt: "Facebook" },
    { href: "https://www.instagram.com", imgSrc: instagram, alt: "Instagram" },
    { href: "https://www.youtube.com", imgSrc: youtube, alt: "YouTube" },
    { href: "https://www.linkedin.com", imgSrc: linkedin, alt: "LinkedIn" },
  ];

  const footerHrefs = [
    { title: "Main", links: ["Topic", "Topic", "Topic"] },
    { title: "FAQ", links: ["Topic", "Topic", "Topic"] },
    { title: "Reports", links: ["Topic", "Topic", "Topic"] },
  ];

  return (
    <>
      <footer>
        <div className="footer__padding">
          <div className="site__info">
            <p>REACT CINEMA</p>
            <div>
              {socialMediaLinks.map((link, index) => {
                return (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    <img src={link.imgSrc} alt={link.alt} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="footer__hrefs">
            {footerHrefs.map((items, index) => {
              return (
                <div key={index}>
                  <p>{items.title}</p>
                  {items.links.map((link, indexLink) => {
                    return <p key={indexLink}>{link}</p>;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
}
