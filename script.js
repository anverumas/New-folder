async function getDapi() {
    const url = "https://digi-api.com/api/v1/digimon";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
  
    const element = document.querySelector(".dapi");
    for (const item of data.content) {
      const id = item.id;
      const name = item.name;
      const image = item.image;
      element.innerHTML += "<p>" + id + ": " + name + "</p>"
      element.innerHTML += '<img src="' + image + '">';
;
    }
  }
getDapi();
