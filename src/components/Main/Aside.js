import React, { useEffect } from 'react';
import DarkModeBtn from './DarkModeBtn';

const Aside = () => {
  // handle scrolling and active links
  useEffect(() => {
    const articles = document.querySelectorAll(
      'article, #projects > .contents > div'
    );
    const asideToggle = document.querySelector('.aside-toggle');
    const aside = document.querySelector('aside');
    window.addEventListener('scroll', function () {
      const headerPositionBottom =
        document.querySelector('header').offsetHeight;
      if (window.scrollY >= headerPositionBottom) {
        asideToggle.classList.add('fixed');
        aside.classList.add('fixed');
      } else {
        asideToggle.classList.remove('fixed');
        aside.classList.remove('fixed');
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

  const handleToggle = (_, linkClick = false) => {
    const asideToggle = document.querySelector('.aside-toggle');
    const aside = document.querySelector('aside');
    const body = document.querySelector('body');
    if (!linkClick) {
      asideToggle.classList.toggle('active');
      aside.classList.toggle('active');
      body.classList.toggle('aside-open');
    } else if (linkClick && aside.classList.contains('active')) {
      asideToggle.classList.remove('active');
      aside.classList.remove('active');
      body.classList.remove('aside-open');
    }
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
              <a
                href="#about"
                className="active"
                onClick={(e) => handleToggle(e, true)}
              >
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleToggle(e, true)}>
                Projects
              </a>
              <ul>
                <li>
                  <a
                    href="#projects-companiesapi"
                    onClick={(e) => handleToggle(e, true)}
                  >
                    Companies API
                  </a>
                </li>
                <li>
                  <a
                    href="#projects-algovisualizer"
                    onClick={(e) => handleToggle(e, true)}
                  >
                    Algovisualizer
                  </a>
                </li>
                <li>
                  <a
                    href="#projects-deployment"
                    onClick={(e) => handleToggle(e, true)}
                  >
                    Deployment Guide
                  </a>
                </li>
                {/* <li>
                  <a href="#Projects-Podcast">Educational Podcast</a>
                </li> */}
                <li>
                  <a
                    href="#projects-tetris"
                    onClick={(e) => handleToggle(e, true)}
                  >
                    Tetris
                  </a>
                </li>
                <li>
                  <a
                    href="#projects-snake"
                    onClick={(e) => handleToggle(e, true)}
                  >
                    Snake
                  </a>
                </li>
              </ul>
            </li>
            {/* <li>
              <a href="#resume">Resume</a>
            </li> */}
            <li>
              <a href="#contact" onClick={(e) => handleToggle(e, true)}>
                Contact
              </a>
            </li>
            <DarkModeBtn />
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Aside;
