<?php include($_SERVER['DOCUMENT_ROOT'].'/partials/header.php'); ?>

      <section class="section is_animated mod_first">
        <div class="section__inner">
          <h3 class="title__section">Фотогалерея</h3>
        </div>
      </section>
      <form class="filter" method="post" action="/" autocomplete="on">
        <div class="filter__wrap">
          <div class="select js-select"><span class="select__text js-select-text" vall="Все регионы">Все регионы</span>
            <input class="js-select-input" type="hidden" value="0" placeholder="Все регионы">
            <ul class="select__list js-select-list">
              <li data-id="0">Все регионы</li>
              <li data-id="1">Россия</li>
              <li data-id="2">Украина</li>
              <li data-id="3">Белоруссия</li>
              <li data-id="4">Татарстан</li>
              <li data-id="5">Казахстан</li>
            </ul>
          </div>
          <div class="select js-select"><span class="select__text js-select-text">Все коллекции</span>
            <input class="js-select-input" type="hidden" value="0" placeholder="Все коллекции">
            <ul class="select__list js-select-list mod_bdr">
              <li data-id="0">Все коллекции</li>
              <li data-id="1">LUXARD CLASSIC</li>
              <li data-id="2">LUXARD ROMAN</li>
            </ul>
          </div><a class="filter__btn hiden" href="#"><span>сбросить</span></a>
        </div>
      </form>
      <div class="section__inner">
        <div class="collage shadow-hover">
          <div class="collage__pic js-gallery" data-overlay="pic-01"><img src="static/img/gallery/01.jpg" alt="изображение"></div>
          <div class="collage__content">
            <div class="collage__head">
              <div class="collage__color">
                <div class="collage__color_info"><img class="collage__color-img" src="static/img/gallery/colors/allanit.jpg" alt="изображение"></div>
                <div class="collage__head_info">
                  <p class="collage__desc">цвет</p><a class="collage__link" href="product-classic.php">алланит</a>
                </div>
              </div>
              <div class="collage__collection">
                <div class="collage__head_info">
                  <p class="collage__desc">коллекция технониколь</p><a class="collage__link" href="product-classic.php">Luxard Classic</a>
                </div>
              </div>
            </div>
            <div class="collage__footer"><i class="icon-locate"></i>
              <div class="collage__footer_info"><strong>Загородный дом</strong>
                <p>Казахстан. Астана.<span>Посёлок Кордай.</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="collage shadow-hover">
          <div class="collage__pic js-gallery" data-overlay="pic-01"><img src="static/img/gallery/02.jpg" alt="изображение"></div>
          <div class="collage__content">
            <div class="collage__head">
              <div class="collage__color">
                <div class="collage__color_info"><img class="collage__color-img" src="static/img/gallery/colors/mokko.jpg" alt="изображение"></div>
                <div class="collage__head_info">
                  <p class="collage__desc">цвет</p><a class="collage__link" href="product-classic.php">мокко</a>
                </div>
              </div>
              <div class="collage__collection">
                <div class="collage__head_info">
                  <p class="collage__desc">коллекция технониколь</p><a class="collage__link" href="product-classic.php">Luxard Classic</a>
                </div>
              </div>
            </div>
            <div class="collage__footer"><i class="icon-locate"></i>
              <div class="collage__footer_info"><strong>Загородный дом</strong>
                <p>Казахстан. Астана.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="collage shadow-hover">
          <div class="collage__pic js-gallery" data-overlay="pic-01"><img src="static/img/gallery/03.jpg" alt="изображение"></div>
          <div class="collage__content">
            <div class="collage__head">
              <div class="collage__color">
                <div class="collage__color_info"><img class="collage__color-img" src="static/img/gallery/colors/mokko.jpg" alt="изображение"></div>
                <div class="collage__head_info">
                  <p class="collage__desc">цвет</p><a class="collage__link" href="product-classic.php">мокко</a>
                </div>
              </div>
              <div class="collage__collection">
                <div class="collage__head_info">
                  <p class="collage__desc">коллекция технониколь</p><a class="collage__link" href="product-classic.php">Luxard Classic</a>
                </div>
              </div>
            </div>
            <div class="collage__footer"><i class="icon-locate"></i>
              <div class="collage__footer_info"><strong>Загородный дом</strong>
                <p>Казахстан. Астана.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="collage shadow-hover">
          <div class="collage__pic js-gallery" data-overlay="pic-01"><img src="static/img/gallery/04.jpg" alt="изображение"></div>
          <div class="collage__content">
            <div class="collage__head">
              <div class="collage__color">
                <div class="collage__color_info"><img class="collage__color-img" src="static/img/gallery/colors/coral.jpg" alt="изображение"></div>
                <div class="collage__head_info">
                  <p class="collage__desc">цвет</p><a class="collage__link" href="product-roman.php">коралл</a>
                </div>
              </div>
              <div class="collage__collection">
                <div class="collage__head_info">
                  <p class="collage__desc">коллекция технониколь</p><a class="collage__link" href="product-roman.php">Luxard Roman</a>
                </div>
              </div>
            </div>
            <div class="collage__footer"><i class="icon-locate"></i>
              <div class="collage__footer_info"><strong>Загородный дом</strong>
                <p>Россия. Санк-Петербург</p>
              </div>
            </div>
          </div>
        </div>
        <div class="collage shadow-hover">
          <div class="collage__pic js-gallery" data-overlay="pic-01"><img src="static/img/gallery/05.jpg" alt="изображение"></div>
          <div class="collage__content">
            <div class="collage__head">
              <div class="collage__color">
                <div class="collage__color_info"><img class="collage__color-img" src="static/img/gallery/colors/bordo.jpg" alt="изображение"></div>
                <div class="collage__head_info">
                  <p class="collage__desc">цвет</p><a class="collage__link" href="product-roman.php">бордо</a>
                </div>
              </div>
              <div class="collage__collection">
                <div class="collage__head_info">
                  <p class="collage__desc">коллекция технониколь</p><a class="collage__link" href="product-roman.php">Luxard Roman</a>
                </div>
              </div>
            </div>
            <div class="collage__footer"><i class="icon-locate"></i>
              <div class="collage__footer_info"><strong>Загородный дом</strong>
                <p>Татарстан. Казань</p>
              </div>
            </div>
          </div>
        </div>
        <div class="collage shadow-hover">
          <div class="collage__pic js-gallery" data-overlay="pic-01"><img src="static/img/gallery/06.jpg" alt="изображение"></div>
          <div class="collage__content">
            <div class="collage__head">
              <div class="collage__color">
                <div class="collage__color_info"><img class="collage__color-img" src="static/img/gallery/colors/allanit.jpg" alt="изображение"></div>
                <div class="collage__head_info">
                  <p class="collage__desc">цвет</p><a class="collage__link" href="product-classic.php">алланит</a>
                </div>
              </div>
              <div class="collage__collection">
                <div class="collage__head_info">
                  <p class="collage__desc">коллекция технониколь</p><a class="collage__link" href="product-classic.php">Luxard Classic</a>
                </div>
              </div>
            </div>
            <div class="collage__footer"><i class="icon-locate"></i>
              <div class="collage__footer_info"><strong>Загородный дом</strong>
                <p>Россия. Московская область</p>
              </div>
            </div>
          </div>
        </div>
        <div class="collage shadow-hover">
          <div class="collage__pic js-gallery" data-overlay="pic-01"><img src="static/img/gallery/07.jpg" alt="изображение"></div>
          <div class="collage__content">
            <div class="collage__head">
              <div class="collage__color">
                <div class="collage__color_info"><img class="collage__color-img" src="static/img/gallery/colors/mokko.jpg" alt="изображение"></div>
                <div class="collage__head_info">
                  <p class="collage__desc">цвет</p><a class="collage__link" href="product-classic.php">мокко</a>
                </div>
              </div>
              <div class="collage__collection">
                <div class="collage__head_info">
                  <p class="collage__desc">коллекция технониколь</p><a class="collage__link" href="product-classic.php">Luxard Classic</a>
                </div>
              </div>
            </div>
            <div class="collage__footer"><i class="icon-locate"></i>
              <div class="collage__footer_info"><strong>Загородный дом</strong>
                <p>Казахстан. Астана.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="collage shadow-hover">
          <div class="collage__pic js-gallery" data-overlay="pic-01"><img src="static/img/gallery/08.jpg" alt="изображение"></div>
          <div class="collage__content">
            <div class="collage__head">
              <div class="collage__color">
                <div class="collage__color_info"><img class="collage__color-img" src="static/img/gallery/colors/probka.jpg" alt="изображение"></div>
                <div class="collage__head_info">
                  <p class="collage__desc">цвет</p><a class="collage__link" href="product-classic.php">пробка</a>
                </div>
              </div>
              <div class="collage__collection">
                <div class="collage__head_info">
                  <p class="collage__desc">коллекция технониколь</p><a class="collage__link" href="product-classic.php">Luxard Classic</a>
                </div>
              </div>
            </div>
            <div class="collage__footer"><i class="icon-locate"></i>
              <div class="collage__footer_info"><strong>Загородный дом</strong>
                <p>Казахстан. Астана.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="collage shadow-hover">
          <div class="collage__pic js-gallery" data-overlay="pic-01"><img src="static/img/gallery/09.jpg" alt="изображение"></div>
          <div class="collage__content">
            <div class="collage__head">
              <div class="collage__color">
                <div class="collage__color_info"><img class="collage__color-img" src="static/img/gallery/colors/bordo.jpg" alt="изображение"></div>
                <div class="collage__head_info">
                  <p class="collage__desc">цвет</p><a class="collage__link" href="product-roman.php">Бордо</a>
                </div>
              </div>
              <div class="collage__collection">
                <div class="collage__head_info">
                  <p class="collage__desc">коллекция технониколь</p><a class="collage__link" href="product-roman.php">Luxard Roman</a>
                </div>
              </div>
            </div>
            <div class="collage__footer"><i class="icon-locate"></i>
              <div class="collage__footer_info"><strong>Загородный дом</strong>
                <p>Татарстан. Казань</p>
              </div>
            </div>
          </div>
        </div>
        <div class="collage shadow-hover">
          <div class="collage__pic js-gallery" data-overlay="pic-01"><img src="static/img/gallery/04.jpg" alt="изображение"></div>
          <div class="collage__content">
            <div class="collage__head">
              <div class="collage__color">
                <div class="collage__color_info"><img class="collage__color-img" src="static/img/gallery/colors/coral.jpg" alt="изображение"></div>
                <div class="collage__head_info">
                  <p class="collage__desc">цвет</p><a class="collage__link" href="product-roman.php">коралл</a>
                </div>
              </div>
              <div class="collage__collection">
                <div class="collage__head_info">
                  <p class="collage__desc">коллекция технониколь</p><a class="collage__link" href="product-roman.php">Luxard Roman</a>
                </div>
              </div>
            </div>
            <div class="collage__footer"><i class="icon-locate"></i>
              <div class="collage__footer_info"><strong>Загородный дом</strong>
                <p>Казахстан. Астана.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="collage shadow-hover">
          <div class="collage__pic js-gallery" data-overlay="pic-01"><img src="static/img/gallery/05.jpg" alt="изображение"></div>
          <div class="collage__content">
            <div class="collage__head">
              <div class="collage__color">
                <div class="collage__color_info"><img class="collage__color-img" src="static/img/gallery/colors/bordo.jpg" alt="изображение"></div>
                <div class="collage__head_info">
                  <p class="collage__desc">цвет</p><a class="collage__link" href="product-roman.php">бордо</a>
                </div>
              </div>
              <div class="collage__collection">
                <div class="collage__head_info">
                  <p class="collage__desc">коллекция технониколь</p><a class="collage__link" href="product-roman.php">Luxard Roman</a>
                </div>
              </div>
            </div>
            <div class="collage__footer"><i class="icon-locate"></i>
              <div class="collage__footer_info"><strong>Загородный дом</strong>
                <p>Татарстан. Казань</p>
              </div>
            </div>
          </div>
        </div>
        <div class="collage shadow-hover">
          <div class="collage__pic js-gallery" data-overlay="pic-01"><img src="static/img/gallery/06.jpg" alt="изображение"></div>
          <div class="collage__content">
            <div class="collage__head">
              <div class="collage__color">
                <div class="collage__color_info"><img class="collage__color-img" src="static/img/gallery/colors/allanit.jpg" alt="изображение"></div>
                <div class="collage__head_info">
                  <p class="collage__desc">цвет</p><a class="collage__link" href="product-classic.php">алланит</a>
                </div>
              </div>
              <div class="collage__collection">
                <div class="collage__head_info">
                  <p class="collage__desc">коллекция технониколь</p><a class="collage__link" href="product-classic.php">Luxard Classic</a>
                </div>
              </div>
            </div>
            <div class="collage__footer"><i class="icon-locate"></i>
              <div class="collage__footer_info"><strong>Загородный дом</strong>
                <p>Россия. Московская область</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <?/*?></p><div class="pagination"><a class="pagination__left" href="#"></a>
        <ul class="pagination__list">
          <li class="pagination__item is_active"><a class="pagination__link" href="#">1</a></li>
          <li class="pagination__item"><a class="pagination__link" href="#">2</a></li>
          <li class="pagination__item hide_650"><a class="pagination__link" href="#">3</a></li>
          <li class="pagination__item hide_650"><a class="pagination__link" href="#">4</a></li>
          <li class="pagination__item hide_650"><a class="pagination__link" href="#">5</a></li>
          <li class="pagination__item is_hiden"><a class="pagination__link" href="#">...</a></li>
          <li class="pagination__item"><a class="pagination__link" href="#">10</a></li>
        </ul><a class="pagination__right" href="#"></a>
      </div><?*/?>
      <div class="overlay">
        <div class="overlay__wrap"></div>
        <div class="pic-01 popPic"><a class="btn__close" href="#"><span></span><span></span><span></span></a>
          <div class="bigCarusel">
            <div class="bigCarusel__item"><img class="bigCarusel__item_img" src="static/img/index/gallery/01.jpg" alt="изображение"></div>
            <div class="bigCarusel__item"><img class="bigCarusel__item_img" src="static/img/index/gallery/02.jpg" alt="изображение"></div>
            <div class="bigCarusel__item"><img class="bigCarusel__item_img" src="static/img/index/gallery/03.jpg" alt="изображение"></div>
            <div class="bigCarusel__item"><img class="bigCarusel__item_img" src="static/img/index/gallery/04.jpg" alt="изображение"></div>
          </div>
          <div class="fanCaption">
            <div class="fanCaption__color">
              <div class="fanCaption__color_pic"><img class="fanCaption__color_pic-img" src="static/img/gallery/colors/allanit.jpg"></div>
              <div class="fanCaption__text">
                <p>цвет</p><a href="#">алланит</a>
              </div>
            </div>
            <div class="fanCaption__collection">
              <div class="fanCaption__text">
                <p>коллекция технониколь</p><a href="#">luxard classic</a>
              </div>
            </div>
            <div class="fanCaption__location"><i class="icon-locate"></i>
              <div class="fanCaption__box"><strong>Загородный дом</strong>
                <p>Казахстан. Астана.<span>Посёлок Кордай.</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

<?php include($_SERVER['DOCUMENT_ROOT'].'/partials/footer.php'); ?>