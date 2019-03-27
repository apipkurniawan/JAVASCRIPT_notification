// memberikan fungsi pada tombol x
// cara 1 (menggunakan event handling)
	// const close = document.querySelector('.close');
	// const card = document.querySelector('.card');

	// close.addEventListener('click', function() {
	// 	card.style.display = 'none';
	// });

// cara 2 menggunakan DOM Traversal
	// const close = document.querySelectorAll('.close');  // ambil semua class

	// cara 1 menggunakan for
	// for (let i = 0; i < close.length; i++) {
	// 	close[i].addEventListener('click', function(){
	// 		// alert('tombol ke-' + i); // mengetahui tombol ke berapa yang di click melalui alert
	// 		close[i].parentElement.style.display = 'none';	// cara 1 (menelusuri menggunakan dom traversal dengan mengambil dari parentElement nya)	
	// 		e.target.parentElement.style.display = 'none';  // cara 2 (menelusuri menggunakan dom traversal dengan mengambil dari parentElement nya)
	// 	});
	// }

	// cara 2 menggunakan foreach
	// close.forEach(function(el) {
	// 	el.addEventListener('click', function(e) {
	// 		e.target.parentElement.style.display = 'none';
	// 		e.preventDefault();  // untuk mencegah aksi defaultnya
	// 		e.stopPropagation();  // untuk menghentikan aksi lainnya (event bubbling)
	// 	});
	// });

// memberikan fungsi pada semua class card
	// const cards = document.querySelectorAll('.card');
	// cards.forEach(function(card) {
	// 	card.addEventListener('click', function(e) {
	// 		alert('ok');
	// 	});
	// });

// menentukan parent element
	// const nama = document.querySelector('.nama');
	// console.log(nama.parentElement);  // menentukan parentElement
	// console.log(nama.parentElement.parentElement);  // menentukan parentElement di atasnya
	// console.log(nama.nextElementSibling);  // menentukan element selanjutnya
	// console.log(nama.previousElementSibling);  // menentukan element sebelumnya

// cara 3 menggunakan event bubbling (cara paling efektif)
	const container = document.querySelector('.container');

	container.addEventListener('click', function(e) {
		// console.log(e.target); // cek target pada console
		if (e.target.className == 'close') {
			e.target.parentElement.style.display = 'none';
			e.preventDefault();
		}
	});