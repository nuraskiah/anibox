import { bannerCarouselItem, section } from './components/components.js';
import { banner, trending } from './data.js'; //? hapus setelah mendapatkan data dari API
import { initialSetup } from './index.js';

initialSetup();

const setBannerCarouselItem = (banner) => {
  const bannerContainer = document.getElementById('banner-container');

  const carouselItems = banner.map((item) =>
    bannerCarouselItem({
      id: item.id,
      title: item.title.romaji,
      description: item.description,
      banner: item.bannerImage,
      year: item.year,
      genre: item.genres[0],
      format: item.format,
    })
  );

  bannerContainer.innerHTML = carouselItems.join('');

  const items = [];
  let index = 0;
  for (const item of bannerContainer.children) {
    items.push({
      position: index++,
      el: item,
    });
  }

  const carousel = new Carousel(items);
  carousel.cycle();

  const prevButton = document.querySelector('[data-carousel-prev]');
  const nextButton = document.querySelector('[data-carousel-next]');

  prevButton.onclick = () => {
    carousel.prev();
  };

  nextButton.onclick = () => {
    carousel.next();
  };
};

//? ambil data dari API
// const trending = ....
// ....

setBannerCarouselItem(banner);

const listSection = [
  {
    name: 'Trending',
    data: trending, //? ganti dengan data yang sudah diambil
  },
  // tambahkan section lain
  // {
  //   name: 'Popular',
  //   data: ...,
  // },
  // ...
];

// menampilkan data ke halaman HTML
document.querySelector('main').innerHTML = listSection
  .map((item) => section(item))
  .join('');

// memberi action pada button scroll kiri dan kanan
listSection.forEach((item) => {
  const sectionName = item.name.toLowerCase();

  const prev = document.querySelector(
    '#' + sectionName + ' button[data-carousel-prev]'
  );
  prev.onclick = () => {
    document.getElementById(sectionName + '-container').scrollLeft -= 1000;
  };

  const next = document.querySelector(
    '#' + sectionName + ' button[data-carousel-next]'
  );
  next.onclick = () => {
    document.getElementById(sectionName + '-container').scrollLeft += 1000;
  };
});
