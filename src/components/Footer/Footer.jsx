import { Link } from "react-router";
import Banner from "../../assets/website/footer-pattern.jpg";
import FooterLogo from "../../assets/logo.png";

const BannerImg = {
  backgroundColor: "#111",
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
};

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/page/about" },
  { title: "Contact", link: "/page/contact" },
  { title: "Blog", link: "/page/blog" },
];

const CustomerLinks = [
  { title: "Shipping & Returns", link: "/page/shipping" },
  { title: "FAQs", link: "/page/faq" },
  { title: "Privacy Policy", link: "/page/privacy" },
  { title: "Terms & Conditions", link: "/page/terms" },
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
          <Link to={item.link}>{item.title}</Link>
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
            <h1 className="text-2xl lg:text-3xl font-bold mb-3 flex items-center gap-3">
              <img src={FooterLogo} alt="Shopsy logo" className="max-w-12.5" />
              Shopsy
            </h1>
            <p className="text-gray-200 max-w-md">
              Explore sample fashion and lifestyle listings in this storefront
              demo. Shopping and checkout are not connected.
            </p>
          </div>

          {/* Store and customer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:col-span-2 lg:col-span-3 lg:pl-10">
            <LinkColumn title="Important Links" links={FooterLinks} />
            <LinkColumn title="Customer Care" links={CustomerLinks} />

            {/* Demo information */}
            <div className="py-6 px-4 min-w-0 col-span-2 sm:col-span-1">
              <h2 className={headingClass}>Demo Information</h2>
              <p className="mt-6 text-sm text-gray-200 sm:text-base">
                Orders, shipping, payments, and customer support are not connected.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
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