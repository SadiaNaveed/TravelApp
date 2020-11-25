import GenericService from "./GenericService";

class HotelReviewService extends GenericService {
  constructor() {
    super();
  }

  addHotelReview = (body) =>
    this.post("hotelReview", body, {
      headers: {
        "Content-Type": "form-data",
      },
    });
  //deleteHotelReview = (_id) => this.delete("products/" + _id);
  //updateHotelReview  = (_id, data) => this.put("products/" + _id, data);
  getHotelReview = (page = 1, perPage = 20) =>
    this.get("hotelReview?page=" + page + "&perPage=" + perPage).then();

  getSingleHotelReview = (id) => this.get("hotelReview/" + id);
}

let hotelReviewService = new HotelReviewService();
export default hotelReviewService;
