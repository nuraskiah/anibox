## Tugas Frontend Kelasfullstack

1. Clone repository ini dengan command `git clone` atau download source codenya.
2. Kerjakan daftar tugas di bawah.
3. Cari comment dengan tanda tanya (`//?`) dalam file Javascript.
4. Push codenya ke repository kalian.
5. Atur GitHub Pages atau hosting lain untuk demo.
6. Submit dengan mengisi [form ini](https://airtable.com/shrRgvyiYdb76BAMt).

## Stack
- HTML
- CSS
- Javascript
- Tailwind
- Flowbite

## Daftar Tugas
- Home page (home.js)
  - [ ] Ambil data untuk carousel (limit=5)
  - [ ] Ambil data trending
  - [ ] Ambil data untuk section lain
  - [ ] Tambahkan section pada variabel `listSection`
  - [ ] Hapus import variabel yang tidak terpakai
  
- Search result page (search.js)
  - [ ] Ambil data search (limit bebas)
  - [ ] Hapus import variabel yang tidak terpakai
  - [ ] (Optional) Load more pada hasil search (pagination)
  - [ ] (Optional) Live searching dengan debounce

- Detail page (detail.js)
  - [ ] Ambil data dari API
  - [ ] Masukkan data ke masing-masing elemen (description, banner, cover)
  - [ ] Hapus import variabel yang tidak terpakai
  - [ ] Tambahkan element untuk menampilkan daftar genre di file detail.html
  - [ ] Tambahkan script untuk menampilkan daftar genre
  - [ ] Hapus import variabel yang tidak terpakai
  - [ ] (Optional) Gunakan data yang belum terpakai dari API, seperti trailer, episode, dll
  - [ ] (Optional) Tambahkan 'show more' dan 'show less' pada description ([contoh](https://www.geeksforgeeks.org/how-to-create-show-more-and-show-less-functionality-for-hiding-text-using-javascript/))

## API

### Base URL
```
https://animeapi-askiahnur1.b4a.run
```

### Endpoints
**Get Trending**
```
/anime?sort=trending
```
**Get Popular**
```
/anime?sort=popularity
```
**Get New Release**
```
/anime?sort=newest
```
**Get Top N**
```
/anime?sort=top
```
**Get Detail By ID**
```
/anime/:id
```
**Search**
```
/anime?title=attack
```
**Pagination**
```
/anime?sort=top&limit=50&page=2
/anime?title=attack&limit=20&page=1
```
- Max limit per page: 50