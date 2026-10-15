import Banner from "../../assets/website/footer-pattern.jpg";
import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";

const BannerImg = {
  backgroundColor: "#111",
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
};

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const CustomerLinks = [
  { title: "Shipping & Returns", link: "/#shipping" },
  { title: "FAQs", link: "/#faq" },
  { title: "Privacy Policy", link: "/#privacy" },
  { title: "Terms & Conditions", link: "/#terms" },
];

// Replace with your real profile URLs
const SocialLinks = [
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/" },
];

const headingClass = "text-xl lg:text-2xl font-bold mb-3 text-left";

const LinkColumn = ({ title, links }) => (
  <div className="py-6 px-4 min-w-0">
    <h2 className={headingClass}>{title}</h2>
    <ul className="flex flex-col gap-3">
      {links.map((item) => (
        <li
          className="cursor-pointer hover:text-secondary hover:translate-x-1 duration-300 text-gray-200"
          key={item.title}
        >
          <a href={item.link}>{item.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer style={BannerImg} className="text-white">
      <div className="container">
        <div
          data-aos="zoom-in"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-5"
        >
          {/* company details */}
          <div className="py-6 px-4 md:col-span-2 lg:col-span-1">
            {/* cspell: disable-next-line */}
            <h1 className="text-2xl lg:text-3xl font-bold mb-3 flex items-center gap-3">
              <img src={FooterLogo} alt="Shopsy logo" className="max-w-12.5" />
              Shopsy
            </h1>
            <p className="text-gray-200 max-w-md">
              Your ultimate destination for trendy fashion, everyday essentials,
              and premium lifestyle products. Enjoy seamless shopping with fast
              shipping and secure checkout.
            </p>
          </div>

          {/* Links + social */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:col-span-2 lg:col-span-3 lg:pl-10">
            <LinkColumn title="Important Links" links={FooterLinks} />
            <LinkColumn title="Customer Care" links={CustomerLinks} />

            {/* Social + contact */}
            <div className="py-6 px-4 min-w-0 col-span-2 sm:col-span-1">
              <h2 className={headingClass}>Follow Us</h2>
              <div className="flex items-center gap-3">
                {SocialLinks.map(({ name, icon: Icon, link }) => (
                  <a
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="hover:text-secondary hover:-translate-y-1 duration-300"
                  >
                    <Icon className="text-3xl" />
                  </a>
                ))}
              </div>

              <div className="mt-6 text-gray-200 text-sm sm:text-base">
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="shrink-0" />
                  <p>New York, USA</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt className="shrink-0" />
                  <a
                    href="tel:+12125550134"
                    className="hover:text-secondary duration-300"
                  >
                    +1 (212) 555-0134
                  </a>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaEnvelope className="shrink-0" />
                  <a
                    href="mailto:support@shopsy.com"
                    className="hover:text-secondary duration-300 break-all"
                  >
                    support@shopsy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright: sits under the links, above the skyline */}
        <div className="mx-4 mt-6 border-t border-white/20 pt-4 pb-32 sm:pb-40 lg:pb-44">
          <p className="text-center text-sm text-gray-300">
            © {new Date().getFullYear()} Shopsy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;