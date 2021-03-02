import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";

import "./app.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <div className="container">
      <div className="title">Подарочные сертификаты</div>
      <div className="content">
        <div className="content-link">
          <a
            href="https://www.turandot-palace.ru/prazdnichnye-meropriyatiya-6-7-8-marta/"
            className="link"
          >
            <img src="https://www.turandot-palace.ru/wp-content/uploads/2021/02/veb-banner-karmen.png" />
          </a>
          <div className="info">
            Праздничные мероприятия 6, 7, 8 марта
            <button className="btn">Купить сертификат</button>
          </div>
        </div>
        <div className="content-link">
          <a
            href="https://www.turandot-palace.ru/latino-vecherinka-28-fevralya-1900/"
            className="link"
          >
            <img src="https://www.turandot-palace.ru/wp-content/uploads/2021/02/veb-banner-latino.jpg" />
          </a>
          <div className="info">
            Латино вечеринка 28 февраля 19:00
            <button className="btn">Купить сертификат</button>
          </div>
        </div>
        <div className="content-link">
          <a
            href="https://www.turandot-palace.ru/branch-23-fevralya/"
            className="link"
          >
            <img src="https://www.turandot-palace.ru/wp-content/uploads/2021/02/veb-banner-muzhskoj-branch.jpg" />
          </a>
          <div className="info">Бранч 23 февраля
          <button className="btn">Купить сертификат</button>
          </div>
        </div>
        <div className="content-link">
          <a
            href="https://www.turandot-palace.ru/prazdnichnye-meropriyatiya-6-7-8-marta/"
            className="link"
          >
            <img src="https://www.turandot-palace.ru/wp-content/uploads/2021/02/veb-banner-karmen.png" />
          </a>
          <div className="info">
            Праздничные мероприятия 6, 7, 8 марта
            <button className="btn">Купить сертификат</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
