import React from "react";
import services from "./services";
const Index = () => {
  return (
    <div>
      <div class="md:flex md:justify-center items-center md:space-x-8 md:px-14 ">
        {services.map((services) => (
          <div
            key={services}
            class="mt-16 py-4 px-4 bg-whit w-72 bg-white
             rounded-xl shadow-lg hover:shadow-xl
              transform hover:scale-110
               transition duration-500 mx-auto md:mx-0"
          >
            <div class="w-sm">
              <img
                class="w-40 rounded-full ml-10"
                src={services.image}
                alt=""
              />
              <div class="mt-4 text-green-600 text-center">
                <h1 class="text-xl font-bold">{services.name}</h1>
                <p class="mt-4 text-gray-600">{services.description}</p>
                <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">
                  Detalis
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
