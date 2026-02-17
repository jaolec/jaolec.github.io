function showFilter() {
	const filterForm = document.getElementById("filterContent");
	const newContentForm = document.getElementById("newContent");

	filterForm.style.display = "block";
	newContentForm.style.display = "none";
}

function showAddNew() {
	const filterForm = document.getElementById("filterContent");
	const newContentForm = document.getElementById("newContent");

	filterForm.style.display = "none";
	newContentForm.style.display = "flex";
}

function getSelectedArticleType() {
	const opinionRadio = document.getElementById("opinionRadio");
	const recipeRadio = document.getElementById("recipeRadio");
	const lifeRadio = document.getElementById("lifeRadio");

	if (opinionRadio.checked) {
		return { className: "opinion", label: "Opinion" };
	}

	if (recipeRadio.checked) {
		return { className: "recipe", label: "Recipe" };
	}

	if (lifeRadio.checked) {
		return { className: "update", label: "Update" };
	}

	return null;
}

function getNextArticleId() {
	const articles = document.querySelectorAll("#articleList article");
	let maxId = 0;

	articles.forEach((article) => {
		const numericId = Number((article.id || "").replace("a", ""));
		if (!Number.isNaN(numericId) && numericId > maxId) {
			maxId = numericId;
		}
	});

	return `a${maxId + 1}`;
}

function addNewArticle() {
	const titleInput = document.getElementById("inputHeader");
	const textInput = document.getElementById("inputArticle");
	const articleList = document.getElementById("articleList");
	const selectedType = getSelectedArticleType();

	const title = titleInput.value.trim();
	const text = textInput.value.trim();

	if (!title || !text || !selectedType) {
		alert("Please enter a title, article text, and select an article type.");
		return;
	}

	const article = document.createElement("article");
	article.className = selectedType.className;
	article.id = getNextArticleId();

	const marker = document.createElement("span");
	marker.className = "marker";
	marker.textContent = selectedType.label;

	const heading = document.createElement("h2");
	heading.textContent = title;

	const body = document.createElement("p");
	body.textContent = text;

	const readMoreContainer = document.createElement("p");
	const readMoreLink = document.createElement("a");
	readMoreLink.href = "moreDetails.html";
	readMoreLink.textContent = "Read more...";
	readMoreContainer.appendChild(readMoreLink);

	article.append(marker, heading, body, readMoreContainer);
	articleList.appendChild(article);

	titleInput.value = "";
	textInput.value = "";
	document.getElementById("opinionRadio").checked = false;
	document.getElementById("recipeRadio").checked = false;
	document.getElementById("lifeRadio").checked = false;

	filterArticles();
}

function filterArticles() {
	const showOpinion = document.getElementById("opinionCheckbox").checked;
	const showRecipe = document.getElementById("recipeCheckbox").checked;
	const showUpdate = document.getElementById("updateCheckbox").checked;

	const articles = document.querySelectorAll("#articleList article");

	articles.forEach((article) => {
		const shouldShow =
			(article.classList.contains("opinion") && showOpinion) ||
			(article.classList.contains("recipe") && showRecipe) ||
			(article.classList.contains("update") && showUpdate);

		article.style.display = shouldShow ? "block" : "none";
	});
}
