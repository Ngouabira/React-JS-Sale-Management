// import FilterRequest from "@core/models/filter.request";
// import { API_URL, HEADER } from "@utils/const";


// export  const useFetch = async (filter:FilterRequest) => {


//     try {
//         const request = await fetch(`${API_URL}/category?param=${filter.param}&page=${filter.page}&size=${filter.size}`, {
//           headers: {
//             ...HEADER
//           },
//           method: 'GET',
//         })
  
//         const response = await request.json();
//         setCategories(response[0].data);
//         setPagination(response[0].pagination);
        
//       } catch (error: any) {
//         setErrors(error);
//       }
//       finally {
//         setIsloading(false);
//       }
// }