import { FaGithub, FaLinkedin, FaLocationArrow, FaMobileAlt, FaSnapchat, FaTwitter, FaWhatsapp } from "react-icons/fa";

const FooterLinks = [
  { id: 1, title: "Home", link: "/#" },
  {
    id: 2,
    title: "About",
    link: "/#about",
  },
  {
    id: 3,
    title: "Contact",
    link: "/#contact",
  },
  {
    id: 4,
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
        <div data-aos="fade" className="container">
          <div className="grid md:grid-cols-3 py-4">
            {/* Details */}
            <div className="py-8 px-4">
              <h1 className="sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                Metaverse
              </h1>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat dolor illum a aut iste expedita.
              </p>
              <br />

              {/* contact */}
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Jeddah, Saudi Arabia</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+966 12 345 6789</p>
                </div>
              </div>

              {/* social handle */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaWhatsapp className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaGithub className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaTwitter className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaSnapchat className="text-2xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3 ">Quick Links</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className="hover:translate-x-1 duration-300 "
                      >
                        <a
                          href={link.link}
                          className="cursor-pointer hover:text-primary"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3 ">Quick Links</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li key={link.id} className="hover:translate-x-1 duration-300">
                        <a href={link.link} className="cursor-pointer hover:text-primary">
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3 ">Location</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li key={link.id} className="hover:translate-x-1 duration-300">
                        <a href={link.link} className="cursor-pointer hover:text-primary">
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
