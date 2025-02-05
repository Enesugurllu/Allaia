import React from 'react';
import Image from 'next/image';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Pri oportere scribentur eu",
      content: "Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....",
      date: "20.11.2017",
      author: "Mark Twain",
      image: "/image/1.png",
    },
    {
      id: 2,
      title: "Duo eius postea suscipit ad",
      content: "Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....",
      date: "20.11.2017",
      author: "Jhon Doe",
      image: "/image/2.png",
    },
    {
      id: 3,
      title: "Elitr mandamus cu has",
      content: "Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....",
      date: "20.11.2017",
      author: "Luca Robinson",
      image: "/image/3.png",
    },
    {
      id: 4,
      title: "Id est adhuc ignota delenit",
      content: "Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....",
      date: "20.11.2017",
      author: "Paula Rodrigez",
      image: "/image/4.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2 text-black">Latest News</h2>
        <p className="text-center text-gray-800 mb-12">Cum doctus civibus efficiantur in imperdiet deterruisset</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((news) => (
            <div key={news.id} className="flex gap-6 group cursor-pointer">
              <div className="relative min-w-[200px] h-[150px]">
                <div className="absolute top-0 left-0 bg-yellow-400 text-white px-4 py-2 z-10">
                  <div className="text-2xl font-bold">28</div>
                  <div>Dec</div>
                </div>
                <Image
                  src={news.image}
                  alt={news.title}
                  width={200}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col">
                <div className="text-sm text-gray-800 mb-2">
                  by {news.author} - {news.date}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black group-hover:text-blue-600 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-800">
                  {news.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
