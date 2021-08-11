let amt = document.getElementById("text");
let cut = document.getElementById("cut");
let total = document.getElementById("endamt");
let centage = document.getElementById("pert");
let price = document.getElementById("price");
let balance = document.getElementById("balance");

amt.onchange = function () {
	let Amt = `${amt.value}`;
	price.innerHTML = `${Amt} $`;
	total.innerHTML = `${Amt} $`;


	cut.onchange = function () {
		let Cut = cut.value;
		let cal = Cut / 100;
		let pay = cal * Amt;
		centage.innerHTML = Cut;
		total.innerHTML = `Amount :   ${pay} $`;
		balance.innerHTML = `Balance :   ${Amt-pay} $ `;
	}
}

let date = new Date();
let yr = document.getElementById("year");
yr = date.getFullYear();
year.innerHTML = yr;

//service worker registration
if ("serviceWorker" in navigator) {
	window.addEventListener("load", function () {
		this.navigator.serviceWorker.register("/serviceWorker.js").then(res=>console.log("service worker registered")).catch(err=>console.log("service worker not registered",err))
	})
}