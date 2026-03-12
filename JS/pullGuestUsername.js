function submitInfo() {
	//works
	let guestUsername = document.getElementById("guestuname").value;
	localStorage.setItem("GuestUser", guestUsername);
	
	//window.alert(guestUsername);
	
	//works
	//let retrieve = localStorage.getItem("GuestUser")
	//window.alert(retrieve);

}
