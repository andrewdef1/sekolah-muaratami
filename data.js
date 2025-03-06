// data.js
var schools = [
   { 
       name: "Sekolah Minggu Kanaan",
       lat: -2.674191455982645,
       lon: 140.80367031926104, 
       type: "PAUD", 
       siswa: "13 orang",
       alamat: "Jl. Protokol koya Barat",
       gambar: ``,
       description: `Jl. Protokol koya Barat<br>
              Titik Lokasi : -2.674191455982645,140.80367031926104<br>
           Jumlah Murid : 13 orang
           <a href='' target='_blank'><img src='' width='150'></a><br>`
   },   
   { 
       name: "Sekolah Minggu Rafidim",
       lat: -2.671073747766095,
       lon: 140.84671370103501, 
       type: "PAUD", 
       siswa: "25 orang",
       alamat: "Jl. Matoa Koya timur",
       gambar: ``,
       description: `Jl. Matoa Koya timur<br>
              Titik Lokasi : -2.671073747766095,140.84671370103501<br>
           Jumlah Murid : 25 orang
           <a href='' target='_blank'><img src='' width='150'></a><br>`
   },   
   { 
       name: "Sekolah Minggu Getsemani",
       lat: -2.671073747766095,
       lon: 140.7760101886579, 
       type: "PAUD", 
       siswa: "19 orang",
       alamat: "Jl. Hanurata Holtekamp",
       gambar: ``,
       description: `Jl. Hanurata Holtekamp<br>
              Titik Lokasi : -2.671073747766095,140.7760101886579<br>
           Jumlah Murid : 19 orang
           <a href='' target='_blank'><img src='' width='150'></a><br>`
   },   
   { 
       name: "Sekolah Minggu Tehupa",
       lat: -2.6166604673009246,
       lon: 140.88558743251002, 
       type: "PAUD", 
       siswa: "31 orang",
       alamat: "Kampung Skouw Sae",
       gambar: ``,
       description: `Kampung Skouw Sae<br>
              Titik Lokasi : -2.6166604673009246,140.88558743251002<br>
           Jumlah Murid : 31 orang
           <a href='' target='_blank'><img src='' width='150'></a><br>`
   },   
   { 
       name: "Sekolah Minggu Kalvari",
       lat: -2.614225729544683,
       lon: 140.86359730132284, 
       type: "PAUD", 
       siswa: "21 orang",
       alamat: "Kampung Skouw Mabo",
       gambar: ``,
       description: `Kampung Skouw Mabo<br>
              Titik Lokasi : -2.614225729544683,140.86359730132284<br>
           Jumlah Murid : 21 orang
           <a href='' target='_blank'><img src='' width='150'></a><br>`
   },   
   { 
       name: "Sekolah Minggu Karmel",
       lat: -2.6129391003099065,
       lon: 140.8512430598896, 
       type: "PAUD", 
       siswa: "23 orang",
       alamat: "Kampung Skouw Yambe",
       gambar: ``,
       description: `Kampung Skouw Yambe<br>
              Titik Lokasi : -2.6129391003099065,140.8512430598896<br>
           Jumlah Murid : 23 orang
           <a href='' target='_blank'><img src='' width='150'></a><br>`
   },   
   { 
       name: "Sekolah Minggu Betlehem Mosso",
       lat: -2.6490657399092474,
       lon: 140.92896678952795, 
       type: "PAUD", 
       siswa: "20 orang",
       alamat: "Kampung Moso Muara Tami",
       gambar: ``,
       description: `Kampung Moso Muara Tami<br>
              Titik Lokasi : -2.6490657399092474,140.92896678952795<br>
           Jumlah Murid : 20 orang
           <a href='' target='_blank'><img src='' width='150'></a><br>`
   },   
   { 
       name: "TPQ Raul Dlatut Thalibin",
       lat: -2.6713326408019737,
       lon: 140.8461637479232, 
       type: "PAUD", 
       siswa: "7 orang",
       alamat: "Jl. Jambu Koya Timur",
       gambar: ``,
       description: `Jl. Jambu Koya Timur<br>
              Titik Lokasi : -2.6713326408019737,140.8461637479232<br>
           Jumlah Murid : 7 orang
           <a href='' target='_blank'><img src='' width='150'></a><br>`
   },   
   { 
       name: "TPQ Ma’Arif",
       lat: -2.6657270319770032,
       lon: 140.8481943185323, 
       type: "PAUD", 
       siswa: "11 orang",
       alamat: "Jl. Alpukat I koya Timur",
       gambar: ``,
       description: `Jl. Alpukat I koya Timur<br>
              Titik Lokasi : -2.6657270319770032,140.8481943185323<br>
           Jumlah Murid : 11 orang
           <a href='' target='_blank'><img src='' width='150'></a><br>`
   },   
   { 
       name: "TPQ Nurul Hudha",
       lat: -2.8221845589548527,
       lon: 140.627299204665, 
       type: "PAUD", 
       siswa: "10 orang",
       alamat: "Koya Barat",
       gambar: ``,
       description: `Koya Barat<br>
              Titik Lokasi : -2.8221845589548527,140.627299204665<br>
           Jumlah Murid : 10 orang
           <a href='' target='_blank'><img src='' width='150'></a><br>`
   },   
   { 
       name: "TPQ Darul Muttaqin",
       lat: -2.6707435956827514,
       lon: 140.80654152182277, 
       type: "PAUD", 
       siswa: "13 orang",
       alamat: "Jl. Manokwari koya Barat",
       gambar: ``,
       description: `Jl. Manokwari koya Barat<br>
              Titik Lokasi : -2.6707435956827514,140.80654152182277<br>
           Jumlah Murid : 13 orang
           <a href='' target='_blank'><img src='' width='150'></a><br>`
   },   
   { 
       name: "TPQ Annur Falah",
       lat: -2.6696976698768853,
       lon: 140.84973501291228, 
       type: "PAUD", 
       siswa: "14 orang",
       alamat: "Jl. Durian II koya Timur",
       gambar: ``,
       description: `Jl. Durian II koya Timur<br>
              Titik Lokasi : -2.6696976698768853,140.84973501291228<br>
           Jumlah Murid : 14 orang
           <a href='' target='_blank'><img src='' width='150'></a><br>`
   },   
   { 
       name: "TPQ Al Amin",
       lat: -2.677512558425947,
       lon: 140.82311336680775, 
       type: "PAUD", 
       siswa: "13 orang",
       alamat: "Jl. Bandungan Tami",
       gambar: ``,
       description: `Jl. Bandungan Tami<br>
              Titik Lokasi : -2.677512558425947,140.82311336680775<br>
           Jumlah Murid : 13 orang
           <a href='' target='_blank'><img src='' width='150'></a><br>`
   },   
   { 
       name: "TPQ Baitul Khoir",
       lat: -2.6751840849504034,
       lon: 140.83320206755468, 
       type: "PAUD", 
       siswa: "15 orang",
       alamat: "Jl. Protokol koya Timur",
       gambar: ``,
       description: `Jl. Protokol koya Timur<br>
              Titik Lokasi : -2.6751840849504034,140.83320206755468<br>
           Jumlah Murid : 15 orang
           <a href='' target='_blank'><img src='' width='150'></a><br>`
   },   
   { 
       name: "TPQ Al Aqsha Skouw",
       lat: -2.6336534158587774,
       lon: 140.87989592308696, 
       type: "PAUD", 
       siswa: "27 orang",
       alamat: "Jl. Perbatasan RI – PNG Skouw",
       gambar: ``,
       description: `Jl. Perbatasan RI – PNG Skouw<br>
              Titik Lokasi : -2.6336534158587774,140.87989592308696<br>
           Jumlah Murid : 27 orang
           <a href='' target='_blank'><img src='' width='150'></a><br>`
   },   
   { 
      name: "TK CINTAKU LULU",
      lat: -2.6448203122619622,
      lon: 140.81028555061516, 
      type: "TK", 
      siswa: "- orang",
      alamat: "Perumahan Rollo Green Diamond Resident Kampung Koya Tengah Distrik Muara Tami",
      gambar: `<img src='img/cintakululu.jpg' width='520vw' height='400vh'>`,
      description: `Perumahan Rollo Green Diamond Resident Kampung Koya Tengah Distrik Muara Tami<br>
             Titik Lokasi : -2.6448203122619622,140.81028555061516<br>
          Jumlah Murid : - orang<br>
          <a href='img/cintakululu.jpg' target='_blank'><img src='img/cintakululu.jpg' width='150'></a><br>`
  },
]
