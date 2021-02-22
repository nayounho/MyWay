const axios  = require('axios');
const url = 'http://localhost:7000';

const getMyFavorite = async () => {
  const { data: myFavorite} = await axios.get(url + '/myFavorite')
  console.log(myFavorite)
}

export default getMyFavorite;

// const getMenu = async () => {
//   try {
//     const res = await axios.get(`https://api.unsplash.com/photos/random/?collections=${collectionId}&q=99&fm=jpg&crop=entropy&w=2048&cs=tinysrgb&fit=max&client_id=${accessKey}`);
//     renderBackground(res.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default getBackgroundImage;