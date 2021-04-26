import { add } from "react-native-reanimated";

class Node {
  constructor(id, title, imgUrl, location, description, catId) {
    this.id = id;
    this.title = title;
    this.imgUrl = imgUrl;
    this.location = location;
    this.description = description;
    this.catId = catId;
  }
}

export default Node;
