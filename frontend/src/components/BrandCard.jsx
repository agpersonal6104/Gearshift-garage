"use client"
import Link from "next/link"

const BrandMenu = () => {
  const brands = ["BMW", "Mercedes", "Audi", "Porsche", "Ferrari", "Lamborghini"]

  return (
    <nav className="p-4 bg-gray-800">
      <ul className="flex justify-center space-x-6">
        {brands.map((brand) => (
          <li key={brand}>
            <Link href={`/brands/${brand.toLowerCase()}`}>
              <span className="text-white transition-colors duration-200 hover:text-gray-300">{brand}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default BrandMenu

