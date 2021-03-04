import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";

import { Router } from "components/Router";
import "./app.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <header className="header">
        <div className="header-wrap">
          <a className="logo-img" href="https://www.turandot-palace.ru/">
            <img
              alt=""
              src="https://www.turandot-palace.ru/wp-content/uploads/2017/02/w.png"
              width="220px"
            />
          </a>

          <div className="menu-right">
            <div className="footer-links">
              <div className="links-item">
                <a
                  className="links"
                  href="https://twitter.com/tvrandot"
                  title="Follow Me on twitter"
                >
                  <img
                    className="links-img"
                    alt=""
                    src="https://www.turandot-palace.ru/wp-content/plugins/themewich-shortcodes/images/icons/twitter.svg"
                  />
                </a>
              </div>
              <div className="links-item">
                <a
                  className="links"
                  href="http://instagram.com/turandot.palace"
                  title="Follow Me on instagram"
                >
                  <img
                    className="links-img"
                    alt=""
                    src="https://www.turandot-palace.ru/wp-content/plugins/themewich-shortcodes/images/icons/instagram.svg)"
                  />
                </a>
              </div>
              <div className="links-item">
                <a
                  className="links"
                  href="https://www.facebook.com/turandot.palace"
                  title="Follow Me on facebook"
                >
                  <img
                    className="links-img"
                    alt=""
                    src="https://www.turandot-palace.ru/wp-content/plugins/themewich-shortcodes/images/icons/facebook.svg"
                  />
                </a>
              </div>
              <div className="links-item">
                <a
                  className="links"
                  href="https://www.tripadvisor.ru/Restaurant_Review-g298484-d811062-Reviews-Turandot-Moscow_Central_Russia.html"
                  title="Follow Me on tripadvisor"
                >
                  <img
                    className="links-img"
                    alt=""
                    src="https://www.turandot-palace.ru/wp-content/plugins/themewich-shortcodes/images/icons/tripadvisor.svg"
                  />
                </a>
              </div>
              <div className="links-item">
                <a
                  className="links"
                  href="https://www.pinterest.ru/maisondellos/turandot-restaurant-%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD-%D1%82%D1%83%D1%80%D0%B0%D0%BD%D0%B4%D0%BE%D1%82/"
                  title="Follow Me on pinterest"
                >
                  <img
                    className="links-img"
                    alt=""
                    src="https://www.turandot-palace.ru/wp-content/plugins/themewich-shortcodes/images/icons/pinterest.svg"
                  />
                </a>
              </div>
            </div>
            <div className="menu-items">
              <nav className="menu">
                <ul className="menu-list">
                  <li className="">
                    <a href="#" className="menu-link menu-link__open">
                      РЕСТОРАН
                    </a>
                    <ul className="sub-menu__list">
                      <li>
                        <a
                          href="https://www.turandot-palace.ru/istoriya/"
                          className="sub-menu__link"
                        >
                          История
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.turandot-palace.ru/shef-povar/"
                          className="sub-menu__link"
                        >
                          Шеф-повар
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.turandot-palace.ru/restoran-dlya-svidanij/"
                          className="sub-menu__link"
                        >
                          Ресторан для свиданий
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.turandot-palace.ru/bankety/"
                          className="sub-menu__link"
                        >
                          Банкеты
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.turandot-palace.ru/svadba-vo-dvorce/"
                          className="sub-menu__link"
                        >
                          Свадьба
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dellos-catering.ru/"
                          className="sub-menu__link"
                        >
                          Выездной ресторан
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.turandot-palace.ru/karera/"
                          className="sub-menu__link"
                        >
                          Карьера
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <a href="#" className="menu-link menu-link__open">
                      МЕНЮ
                    </a>
                    <ul className="sub-menu__list">
                      <li>
                        <a
                          href="https://www.turandot-palace.ru/osnovnoe-menyu/"
                          className="sub-menu__link"
                        >
                          Основное меню
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.turandot-palace.ru/specpredlozheniya/"
                          className="sub-menu__link"
                        >
                          Специальные
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.turandot-palace.ru/gastroset-vostok-zapad/"
                          className="sub-menu__link"
                        >
                          Гастросет Восток-Запад
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.turandot-palace.ru/menyu-bez-granic-v-restorane-turandot/"
                          className="sub-menu__link"
                        >
                          Меню без границ по будням
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.turandot-palace.ru/0_menu/Wine_List.pdf"
                          className="sub-menu__link"
                        >
                          Винная карта
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.turandot-palace.ru/0_menu/bar_card.pdf"
                          className="sub-menu__link"
                        >
                          Коктейльная карта
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.turandot-palace.ru/chajnaya-karta/"
                          className="sub-menu__link"
                        >
                          Чайная карта
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <a
                      href="https://www.turandot-palace.ru/interer/#1"
                      className="menu-link"
                    >
                      ИНТЕРЬЕР
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.turandot-palace.ru/gastroset-vostok-zapad/"
                      className="menu-link menu-link__set"
                    >
                      СЕТ ВОСТОК-ЗАПАД
                    </a>
                  </li>
                  <li className="https://www.turandot-palace.ru/branch/">
                    <a href="" className="menu-link">
                      БРАНЧ
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.turandot-palace.ru/sobytiya/"
                      className="menu-link"
                    >
                      СОБЫТИЯ
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://dellos-delivery.ru/food-delivery/restoran-turandot/"
                      className="menu-link"
                    >
                      ДОСТАВКА
                    </a>
                  </li>
                  <li className="https://www.turandot-palace.ru/contact/">
                    <a href="" className="menu-link">
                      КОНТАКТЫ
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.turandot-palace.ru/rezerv/"
                      className="menu-link menu-link__reserve "
                    >
                      ЗАБРОНИРОВАТЬ
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.turandot-palace.ru/en/news/"
                      className="menu-link"
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFqSURBVHjaYrzOwPAPjJgYQEDAleHVbhADIvgHLPgHiQ0QQCxAlkR9NW8sw+cV/1gV/7Gb/hV4+vfzhj8Mv/78//Pn/+/f/8AkhH1t0yaAAAJp4I37zyz2lDfu79uqv/++/WYz+cuq/vvLxt8gdb+A5K9/v34B2SyyskBLAAII5JAva/7/+/z367a/f3/8ZuT9+//Pr78vQUrB6n4CSSj6/RuoASCAWEDO/fD3ddEfhv9/OE3/sKj8/n7k9/fDQNUIs/+DVf8HawAIIJCT/v38C3Hr95N/GDh/f94AVvT7N8RUBpjxQAVADQABBNLw/y/Ifwy/f/399ufTOpDBEPf8g5sN0QBEDAwAAQTWABEChgOSA9BVA00E2wAQQCANQBbEif/AzoCqgLkbbBYwWP/+//sXqBYggFhAkfL7D7OkJFCOCSj65zfUeFjwg8z++/ffX5AGoGKAAGI8jhSRyIw/SJH9D4aAYQoQYAA6rnMw1jU2vQAAAABJRU5ErkJggg=="
                        title="中文 (中国)"
                        alt="中文 (中国)"
                        width="16"
                        height="11"
                      />
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.turandot-palace.ru/zh/F"
                      className="menu-link"
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAflJREFUeNpinDRzn5qN3uFDt16+YWBg+Pv339+KGN0rbVP+//2rW5tf0Hfy/2+mr99+yKpyOl3Ydt8njEWIn8f9zj639NC7j78eP//8739GVUUhNUNuhl8//ysKeZrJ/v7z10Zb2PTQTIY1XZO2Xmfad+f7XgkXxuUrVB6cjPVXef78JyMjA8PFuwyX7gAZj97+T2e9o3d4BWNp84K1NzubTjAB3fH0+fv6N3qP/ir9bW6ozNQCijB8/8zw/TuQ7r4/ndvN5mZgkpPXiis3Pv34+ZPh5t23//79Rwehof/9/NDEgMrOXHvJcrllgpoRN8PFOwy/fzP8+gUlgZI/f/5xcPj/69e/37//AUX+/mXRkN555gsOG2xt/5hZQMwF4r9///75++f3nz8nr75gSms82jfvQnT6zqvXPjC8e/srJQHo9P9fvwNtAHmG4f8zZ6dDc3bIyM2LTNlsbtfM9OPHH3FhtqUz3eXX9H+cOy9ZMB2o6t/Pn0DHMPz/b+2wXGTvPlPGFxdcD+mZyjP8+8MUE6sa7a/xo6Pykn1s4zdzIZ6///8zMGpKM2pKAB0jqy4UE7/msKat6Jw5mafrsxNtWZ6/fjvNLW29qv25pQd///n+5+/fxDDVbcc//P/zx/36m5Ub9zL8+7t66yEROcHK7q5bldMBAgwADcRBCuVLfoEAAAAASUVORK5CYII="
                        title="English"
                        alt="English"
                        width="16"
                        height="11"
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
      <footer className="footer">
        <div className="footer-wrapp">
          <div className="footer-logo">
            <a href="https://wttc.org/">
              <img
                alt=""
                width="200px"
                src="https://www.turandot-palace.ru/wp-content/uploads/2017/01/Maison-Dellos_new-Logo.png"
              />
            </a>
          </div>
          <div className="footer-sponsor">
            <a href="https://maison-dellos.com/">
              <img
                alt=""
                width="100px"
                src="https://www.turandot-palace.ru/wp-content/uploads/2021/01/wttc-safetravels_22.png"
              />
            </a>
          </div>
          <div className="footer-wrap">
            <div className="footer-info">
              © COPYRIGHT 2021 РЕСТОРАН «ТУРАНДОТ»,{" "}
              <a href="https://maison-dellos.com/">MAISON DELLOS</a>{" "}
            </div>
            <div className="footer-links">
              <div className="links-item">
                <a
                  className="links"
                  href="https://twitter.com/tvrandot"
                  title="Follow Me on twitter"
                >
                  <img
                    className="links-img"
                    alt=""
                    src="https://www.turandot-palace.ru/wp-content/plugins/themewich-shortcodes/images/icons/twitter.svg"
                  />
                </a>
              </div>
              <div className="links-item">
                <a
                  className="links"
                  href="http://instagram.com/turandot.palace"
                  title="Follow Me on instagram"
                >
                  <img
                    className="links-img"
                    alt=""
                    src="https://www.turandot-palace.ru/wp-content/plugins/themewich-shortcodes/images/icons/instagram.svg)"
                  />
                </a>
              </div>
              <div className="links-item">
                <a
                  className="links"
                  href="https://www.facebook.com/turandot.palace"
                  title="Follow Me on facebook"
                >
                  <img
                    className="links-img"
                    alt=""
                    src="https://www.turandot-palace.ru/wp-content/plugins/themewich-shortcodes/images/icons/facebook.svg"
                  />
                </a>
              </div>
              <div className="links-item">
                <a
                  className="links"
                  href="https://www.tripadvisor.ru/Restaurant_Review-g298484-d811062-Reviews-Turandot-Moscow_Central_Russia.html"
                  title="Follow Me on tripadvisor"
                >
                  <img
                    className="links-img"
                    alt=""
                    src="https://www.turandot-palace.ru/wp-content/plugins/themewich-shortcodes/images/icons/tripadvisor.svg"
                  />
                </a>
              </div>
              <div className="links-item">
                <a
                  className="links"
                  href="https://www.pinterest.ru/maisondellos/turandot-restaurant-%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD-%D1%82%D1%83%D1%80%D0%B0%D0%BD%D0%B4%D0%BE%D1%82/"
                  title="Follow Me on pinterest"
                >
                  <img
                    className="links-img"
                    alt=""
                    src="https://www.turandot-palace.ru/wp-content/plugins/themewich-shortcodes/images/icons/pinterest.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Root>
  );
}

export default App;
