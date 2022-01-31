const string =
  '[{"url":"https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg","description":"London"},{"url":"https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg","description":"Paris"},{"url":"https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg","description":"New York"},{"url":"https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg","description":"Nova Scotia"},{"url":"https://classes.codingbootcamp.cz/assets/classes/1428/tokio.jpg","description":"Tokio"},{"url":"https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg","description":"Venice"}]';

const object = JSON.parse(string);

class Image {
  constructor(url, description) {
    this.url = url;
    this.description = description;
  }
  render() {
    const div = document.createElement("div");
    div.innerHTML = `<div class="image"><img src="${this.url}" alt=${this.description}></div><div class="image__description">${this.description}</div>`;
    return div;
  }
}

const gallery = document.querySelector(".gallery");

// const getHtmlForImage = (img) => {
//   const url = img["url"];
//   const description = img["description"];
//   return '<img src="' + url + '" alt="' + description + '">';
// };

// const getHtmlForDescription = (des) => {
//   const description = des["description"];
//   return '<div class="image__description">' + description + "</div>";
// };

object.forEach((element) => {
  const image = new Image(element.url, element.description);
  gallery.appendChild(image.render());
  // gallery.innerHTML +=
  //   '<div class="image">' +
  //   getHtmlForImage(element) +
  //   getHtmlForDescription(element) +
  //   "</div>";
});
