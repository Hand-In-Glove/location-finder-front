class Layby {
  _id: number;
  position: google.maps.LatLngLiteral;
  name?: string;
  submittedBy: string;
  rating: number;
  imageUrl?: string;
  facilities?: string[];
}

export default Layby;
