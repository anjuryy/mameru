import Box from "@/Components/Box";
import { Link } from "@inertiajs/react";

/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
    // More products...
  ]

  export default function ProductList({ productLists, userCurrencySetting, filteredData }) {
    // console.log(userCurrencySetting[0]['currency_converters'].symbol);
    // console.log(productLists);

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}

          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            {
                filteredData.length !== 0 && (
                    filteredData.slice(0, 15).map((value, index) => {
                        return (
                            <Box key={value.id} className="bg-white">
                            <div >
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <Link
                                    href={route('product.show', value.id)} >
                                    {
                                        value.images.length > 0 ?
                                        <img
                                            src={value.images[0].filename ? "../images/" + value.images[0].filename : "images/" + value.images[0].filename}
                                            // alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                        :
                                        <img
                                            src={"images/profilePic.jpeg" ? "../images/profilePic.jpeg" : "images/profilePic.jpeg"}
                                            // alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    }

                                </Link>
                                </div>
                                <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                    {/* <a href={product.href}> */}
                                        <span aria-hidden="true" className="inset-0" />
                                        {value.name}
                                    {/* </a> */}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{value.description}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{ userCurrencySetting[0]['currency_converters'].symbol }{Math.floor(parseInt(value.price) / parseInt(userCurrencySetting[0]['currency_converters'].value))}</p>
                                </div>
                            </div>
                            </Box>
                        )
                    })
                )
            }
            {
                filteredData.length === 0 ?
                    productLists.map((product) => (
                    <Box key={product.id} className="bg-white">
                    <div >
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <Link
                            href={route('product.show', product.id)} >
                            {
                                product.images.length > 0 ?
                                <img
                                    src={product.images[0].filename ? "../images/" + product.images[0].filename : "images/" + product.images[0].filename}
                                    // alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                                :
                                <img
                                    src={"images/profilePic.jpeg" ? "../images/profilePic.jpeg" : "images/profilePic.jpeg"}
                                    // alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            }

                        </Link>
                        </div>
                        <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                            {/* <a href={product.href}> */}
                                <span aria-hidden="true" className="inset-0" />
                                {product.name}
                            {/* </a> */}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{ userCurrencySetting[0]['currency_converters'].symbol }{Math.floor(parseInt(product.price) / parseInt(userCurrencySetting[0]['currency_converters'].value))}</p>
                        </div>
                    </div>
                    </Box>
                    ))
                : null
            }
          </div>
        </div>
      </div>
    )
  }
