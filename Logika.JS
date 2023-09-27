const nilaiujian = 70;
const nilaiabsensi = 80;

const lulusujian = nilaiujian > 75 ;
const lulusabsensi = nilaiabsensi > 75;

const lulus = lulusujian || lulusabsensi;
console.log(lulus);