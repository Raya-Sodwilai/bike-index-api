export default class BikeService {
  static async getAllBikes() {
    try {
      const response = await fetch(`https://bikeindex.org/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen`);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      const jsonValue = await response.json();
      return Promise.resolve(jsonValue);
    } catch(error) {
      return error.message;
    }
  }

  static async getBikeSearch(serialNumber) {
    try {
      const response = await fetch(`https://bikeindex.org/api/v3/search/close_serials?page=1&per_page=25&serial=${serialNumber}&location=IP&distance=10&stolenness=stolen`);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      const jsonValue = await response.json();
      return Promise.resolve(jsonValue);
    } catch(error) {
      return error.message;
    }
  }
}