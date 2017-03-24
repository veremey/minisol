<!DOCTYPE html>
<html lang="ru-RU">
<head>
    <meta charset="utf-8">
    <title>ТЕХНОНИКОЛЬ LUXARD композитная черепица</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE">
    <meta content="telephone=no" name="format-detection">
    <link rel="icon" href="static/img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" media="all" href="static/css/jquery.fancybox.min.css">
    <link rel="stylesheet" media="all" href="static/css/jquery-ui.theme.min.css">
    <link rel="stylesheet" media="all" href="static/css/jquery-ui.min.css">
    <link rel="stylesheet" media="all" href="static/css/style.css">
</head>
<body>
<!--BEGIN outs-->
<div class="out is_animated">
    <header class="header is_animated">
        <div class="layout"><a class="logo" href="index.php">
                <picture class="logo__pic">
                    <source srcset="static/img/logo.svg" media="(min-width: 1361px)">
                    <source srcset="static/img/logo-min.svg" media="(min-width: 1001px)"><img srcset="static/img/logo.svg" alt="…">
                </picture></a><a class="btn__open" href="#"><b>Меню</b>
                <div class="btn__open_wrap"><span></span><span></span><span></span></div></a>
            <div class="header__hide js_open">
                <div class="select js-select"><span class="select__text js-select-text"><img class="lang__img" src="static/img/flag-ru.jpg" alt="ru">ru</span>
                    <input class="js-select-input" type="hidden" value="">
                    <ul class="select__list js-select-list">
                        <li data-id="0"><img class="lang__img" src="static/img/flag-ru.jpg" alt="ru">ru</li>
                        <li data-id="1"><img class="lang__img" src="static/img/flag-en.png" alt="ru">en</li>
                    </ul>
                </div>
                <nav class="header__nav">
                    <ul class="menu">
                        <li class="menu_list has_subnav"><a class="menu_link" href="catalog.php"><span>Каталог LUXARD<i class="icon-bird"></i></span></a>
                            <div class="subWrapper">
                                <ul class="submenu">
                                    <li class="submenu_list"><a class="submenu_link" href="product-classic.php">Коллекция Classic</a></li>
                                    <li class="submenu_list"><a class="submenu_link" href="product-roman.php">Коллекция Roman</a></li>
                                    <li class="submenu_list"><a class="submenu_link" href="complect.php">Комплектующие</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu_list"><a class="menu_link" href="gallery.php"><span>Фотогалерея</span></a></li>
                        <li class="menu_list has_subnav"><a class="menu_link" href="mount-pic.php"><span>Монтаж<i class="icon-bird"></i></span></a>
                            <div class="subWrapper">
                                <ul class="submenu">
                                    <li class="submenu_list"><a class="submenu_link" href="use.php">Область применения</a></li>
                                    <li class="submenu_list"><a class="submenu_link" href="mount-pic.php">Инструкция по монтаж</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu_list has_subnav"><a class="menu_link" href="news.php"><span>Информация<i class="icon-bird"></i></span></a>
                            <div class="subWrapper">
                                <ul class="submenu">
                                    <li class="submenu_list"><a class="submenu_link" href="news.php">Новости</a></li>
                                    <li class="submenu_list"><a class="submenu_link" href="docs.php">Документация</a></li>
                                    <li class="submenu_list"><a class="submenu_link" href="promo.php">Рекламные материалы</a></li>
                                    <li class="submenu_list"><a class="submenu_link" href="garant.php">Оформление гарантии</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu_list"><a class="menu_link" href="contacts.php"><span>Где купить?</span></a></li>
                    </ul>
                </nav>
                <div class="header__info">
                    <div class="hotLine"><small class="hotLine__label">Горячая линия</small><a class="hotLine__tel" href="tel:8800200565" title="Звонки со стационарного телефона бесплатны">8 800 200-05-65</a></div><a class="qustion js-question" href="#">Задать <br> вопрос</a>
                </div>
            </div>
        </div>
        <div class="popup__question js_close">
            <div class="layout">
                <button class="btn__close"><span></span><span></span><span></span></button>
                <h3 class="title__popup">у вас есть вопрос?</h3>
                <p class="popup__question_desc">наши специалисты рады <wbr> будут помочь</p>
                <form class="popup__question_form js-validate" method="post" action="/" name="question" autocomplete="on">
                    <div class="input">
                        <textarea class="popup__question_item" name="yourQuestion" placeholder="Ваш вопрос"></textarea>
                    </div>
                    <div class="popup__question_box">
                        <div class="input input-half">
                            <input class="popup__question_data input__item" type="text" name="name" placeholder="">
                            <label class="input__label" for="name"><span>Ваше имя</span></label>
                        </div>
                        <div class="input input-half">
                            <input class="popup__question_data input__item" type="email" name="email" placeholder="" required>
                            <label class="input__label" for="email"><span>Эл. почта</span></label>
                        </div>
                    </div>
                    <div class="popup__question_wrp">
                        <fieldset class="popup__fieldset mod_tel">
                            <label class="popup__fieldset_label" for="telephone">Телефон:</label>
                            <input class="popup__fieldset_tel" type="tel" name="telephone" placeholder="+7 (___) ___ - __ - __">
                        </fieldset>
                        <fieldset class="popup__fieldset">
                            <input class="popup__fieldset_file" type="file" name="file" id="file" data-multiple-caption="Выбрано {count} файла" multiple>
                            <label class="popup__fieldset_desc" for="file">
                                <div class="popup__fieldset_pic"><img class="popup__fieldset_img" src="static/img/index/skoba.png" alt="изображение"></div><span>Прикрепить файл</span>
                            </label>
                        </fieldset>
                    </div>
                    <button class="btn" type="submit">Отправить</button>
                </form>
            </div>
            <div class="popup__question_footer">Ваш вопрос успешно отправлен!</div>
        </div>
    </header>