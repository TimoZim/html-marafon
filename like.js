let likeBtn = document.querySelector(".like-btn");
let likesNbr = document.querySelector(".likes-count");
let counter = likesNbr.textContent;

likeBtn.onclick = function () {
	if (!likeBtn.classList.contains("liked")){
		likeBtn.classList.add("liked");
		counter++;
		likesNbr.textContent = counter;
	}
	else {
		likeBtn.classList.remove("liked");
		counter--;
		likesNbr.textContent = counter;
	}
}



