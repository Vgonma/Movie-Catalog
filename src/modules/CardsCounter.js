export default class CardsCounter {
  getCount = (html) => {
    if (!html) return 0;
    if (!html.querySelectorAll) return 0;
    const nodes = html.querySelectorAll('.card');
    if (!nodes) return 0;
    const nodesArray = [...nodes];
    return nodesArray.length;
  };
}
