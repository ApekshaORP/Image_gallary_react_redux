import moxios from 'moxios';

const fakeData = [
  {id:0,
  author:"Alejandro Escamilla",
  width:5616,
  height:3744,
  url:"https://unsplash.com/photos/yC-Yzbqy7PY",
  download_url:"https://picsum.photos/id/0/5616/3744"}
  ];
  
  export const FetchData = ()=>{
    return Promise.resolve(fakeData);
  }

//   export const FetchData = (currentPageNumber) => async (dispatch) => {
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
     
//       request.respondWith({
//           status: 200,
//           response: fakeData
//       })
//   });
// }
 