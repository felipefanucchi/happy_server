import Image from "../models/Image"

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `${process.env.URL}/uploads/${image.path}`
    }
  },

  renderMany(images: Array<Image>) {
    return images.map(image => this.render(image));
  }
}