import React, { useEffect } from 'react';

const Aside = () => {
  // handle scrolling and active links
  useEffect(() => {
    const articles = document.querySelectorAll(
      'article, #projects > .contents > div'
    );
    console.log(articles);
    const asideToggle = document.querySelector('.aside-toggle');
    window.addEventListener('scroll', function () {
      const headerPositionBottom =
        document.querySelector('header').offsetHeight;
      if (window.scrollY >= headerPositionBottom) {
        asideToggle.classList.add('fixed');
      } else {
        asideToggle.classList.remove('fixed');
      }
      articles.forEach((article) => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        const articleTop = article.getBoundingClientRect().top;
        const articleBottom = article.getBoundingClientRect().bottom;
        const articleId = article.getAttribute('id');
        const asideLinks = document.querySelectorAll('aside a');
        if (articleTop <= 200 && articleBottom >= 200) {
          asideLinks.forEach((asideLink) => {
            asideLink.classList.remove('active');
            if (asideLink.getAttribute('href') === `#${articleId}`) {
              asideLink.classList.add('active');
            }
          });
        }
      });
    });
  }, []);

  const handleToggle = () => {
    const asideToggle = document.querySelector('.aside-toggle');
    const aside = document.querySelector('aside');
    const body = document.querySelector('body');
    asideToggle.classList.toggle('active');
    aside.classList.toggle('active');
    body.classList.toggle('aside-open');
  };

  return (
    <>
      <div onClick={handleToggle} className="aside-toggle">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <aside>
        <nav>
          <ul>
            <li>
              <a href="#about" className="active">
                About
              </a>
            </li>
            <li>
              <a href="#projects">Projects</a>
              <ul>
                <li>
                  <a href="#projects-companiesapi">Companies API</a>
                </li>
                <li>
                  <a href="#projects-algovisualizer">Algovisualizer</a>
                </li>
                <li>
                  <a href="#projects-deployment">Deployment Guide</a>
                </li>
                {/* <li>
                  <a href="#Projects-Podcast">Educational Podcast</a>
                </li> */}
                <li>
                  <a href="#projects-tetris">Tetris</a>
                </li>
                <li>
                  <a href="#projects-snake">Snake</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Aside;
