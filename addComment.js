let commentForm = document.querySelector('.add-comment');
let commentsField = document.querySelector('.comments-field');
let autorInput = document.querySelector('input[name=user-name]');
let emailInput = document.querySelector('input[name=email]');


const elements = [
	['div', 'comment-item'], 
	['div', 'comment-author'], 
	['img', 'author-photo'],
	['p', 'author-name'],
	['p', 'comment-text']
];


let makeElement = function ([tag, tagClass]) {
	let elem = document.createElement(tag);
	elem.classList.add(tagClass);
	return elem;
};

commentForm.onsubmit = function (evt) {
	evt.preventDefault();

	let newComment = makeElement(elements[0]);

	let commentAuthor = makeElement(elements[1]);
	newComment.appendChild(commentAuthor);

	let authorPhoto = makeElement(elements[2]);
	authorPhoto.src = '';
	commentAuthor.appendChild(authorPhoto);

	let authorName = makeElement(elements[3]);
	authorName.textContent = autorInput.value;
	commentAuthor.appendChild(authorName);

	let commentText = makeElement(elements[4]);
	commentText.textContent = textField.value;
	newComment.appendChild(commentText);

	commentsField.append(newComment);

	autorInput.value = '';
	emailInput.value = '';
	textField.value = '';
}

