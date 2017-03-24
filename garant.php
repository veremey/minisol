<?php include($_SERVER['DOCUMENT_ROOT'].'/partials/header.php'); ?>

      <section class="section is_animated mod_first">
        <div class="section__inner">
          <h3 class="title__section">Оформление гарантии<span> онлайн</span></h3>
          <div class="section__inside">
            <h6 class="title__subtitle">На данной странице Вы можете оформить гарантию на композитную черепицу ТЕХНОНИКОЛЬ LUXARD. <br> Выберете наиболее удобный для себя способ:</h6>
            <ol class="variants">
              <li class="variant"><a class="variant__link" href="upload/garanty/tn-luxard-garanty.pdf" download>Скачайте</a> и распечатайте форму гарантийного сертификата и заполните её от руки.</li>
              <li class="variant">
                <div class="variant__or">или</div><a class="variant__link border-dotted js-toForm" href="#">заполните</a> предлагающуюся ниже онлайн форму и получите бланк с данными о Вашей покупке на электронную почту. Затем распечатайте.
              </li>
            </ol>
            <div class="liability"><img class="liability__pic" src="static/img/liability-stamp.jpg" alt="изображение">
              <div class="liability__text">
                <p class="liability_desc">Заполненный сертификат действителен при наличии печати продавца, подписи его представителя и указании всей необходимой информации о приобретаемом материале.</p>
                <p class="liability_desc">После заполнения сертификата нужно обратиться к Продавцу с тем, чтобы его представитель заверил сертификат своей подписью и печатью организации.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section is_animated bg-dark" id="application">
        <div class="section__inner">
          <h3 class="title__middle">Онлайн заявка</h3>
          <form class="garant js-validate" method="post" action="/" autocomplete="on">
            <fieldset class="garant__fieldset">
              <input class="garant__inp garant_name" type="text" name="name" required>
              <label class="garant__label" for="name">ФИО</label>
            </fieldset>
            <fieldset class="garant__fieldset">
              <input class="garant__inp garant_city" type="text" name="city" required>
              <label class="garant__label" for="city">Город</label>
            </fieldset>
            <fieldset class="garant__fieldset">
              <input class="garant__inp garant_addres" type="text" name="addres" required>
              <label class="garant__label" for="addres">Адрес</label>
            </fieldset>
            <fieldset class="garant__fieldset">
              <input class="garant__inp garant_objectName" type="text" name="objectName">
              <label class="garant__label" for="objectName">Название объекта</label>
            </fieldset>
            <fieldset class="garant__fieldset">
              <input class="garant__inp garant_tel" type="tel" name="tel" required>
              <label class="garant__label" for="tel">Телефон</label>
            </fieldset>
            <fieldset class="garant__fieldset mod_b20">
              <input class="garant__inp garant_email" type="email" name="email" required>
              <label class="garant__label" for="email">Эл. почта</label>
            </fieldset>
            <fieldset class="garant__fieldset">
              <input class="garant__inp garant_date" type="text" name="date" required>
              <label class="garant__label" for="date">Дата продажи</label>
            </fieldset>
            <fieldset class="garant__fieldset hide-text">
              <input class="garant__inp garant_productCode" type="text" name="productCode" required>
              <label class="garant__label" for="productCode">Производств. код партии (см. на упаковке)</label>
            </fieldset>
            <fieldset class="garant__fieldset">
              <input class="garant__inp garant_square" type="text" name="square" required>
              <label class="garant__label" for="square">Кол-во материала, м²</label>
            </fieldset>
            <fieldset class="garant__fieldset">
              <input class="garant__inp garant_sallerName" type="text" name="sallerName" required>
              <label class="garant__label" for="sallerName">Название фирмы-продавца</label>
            </fieldset>
            <fieldset class="garant__fieldset hide-text">
              <input class="garant__inp garant_sallerPost" type="text" name="sallerPost" required>
              <label class="garant__label" for="sallerPost">Адрес фирмы-представителя (с индексом)</label>
            </fieldset>
            <fieldset class="garant__fieldset">
              <input class="garant__inp garant_sallerTel" type="text" name="sallerTel">
              <label class="garant__label" for="sallerTel">Телефон продавца</label>
            </fieldset>
            <fieldset class="garant__fieldset mod_b20">
              <input class="garant__inp garant_sallerFIO" type="text" name="sallerFIO">
              <label class="garant__label" for="sallerFIO">ФИО продавца</label>
            </fieldset>
            <fieldset class="garant__fieldset select js-select"><span class="select__text js-select-text">Коллекция</span>
              <input class="js-select-input" type="hidden" value="" name="collection" required>
              <ul class="select__list js-select-list">
                <li data-id="0">classic</li>
                <li data-id="1">roman</li>
              </ul>
            </fieldset>
            <fieldset class="garant__fieldset mod_b30 select js-select"><span class="select__text js-select-text">Цвет</span>
              <input class="js-select-input" type="hidden" value="" name="color" required>
              <ul class="select__list js-select-list">
                <li data-id="0">Мокко</li>
                <li data-id="1">Коррал</li>
                <li data-id="2">Абсент</li>
                <li data-id="3">Пробка</li>
                <li data-id="4">Бордо</li>
                <li data-id="5">Алланит</li>
              </ul>
            </fieldset>
            <fieldset class="garant__fieldset mod_b20">
              <textarea class="garant__textarea" name="garantUserComment" placeholder="Комментарий"></textarea>
            </fieldset>
            <fieldset class="garant__fieldset mod_b30">
              <div class="garant__agree">
                <label class="check">
                  <input type="checkbox" name="agree" required><span>Согласен с условиями гарании</span>
                </label>
              </div>
            </fieldset>
            <button class="btn" type="submit">отправить заявку</button>
          </form>
        </div>
      </section>

<?php include($_SERVER['DOCUMENT_ROOT'].'/partials/footer.php'); ?>