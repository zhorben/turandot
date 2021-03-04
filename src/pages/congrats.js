import React from "react";

export default function Congrats() {
  return (
    <div className="message">
      <div className="message-header">
        <img
          alt=""
          height="279"
          src="https://mailing.maison-dellos.com/2021/2021-02-17-1/images/index_01.png"
          width="1000"
        />
      </div>
      <div className="message-info">
        <div className="message-content">
        <div className="message-title">23 февраля в Maison Dellos!</div>
        <div className="message-subtitle">
          23 февраля в «Бочке»: съешь, сколько сможешь
        </div>
        <p className="message-subinfo">
          «Бочка» приглашает всех мужчин провести 23 февраля со вкусом: вас ждут
          «Выходные на гриле»! Большое количество мясных блюд ресторан подает по
          принципу бразильского родизио – без ограничения и за фиксированную
          стоимость в 2590 рублей. Сидя за столом у огромного мангала, можно
          наблюдать за тем, как шеф Игорь Бедняков готовит «Стейк мясника»,
          говяжьи ребра, корейку и язык ягненка, куриные крылья в остром соусе,
          шашлык и буженину в соусе BBQ.
        </p>
        <p className="message-subinfo">
          Специальное предложение доступно как в праздничный день, <br /> так и каждые
          выходные с 13.00 до 18.00.
        </p>
        </div>
        <div className="message-main">
          <img
          className="message-main__icon"
            alt=""
            src="https://mailing.maison-dellos.com/2021/2021-02-17-1/images/big1.jpg"
            width="930"
          />
        </div>
        <div className="message-footer">
          <img
            alt=""
            height="269"
            src="https://mailing.maison-dellos.com/2021/2021-02-17-1/images/index_08.png"
            width="1000"
          />
        </div>
      </div>
      <div className="message-footer__link">
        Вы получили это письмо, потому что выразили свое согласие получать
        сообщения от "Maison Dellos".
        <br />
        Если Вы хотите отказаться от получения писем, нажмите
        <a href="https://sendsay.ru/backend/member/unsub/1RkGdj5AeI78rIYprYLYUM_5k7lAJpMcfUBbU-uM38G2aKQVe89fyW3qA7WTEwVXsXeYIn5kYDw">
          здесь
        </a>
        .
      </div>
    </div>
  );
}
