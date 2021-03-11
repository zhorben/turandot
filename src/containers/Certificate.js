import React from "react";
import { useRouteData } from "react-static";
//
import { Link } from "components/Router";

export default function Certificate(imageUrl, title) {
  const { certificate } = useRouteData();

  return (
    <div className="certificate">
      <div className="container">
        <div className="title">Праздничные мероприятия 6, 7, 8 марта</div>
        <div className="certificate-info">
          <div className="certificate-wrap">
            <img
              className="certificate-img"
              src="https://www.turandot-palace.ru/wp-content/uploads/2021/02/veb-banner-karmen.png"
              alt=""
            />
            <div className="certificate-item">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              voluptas aut deserunt, delectus ratione expedita modi laudantium
              aliquam, nesciunt magni doloremque velit iure, exercitationem
              impedit soluta beatae rerum commodi! Saepe. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Ipsam voluptas aut deserunt,
              delectus ratione expedita modi laudantium aliquam, nesciunt magni
              doloremque velit iure, exercitationem impedit soluta beatae rerum
              commodi! Saepe. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Ipsam voluptas aut deserunt, delectus ratione
              expedita modi laudantium aliquam, nesciunt magni doloremque velit
              iure, exercitationem impedit soluta beatae rerum commodi! Saepe.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              voluptas aut deserunt, delectus ratione expedita modi laudantium
              aliquam, nesciunt magni doloremque velit iure, exercitationem
              impedit soluta beatae rerum commodi! Saepe. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Ipsam voluptas aut deserunt,
              delectus ratione expedita modi laudantium aliquam, nesciunt magni
              doloremque velit iure, exercitationem impedit soluta beatae rerum
              commodi! Saepe. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Ipsam voluptas aut deserunt, delectus ratione
              expedita modi laudantium aliquam, nesciunt magni doloremque velit
              iure, exercitationem impedit soluta beatae rerum commodi! Saepe.
            </div>
          </div>
          <div className="active">
            <label for="sum" className="label">
              СУММА ОПЛАТЫ
            </label>
            <input
              id="sum"
              className="write"
              placeholder="Введите сумму"
              required
              type="number"
              min="10000"
              max="100000"
            />
          </div>
          <fieldset className="contact-form">
            <legend className="form-title">Контактные данные</legend>
            <div className="form-info">
              Для совершения корректного платежа, укажите свои контактные
              данные. Необходимо заполнить все поля!
            </div>
            <div className="form-wrap">
              <div className="form">
                <label for="name" className="label">
                  ИМЯ *
                </label>
                <input id="name" className="write" required type="text" />
              </div>
              <div className="form">
                <label for="last-name" className="label">
                  ФАМИЛИЯ *
                </label>
                <input id="last-name" className="write" required type="text" />
              </div>
              <div className="form">
                <label for="phone" className="label">
                  ТЕЛЕФОН *
                </label>
                <input
                  id="phone"
                  className="write"
                  placeholder="89850000000"
                  required
                  type="number"
                />
              </div>
              <div className="form">
                <label for="email" className="label">
                  EMAIL *
                </label>
                <input id="email" className="write" required type="email" />
              </div>
            </div>
          </fieldset>
          <div>
            <button className="btn btn-form ">Продолжить оформление</button>
          </div>
          <div className="agreement">
            Нажимая кнопку «Продолжить оформление», Вы принимаете условия 
            <a
              className="link"
              href="https://turandot-palace.ru/soglashenie/polzovatelskoe-soglashenie-17-11-15.pdf"
            >
              пользовательского соглашения
            </a>
            <img
              alt=""
              className="currency"
              width="250px"
              height="20px"
              src="https://www.turandot-palace.ru/wp-content/uploads/2018/11/Logo-pay.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
