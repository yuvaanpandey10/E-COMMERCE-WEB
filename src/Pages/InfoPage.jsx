import { useEffect } from "react";
import { Link, useParams } from "react-router";
import NotFound from "./NotFound";

const pages = {
  about: { title: "About Us", body: "Shopsy is a fashion and lifestyle storefront demo. Product listings are examples; this site does not currently sell or ship products." },
  contact: { title: "Contact Us", body: "Customer-support contact details are not configured for this demo. Orders and payments are not available." },
  blog: { title: "Blog", body: "There are no blog posts yet. Check back later for style guides and news." },
  shipping: { title: "Shipping & Returns", body: "This demo does not accept orders, so no shipping or returns are currently available." },
  faq: { title: "FAQs", body: "Can I place an order? No. Checkout and payment are not connected. Can I create an account? You can create a demo profile, which is stored only in this browser." },
  privacy: { title: "Privacy Policy", body: "This demo stores your theme preference and, if you create a demo profile, your name and email in your browser’s local storage. Guest status is stored for the current browser session. This information is not sent to a server. No password is requested or stored. Newsletter signups and orders are not collected." },
  terms: { title: "Terms & Conditions", body: "This website is a demonstration storefront only. Product listings are examples, and the site does not accept orders, payments, or account registrations on a server." },
};

const InfoPage = () => {
  const { slug } = useParams();
  const page = pages[slug];

  useEffect(() => {
    if (page) document.title = `${page.title} | Shopsy`;
  }, [page]);

  if (!page) return <NotFound />;

  return (
    <div className="container min-h-[60vh] py-14">
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 dark:text-gray-300">
        <Link to="/" className="hover:text-secondary">Home</Link> / <span>{page.title}</span>
      </nav>
      <h1 className="mt-2 mb-6 text-3xl font-bold sm:text-4xl">{page.title}</h1>
      <p className="max-w-2xl leading-relaxed text-gray-600 dark:text-gray-300">{page.body}</p>
    </div>
  );
};

export default InfoPage;