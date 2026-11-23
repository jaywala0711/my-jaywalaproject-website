var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");
sideNav.style.right=="-250px";

menuBtn.onclick=function(){
		if(sideNav.style.right=="-250px"){
			sideNav.style.right="0";
			menu.src="close.png";
		}
		else
		{
			sideNav.style.right="-250px";
			menu.src="menu.png";
		}
	}



// ONLINE BOOKING MODAL

var bookingBtn = document.getElementById("bookingBtn");
var bookingModal = document.getElementById("bookingModal");
var closeBooking = document.getElementById("closeBooking");
var bookingForm = document.getElementById("bookingForm");
var bookingDate = document.getElementById("bookingDate");

// Open Modal
bookingBtn.onclick = function(e) {
    e.preventDefault();
    bookingModal.style.display = "flex";
};

// Close Modal
closeBooking.onclick = function() {
    bookingModal.style.display = "none";
};

// Close when clicking outside modal
window.addEventListener("click", function(e) {
    if (e.target == bookingModal) {
        bookingModal.style.display = "none";
    }
});

// Prevent selecting past dates
var today = new Date();
var year = today.getFullYear();
var month = String(today.getMonth() + 1).padStart(2, "0");
var day = String(today.getDate()).padStart(2, "0");

bookingDate.min = year + "-" + month + "-" + day;

// Booking Form Submit
bookingForm.onsubmit = function(e) {
    e.preventDefault();

    alert("Thank you! Your booking request has been submitted successfully.");

    bookingForm.reset();
    bookingModal.style.display = "none";
};



