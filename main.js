const favFruit = prompt(`What's your favorite fruit?`).toLowerCase();


switch (favFruit) {
  case "bananas":
    alert(`I like ${favFruit} as well`);
    break;
  case `strawberry`:
    alert(`I LOVE strawberries`);
    break;
  case `grape`:
    colorGrapes = prompt(`Do you prefer purple or green grapes ?`).toLowerCase();
    switch (colorGrapes) {
      case "purple":
        alert(`I don't like ${colorGrapes} grapes`);
        break;
      case "green":
        alert(`${colorGrapes} grapes are ok...`);
        break;
      default:
        alert(`I don't understand`);
    }
  default:
    alert(`I don't understand the word you said`);
}
