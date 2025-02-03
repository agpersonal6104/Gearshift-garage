'use client';
import BrandMenu from '@/components/BrandMenu';
import React from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const carBrands = [
  { id: 1, name: "BMW", image: "/placeholder.svg?height=200&width=300" },
  { id: 2, name: "Mercedes", image: "/placeholder.svg?height=200&width=300" },
  { id: 3, name: "Audi", image: "/placeholder.svg?height=200&width=300" },
  { id: 4, name: "Porsche", image: "/placeholder.svg?height=200&width=300" },
  { id: 5, name: "Ferrari", image: "/placeholder.svg?height=200&width=300" },
  { id: 6, name: "Lamborghini", image: "/placeholder.svg?height=200&width=300" },
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
    <div className='flex flex-col items-center gap-0 m-0'>
      <div className='relative w-full h-[92vh]'>
        <div className='relative w-full h-full'>
          <div className='absolute inset-0 w-full h-full'>
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              src="Homevideo.mp4" 
              id='backgroundHome' 
              className='absolute inset-0 object-cover w-full h-full'
            ></video>
          </div>
        </div>

        <div className='absolute top-[70vh] left-[10vh]' id='homeContent'>
          <h1 className='text-3xl italic font-bold text-white'>Gearshift Garages</h1>
        </div>
      </div>

      <div className='w-full m-0 mx-auto'>
        <BrandMenu />
      </div>

      {/* Car Slider Section */}
      <div className="relative w-full py-12 bg-gray-900">
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
              className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {carBrands.map((brand) => (
                <Card
                  key={brand.id}
                  className="flex-none w-[300px] overflow-hidden hover:shadow-lg transition-shadow bg-gray-800"
                >
                  <CardContent className="p-0">
                    <Link href={`/brands/${brand.name.toLowerCase()}`}>
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={brand.image || "/placeholder.svg"}
                          alt={`${brand.name} vehicles`}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white">{brand.name}</h3>
                        <p className="text-sm text-gray-400">View latest models</p>
                      </div>
                    </Link>
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
      </div>

      <div className='w-full m-0'>
        
        <h2 className="px-4 text-4xl font-bold text-left text-white">CATEGORIES</h2>
      
        <div className='w-full'>
          
          <div className='flex h-[45vh] gap-6'>
            
          <div className='items-center justify-center flex-shrink-0 w-1/3 m-4 mx-auto my-auto overflow-hidden text-center transition-transform duration-300 ease-in-out shadow-lg rounded-xl hover:shadow-2xl'>
              <img src="Ferrari250GTO.jpg" alt="Ferrari250GTO" className='object-cover transition-transform duration-500 ease-in-out rounded-xl tranform hover:scale-110' />
            </div>
            
            <div className='w-2/3 px-6 border-l-2 border-white'>
            <h2 className='pt-4 pb-16 text-5xl text-white underline'>1-0-1</h2>
            <p className='py-8 text-5xl italic text-white'>SMALL DESCRIPTION ON 1-0-1 MODELS.</p>
            </div>
            
          </div>
          
        </div>
        
        <div className='w-full'>
          
          <div className='flex h-[45vh] gap-6'>
            
            <div className='w-2/3 px-6 border-r-2 border-white'>
            <h2 className='pt-4 pb-16 text-5xl text-right text-white underline'>CLASSIC</h2>
            <p className='py-8 text-5xl italic text-right text-white'>SMALL DESCRIPTION ON CLASSIC MODELS.</p>
            </div>
            
            <div className='items-center justify-center flex-shrink-0 w-1/3 m-4 mx-auto my-auto overflow-hidden text-center transition-transform duration-300 ease-in-out shadow-lg rounded-xl hover:shadow-2xl'>
              <img src="Ferrari250GTO.jpg" alt="Ferrari250GTO" className='object-cover transition-transform duration-500 ease-in-out rounded-xl tranform hover:scale-110' />
            </div>
            
          </div>
          
        </div>

        <div className='w-full'>
          
          <div className='flex h-[45vh] gap-6'>
            
          <div className='items-center justify-center flex-shrink-0 w-1/3 m-4 mx-auto my-auto overflow-hidden text-center transition-transform duration-300 ease-in-out shadow-lg rounded-xl hover:shadow-2xl'>
              <img src="RollsRoyceLaRoseNoireDroptail.jpg" alt="RollsRoyceLaRoseNoireDroptail" className='object-cover transition-transform duration-500 ease-in-out rounded-xl tranform hover:scale-110' />
            </div>
            
            <div className='w-2/3 px-6 border-l-2 border-white'>
            <h2 className='pt-4 pb-16 text-5xl text-white underline'>MOST EXPENSIVE</h2>
            <p className='py-8 text-5xl italic text-white'>SMALL DESCRIPTION ON THE MOST 
            EXPENSIVE MODELS.</p>
            </div>
            
          </div>
          
        </div>

        <div className='w-full'>
          
          <div className='flex h-[45vh] gap-6'>
            
            <div className='w-2/3 px-6 border-r-2 border-white'>
            <h2 className='pt-4 pb-16 text-5xl text-right text-white underline'>FASTEST</h2>
            <p className='py-8 text-5xl italic text-right text-white'>SMALL DESCRIPTION ON FASTEST MODELS.</p>
            </div>
            
            <div className='items-center justify-center flex-shrink-0 w-1/3 m-4 mx-auto my-auto overflow-hidden text-center transition-transform duration-300 ease-in-out shadow-lg rounded-xl hover:shadow-2xl'>
              <img src="2021-Koenigsegg-Jesko-Absolut.jpg" alt="KoenigseggJeskoAbsolut" className='object-cover transition-transform duration-500 ease-in-out rounded-xl tranform hover:scale-110' />
            </div>
            
          </div>
          
        </div>

      </div>
      
    </div>
  )
}

export default Home;