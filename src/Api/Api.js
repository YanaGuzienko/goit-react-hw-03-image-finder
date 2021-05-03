function fetchImages(name, currentPage) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${currentPage}&key=20626801-2d87cc5d65955ac685972c705&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}

const api = {
  fetchImages,
};

export default api;
