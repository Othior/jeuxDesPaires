class Tuiles {
    constructor(image, id, name) {
      this.image = image;
      this.id = id;
      this.name = name;
    }
    createTuiles(app) {
      app.innerHTML += `<div class="tuiles" data-id="${this.id}">
      <img class="picture" src="${this.image}" alt="${this.name}">
      </div>`;
  }
}
  