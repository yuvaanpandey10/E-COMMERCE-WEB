

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating:5,
    author: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating:4.5,
    author: "Red",
    aosDelay: "200",
  },
    {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating:4.7,
    author: "Brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-shirt",
    rating:4.4,
    author: "Yellow",
    aosDelay: "800",
  },
    {
    id: 5,
    img: Img5,
    title: "Fashion T-shirt",
    rating:4.6,
    author: "Pink",
    aosDelay: "800",
  }
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-150 mx-auto">
          <p className="text-sm text-secondary">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400">
            Discover our most popular products
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center">

            {/* card section */}
            
            {
                ProductsData.map((data) => {
                    return (
                        <div className="w-48 h-72 bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={data.img} alt={data.title} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{data.title}</h3>
                                <p className="text-gray-600">{data.author}</p>
                                <p className="text-gray-800 font-bold mt-2">${data.price}</p>
                            </div>
                        </div>
                    )
                }
            }
        </div>
      </div>
    </div>
  );
};

export default Products;
