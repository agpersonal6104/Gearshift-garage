"use client"

import { useRef } from "react"
import BrandMenu from "@/components/BrandMenu"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"

const carBrands = [
  { id: 1, name: "BMW", image: "/placeholder.svg?height=200&width=300" },
  { id: 2, name: "Mercedes", image: "/placeholder.svg?height=200&width=300" },
  { id: 3, name: "Audi", image: "/placeholder.svg?height=200&width=300" },
  { id: 4, name: "Porsche", image: "/placeholder.svg?height=200&width=300" },
  { id: 5, name: "Ferrari", image: "/placeholder.svg?height=200&width=300" },
  { id: 6, name: "Lamborghini", image: "/placeholder.svg?height=200&width=300" },
]

const categories = [
  { title: "1-0-1", description: "SMALL DESCRIPTION ON 1-0-1 MODELS.", image: "Ferrari250GTO.jpg" },
  { title: "CLASSIC", description: "SMALL DESCRIPTION ON CLASSIC MODELS.", image: "Ferrari250GTO.jpg" },
  {
    title: "MOST EXPENSIVE",
    description: "SMALL DESCRIPTION ON THE MOST EXPENSIVE MODELS.",
    image: "RollsRoyceLaRoseNoireDroptail.jpg",
  },
  { title: "FASTEST", description: "SMALL DESCRIPTION ON FASTEST MODELS.", image: "2021-Koenigsegg-Jesko-Absolut.jpg" },
]

const Home = () => {
  const sliderRef = useRef(null)

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex flex-col items-center gap-0 m-0">
      <div className="relative w-full h-[92vh]">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              src="Homevideo.mp4"
              id="backgroundHome"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="absolute top-[70vh] left-[10vh]" id="homeContent">
          <h1 className="text-5xl italic font-bold text-white drop-shadow-lg">Gearshift Garages</h1>
        </div>
      </div>

      <div className="w-full m-0 mx-auto">
        <BrandMenu />
      </div>

      {/* Car Slider Section */}
      <section className="w-full py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-white">Featured Brands</h2>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 z-10 text-white -translate-y-1/2 top-1/2 bg-white/10 hover:bg-white/20"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div
              ref={sliderRef}
              className="flex gap-6 pb-4 overflow-x-auto scroll-smooth hide-scrollbar"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {carBrands.map((brand) => (
                <Card
                  key={brand.id}
                  className="flex-none w-[300px] overflow-hidden transition-all duration-300 transform hover:scale-105 bg-gray-800 hover:shadow-xl"
                >
                  <CardHeader className="p-0">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={brand.image || "/placeholder.svg"}
                        alt={`${brand.name} vehicles`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-xl font-semibold text-white">{brand.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-400">View latest models</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 z-10 text-white -translate-y-1/2 top-1/2 bg-white/10 hover:bg-white/20"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full bg-black">
        <div className="container px-4 py-16 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-left text-white">CATEGORIES</h2>

          {categories.map((category, index) => (
            <div key={category.title} className="mb-16">
              <Card className="overflow-hidden bg-gray-900">
                <CardContent className="p-0">
                  <div
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
                  >
                    <div className="w-full md:w-1/3">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 ease-in-out hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="w-full p-8 md:w-2/3">
                      <CardTitle
                        className={`mb-4 text-4xl font-bold text-white underline ${index % 2 === 0 ? "text-left" : "text-right"}`}
                      >
                        {category.title}
                      </CardTitle>
                      <CardDescription
                        className={`text-2xl italic text-gray-300 ${index % 2 === 0 ? "text-left" : "text-right"}`}
                      >
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home;

