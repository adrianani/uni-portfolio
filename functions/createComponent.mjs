export default function createElement(html, css) {
  const template = document.createElement('template');

  if (css) {
    const style = document.createElement('style');

    style.appendChild(document.createTextNode(css));

    document.head.appendChild(style);
  }

  template.innerHTML = html.trim();
  
  return template.content.firstChild;
}
