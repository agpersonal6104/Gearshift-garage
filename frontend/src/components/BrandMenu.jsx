// import React, { useRef } from 'react';
// import { brands } from '../constants'; // Import the brands array from constants.js
// import '../app/globals.css';
// const BrandCard = ({ name, icon }) => (
//   <div className="w-[500px] h-[780px] flex-shrink-0 m-4 shadow-lg rounded-lg items-center justify-center text-center hover:shadow-2xl transition-transform duration-300 ease-in-out overflow-hidden">
//     <img src={icon} alt={name} className="w-[100%] h-[100%] object-cover rounded-md transition-transform duration-500 ease-in-out tranform hover:scale-110" />
//   </div>
// );

// const BrandMenu = () => {
//   const scrollRef = useRef(null);
//   const handleScroll = (d) => {
//     if (scrollRef.current) {
//       const scrollAmount = d === 'left' ? -400 : 400;
//       scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
//     }
//   }
//   return (
//     <>
//       <div className='mt-4 brand-menu'>
//         <div className='relative top-0 left-0 w-full p-4 text-center text-white'>
//           <h1 className='text-5xl font-bold font-montserrat'>EXPLORE THE BRANDS</h1>
//         </div>
//         <div className="flex items-center w-full p-8">
//           <button onClick={() => handleScroll('left')} className="mr-4 text-white h-[100%] rounded-md p-2 hover:bg-[rgb(0,0,0,0.5)] transition">←</button>
//           <div ref={scrollRef} className='flex overflow-x-auto scrollbar-hide w-[100%]'>
//             {brands.map((brand, index) => (
//               <BrandCard key={index} name={brand.name} icon={brand.icon} />
//             ))}
//           </div>
//           <button onClick={() => handleScroll('right')} className="ml-4 text-white h-[100%] rounded-md p-2 hover:bg-[rgb(0,0,0,0.5)] transition">→</button>

//         </div>
//       </div>
//     </>
//   );
// }

// export default BrandMenu;

"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

constant Brand {
  id: number;
  name: string;
  logo: string;
  models: string[];
}

const brands: Brand[] = [
  {
    id: 1,
    name: "BMW",
    logo: "/placeholder.svg?height=60&width=60",
    models: ["M3", "M4", "M5"],
  },
  {
    id: 2,
    name: "Mercedes",
    logo: "/placeholder.svg?height=60&width=60",
    models: ["AMG GT", "C63", "E63"],
  },
  {
    id: 3,
    name: "Audi",
    logo: "/placeholder.svg?height=60&width=60",
    models: ["RS6", "RS7", "R8"],
  },
  {
    id: 4,
    name: "Porsche",
    logo: "/placeholder.svg?height=60&width=60",
    models: ["911", "Cayman", "Taycan"],
  },
];

export function BrandMenu() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [selectedModel, setSelectedModel] = React.useState<string | null>(null);

  const nextBrand = () => {
    setActiveIndex((prev) => (prev + 1) % brands.length);
    setSelectedModel(null);
  };

  const prevBrand = () => {
    setActiveIndex((prev) => (prev - 1 + brands.length) % brands.length);
    setSelectedModel(null);
  };

  return (
    <div className="w-full max-w-6xl px-4 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Explore Brands</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={prevBrand}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextBrand}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <Tabs defaultValue="brands" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="brands">Brands</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="compare">Compare</TabsTrigger>
        </TabsList>
        <TabsContent value="brands" className="mt-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {brands.map((brand, index) => (
              <Card
                key={brand.id}
                className={`transition-all hover:shadow-lg ${index === activeIndex ? "ring-2 ring-primary" : ""}`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-4">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={`${brand.name} logo`}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <h3 className="text-lg font-semibold">{brand.name}</h3>
                    <div className="w-full">
                      {brand.models.map((model) => (
                        <Button
                          key={model}
                          variant={selectedModel === model ? "default" : "ghost"}
                          className="justify-start w-full mb-2"
                          onClick={() => setSelectedModel(model)}
                        >
                          {model}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="images">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Car image"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="compare">
          <div className="grid place-items-center h-[400px]">
            <p className="text-muted-foreground">Compare feature coming soon...</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default BrandMenu;