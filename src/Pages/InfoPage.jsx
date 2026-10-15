import { useEffect } from "react";
import { Link, useParams } from "react-router";
import NotFound from "./NotFound";

const pages = {
  about: { title: "About Us", body: "Shopsy is your destination for trendy fashion and everyday essentials. Replace this text with your story." },
  contact: { title: "Contact Us", body: "Email support@shopsy.com or call +1 (212) 555-0134. We reply within one business day." },
  blog: { title: "Blog", body: "Style guides and news are coming soon." },
  shipping: { title: "Shipping & Returns", body: "Add your delivery times, shipping costs and return policy here." },
  faq: { title: "FAQs", body: "Add your frequently asked questions here." },
  privacy: { title: "Privacy Policy", body: "Add your privacy policy here." },
  terms: { title: "Terms & Conditions", body: "Add your terms and conditions here." },
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