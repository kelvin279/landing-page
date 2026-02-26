// 1. Live Webinar Countdown Timer (Fake urgency for auditors)
function updateWebinarDate() {
    const webinarSpan = document.getElementById('next-webinar');
    if (webinarSpan) {
        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + (nextDate.getHours() >= 18 ? 1 : 0));
        nextDate.setHours(18, 0, 0); // Sets it to 6:00 PM today or tomorrow
        webinarSpan.innerText = nextDate.toLocaleString('en-US', { 
            weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' 
        });
    }
}
updateWebinarDate();

// 2. YouTube Video Modal Logic
const modal = document.getElementById("videoModal");
const videoFrame = document.getElementById("youtubeVideo");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll('.open-video').forEach(button => {
    button.onclick = function(e) {
        e.preventDefault();
        const videoId = this.getAttribute('data-video');
        videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        modal.style.display = "block";
    }
});

closeBtn.onclick = function() {
    modal.style.display = "none";
    videoFrame.src = ""; // Stop video on close
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        videoFrame.src = "";
    }
}

// 3. USDT Payment Button Alert
// 1. Get the Modal elements
const usdtModal = document.getElementById("usdtModal");
const closeBtn = document.querySelector(".close-usdt");

// 2. Attach the modal trigger to all USDT buttons
document.querySelectorAll('.pay-usdt').forEach(btn => {
    btn.addEventListener('click', function() {
        // Pull data from the button's attributes
        const courseName = this.getAttribute('data-course');
        const courseAmount = this.getAttribute('data-amount');

        // Update the modal text dynamically
        usdtModal.querySelector('h3').innerText = `Pay for ${courseName}`;
        usdtModal.querySelector('p').innerHTML = `Please send exactly <strong>${courseAmount} USDT</strong> to the address below:`;

        // Show the modal
        usdtModal.style.display = "block";
    });
});

// 3. Close Modal logic
closeBtn.onclick = () => usdtModal.style.display = "none";
window.onclick = (event) => {
    if (event.target == usdtModal) usdtModal.style.display = "none";
}
