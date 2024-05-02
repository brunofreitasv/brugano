import './Baseboard.css';

export const  Baseboard = (props) => {
  const socialLinks = [
    {
        img: '/imagens/fb.png',
        link: 'https://www.facebook.com/',
    },
    {
        img: '/imagens/ig.png',
        link: 'https://www.instagram.com/',
    },
    {
        img: '/imagens/tw.png',
        link: 'https://twitter.com/',
    }
  ];

  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='social-media'>
                {
                    socialLinks.map(s => (
                        <a href={s.link} key={s.img}>
                            <img src={s.img} alt={s.link} />
                        </a>
                    ))
                }
            </div>
            <div className="copyright">
                <p>© 2024 Brugano</p>
            </div>
        </div>
    </footer>
  );
}