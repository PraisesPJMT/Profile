import React from 'react';
import '../styles/Links.css';

const Links = () => {
  const links = [
    {
      id: 'tweets', name: 'Twitter Link', path: 'https://twitter.com/PraisesPJMT', subtext: 'Reach out to me on Twitter',
    },
    {
      id: 'btn__zuri', name: 'Zuri Team', path: 'https://training.zuri.team/', subtext: 'Meet the Zuri Team',
    },
    {
      id: 'books', name: 'Zuri Books', path: 'https://books.zuri.team/', subtext: 'Find amazing books about design and coding',
    },
    {
      id: 'book__python', name: 'Python Books', path: 'https://books.zuri.team/python-for-beginners?ref_id=praises', subtext: 'Learn Python and become a pro with this book',
    },
    {
      id: 'pitch', name: 'Background Check for Coders', path: 'https://background.zuri.team/', subtext: 'Get talented software developers from Zuri',
    },
    {
      id: 'book__design', name: 'Design Books', path: 'https://books.zuri.team/design-rules', subtext: 'Learn how to design the next masterpieces using this book',
    },
  ];
  return (
    <section className="links">
      { links.map((link) => (
        <a
          key={link.id}
          id={link.id}
          className="link"
          href={link.path}
          rel="noreferrer"
          data-tooltip={link.subtext}
          target="_blank"
        >
          { link.name}
        </a>
      ))}
    </section>
  );
};

export default Links;
