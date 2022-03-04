import Header from '../components/Header/Header.mjs';

export default function HomePage() {
  const { body } = document;

  body.appendChild(Header);
}
