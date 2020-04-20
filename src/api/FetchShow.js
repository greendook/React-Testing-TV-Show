import React from 'react';
import axios from 'axios';

const FetchShow = () => {
  return axios
    .get(
      'https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes'
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error('error fetching data from api, err: ', err.message);
      return err;
    });
};

export default FetchShow;

//   useEffect(() => {
//     const fetchShow = () => {
//       axios
//         .get(
//           "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
//         )
//         .then(res => {
//           setShow(res.data);
//           setSeasons(formatSeasons(res.data._embedded.episodes));
//         });
//     };
//     fetchShow();
//   }, []);
