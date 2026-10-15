import { useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router";
import Products2 from "../components/Products/Products2";
import Subscribe from "../components/Subscribe/Subscribe";
import NotFound from "./NotFound";

const titles = {
  all: "All Products",
  "kids-wear": "Kids Wear",
  "mens-wear": "Mens Wear",
  electronics: "Electronics",
  trending: "Trending Products",
  "best-selling": "Best Selling",
};

const Category = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const title = titles[slug];
  const query = searchParams.get("q") ?? "";

  useEffect(() => {
    if (title) document.title = `${title} | Shopsy`;
  }, [title]);

  if (!title) return <NotFound />;

  return (
    <>
      <div className="bg-secondary/20 py-10">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 dark:text-gray-300">
            <Link to="/" className="hover:text-secondary">Home</Link> / <span>{title}</span>
          </nav>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h1>
        </div>
      </div>
      <Products2 category={slug} query={query} />
      <Subscribe />
    </>
  );
};

export default Category;