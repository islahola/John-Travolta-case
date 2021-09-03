/* fungsi untuk menghitung gaji */
const hitung = function(jam){
    let gaji = 15000;
    let jamLembur = jam-40;
    let lembur = 1.5 *(15000*jamLembur);
    if(jam==0){
       return 0;
    }
    else if(jam<=40){
       return gaji * jam;
    }else{
        jam-=jamLembur;
        gaji*=jam;
        return gaji+lembur;
    }
}
/* fungsi untuk melihat status tabungan */
const tabungan = function(gaji,pengeluaran){
 if(gaji==pengeluaran){
   return `tidak bisa menabung`
 }else if(gaji<pengeluaran){
   return`cari Tambahan`
 }else if(gaji>pengeluaran){
   return `anda bisa menabung, saldo dapat ditabung: ${gaji-pengeluaran}`
 }else{
   return `input failed`
 }
}
	let jamKerja = prompt("Masukan jumlah Jam kerja Anda");
  let pengeluaran = prompt("Masukan pengeluaran anda");
	// parameter jumlah jam kerja
	let sallry = hitung(jamKerja)
	// parameter totalGaji dan jumlah-pengeluaran
	let statusTabung = tabungan(hitung(jamKerja),pengeluaran)
 	 console.log(`jumlah gaji anda ${sallry} dan ${statusTabung}`)
