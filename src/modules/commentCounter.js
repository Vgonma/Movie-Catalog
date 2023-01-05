export default function commentCounter(DOMContainer) {
  if ((!DOMContainer) || (!DOMContainer.children)) return 0;
  let count = 0;
  for (let i = 0; i < DOMContainer.children.length; i += 1) {
    if (DOMContainer.children[i].classList.contains('comment')) count += 1;
  }
  return count;
}
