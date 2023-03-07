export const bannerCarouselItem = ({
  id,
  title,
  description,
  banner,
  year,
  genre,
  format,
}) => {
  if (description.length > 150) {
    description = description.substring(0, 150) + '...';
  }

  return `
    <a href="/detail.html?id=${id}" class="hidden duration-200 ease-linear flex" data-carousel-item>
      <div class="basis-2/5 px-16 py-8">
        <h1 class="mb-2 text-4xl font-bold leading-normal tracking-tight text-white">${title}</h1>
        <div class="mb-3">
          <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">${year}</span>
          <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">${genre}</span>
          <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">${format}</span>
        </div>
        <p class="text-lg font-normal leading-relaxed text-gray-400">${description}</p>
      </div>
      <div class="basis-3/5 relative">
        <div class="absolute h-96 w-72 bg-gradient-to-r from-black z-10">
        </div>
        <img src="${banner}" class="absolute block h-96 object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="${title}">
      </div>
    </a>
  `;
};

export const section = ({ name, data }) => {
  return `
    <section id="${name.toLowerCase()}" class="mt-16 relative">
      <div class="px-16">
        <h4 class="text-2xl font-bold dark:text-white">${name}</h4>
        <div class="relative mt-4">
          <div id="${name.toLowerCase()}-container"
            class="flex flex-nowrap overflow-x-scroll scroll-smooth hide-scroll-bar gap-x-4 snap-x snap-mandatory">
            ${data
              .map((item) =>
                imageCard({
                  id: item.id,
                  title: item.title.romaji,
                  imageUrl: item.coverImage,
                  year: item.year,
                  genre: item.genres[0],
                })
              )
              .join('')}
          </div>
        </div>
      </div>
      <!-- Slider controls -->
      <button type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10">
          <svg aria-hidden="true" class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
          <svg aria-hidden="true" class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </section>
  `;
};

export const imageCard = ({ id, title, imageUrl, year, genre }) => {
  if (title.length > 50) {
    title = title.substring(0, 50) + '...';
  }

  return `
    <a href="detail.html?id=${id}" class="snap-start cursor-pointer w-56">
      <div class="w-56 h-80 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img class="block object-cover h-80 w-80" src="${imageUrl}" alt="${title}">
      </div>
      <div class="mt-4">
        <p class="text-white">${title}</p>
        <p class="text-sm text-gray-400 mt-1">${
          year ? year + ' • ' : ''
        }${genre}</p>
      </div>
    </a>
  `;
};
