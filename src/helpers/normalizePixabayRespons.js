export const normalizePixabayResponse = response => {
  const { totalHits } = response.data;
  const images = response.data.hits.map(
    ({ id, webformatURL, largeImageURL, tags }) => ({
      id,
      tags,
      webformatURL,
      largeImageURL,
    })
  );
  return { totalHits, images };
};
