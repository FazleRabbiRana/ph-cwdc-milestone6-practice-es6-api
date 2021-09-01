// show loading spinner
const loadingSpinner = displayStatus => {
	document.getElementById('loading_spinner').style.display = displayStatus;
}

// load photos from api
const loadPhotos = async () => {
	loadingSpinner('flex');
	
	const url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
	try {
		const res = await fetch(url);
		const data = await res.json();
		displayPhotos(data);
	} catch (err) {
		console.log(err);
		showNotice();
		document.getElementById('photos').textContent = '';
	}
}
loadPhotos();

// show error notice
const showNotice = () => {
	const noticeContainer = document.getElementById('notice');
	noticeContainer.innerHTML = `
		<p class="mb-0 h5 text-danger text-center">Something went wrong. Try again later.</p>
	`;
}

// display photos on ui
const displayPhotos = photos => {
	// console.log(photos);
	const photosContainer = document.getElementById('photos_grid');
	photos.slice(0, 30).forEach(photo => {
		const singleItem = document.createElement('div');
		singleItem.classList.add('col');
		singleItem.setAttribute('onclick', `loadPhotoDetail(${photo.id})`);
		singleItem.innerHTML = `
		<div class="card h-100">
			<img src="${photo.thumbnailUrl}" class="card-img-top" alt="Photo-${photo.id}">
			<div class="card-body">
				<h6 class="card-title">${photo.title}</h6>
			</div>
		</div>
		`;
		photosContainer.appendChild(singleItem);
	});
	loadingSpinner('none');
}

// load photo detail
const loadPhotoDetail = async photoId => {
	const url = `https://jsonplaceholder.typicode.com/photos/${photoId}`;
	try {
		const res = await fetch(url);
		const data = await res.json();
		showDetail(data);
	} catch (err) {
		console.log(err);
		showNotice();
	}
}

// show photo detail
const showDetail = photo => {
	console.log(photo);
	const detailContainer = document.getElementById('photo_detail');
	detailContainer.innerHTML = `
		<div class="p-4 bg-secondary text-white rounded-3">
			<h2 class="mb-3">Photo Detail</h2>
			<h4 class="mb-3 text-capitalize">${photo.title}</h4>
			<div class="row row-cols-2 justify-content-center align-items-center">
				<div class="col-12 col-sm-6 col-md-4 col-lg-3">
					<img src="${photo.url}" alt="Photo-${photo.id}" class="img-fluid">
				</div>
				<div class="col-12 col-sm-6 col-md-4 col-lg-3">
					<img src="${photo.thumbnailUrl}" alt="Photo-${photo.id}" class="img-fluid">
				</div>
			</div>
		</div>
	`;
}