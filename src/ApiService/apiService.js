import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '13128632-519e28f670cc6f8f58c4d9c9f',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const getImages = async (query, page) => {
  try {
    const { data } = await axios.get('', { params: { q: query, page } });
    return data.hits;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
export default getImages;
