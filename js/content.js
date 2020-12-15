start(() => {

    var rating = document.querySelector('.rating'),
        ratingItem = document.querySelectorAll('.rating-item');

    rating.onclick = function (e) {
        var target = e.target;
        if (target.classList.contains('rating-item')) {
            removeClass(ratingItem, 'current-active')
            target.classList.add('active', 'current-active');
        }
    }

    rating.onmouseover = function (e) {
        var target = e.target;
        if (target.classList.contains('rating-item')) {
            removeClass(ratingItem, 'active')
            target.classList.add('active');
            mouseOverActiveClass(ratingItem)
        }
    }
    rating.onmouseout = function () {
        addClass(ratingItem, 'active');
        mouseOutActiveClas(ratingItem);
    }

    function removeClass(arr) {
        for (var i = 0, iLen = arr.length; i < iLen; i++) {
            for (var j = 1; j < arguments.length; j++) {
                ratingItem[i].classList.remove(arguments[j]);
            }
        }
    }
    function addClass(arr) {
        for (var i = 0, iLen = arr.length; i < iLen; i++) {
            for (var j = 1; j < arguments.length; j++) {
                ratingItem[i].classList.add(arguments[j]);
            }
        }
    }

    function mouseOverActiveClass(arr) {
        for (var i = 0, iLen = arr.length; i < iLen; i++) {
            if (arr[i].classList.contains('active')) {
                break;
            } else {
                arr[i].classList.add('active');
            }
        }
    }

    function mouseOutActiveClas(arr) {
        for (var i = arr.length - 1; i >= 1; i--) {
            if (arr[i].classList.contains('current-active')) {
                break;
            } else {
                arr[i].classList.remove('active');
            }
        }
    }
})

function start(clb) {
    const d = true;



    const el = document.querySelector('.page_block.ui_rmenu._im_right_menu.ui_rmenu_pr');

    if (d) {
        const data = {
            exist: true,
            user: {
                tariff: {
                    name: '2K',
                    limit: 2000,
                    use_today: 1243
                },
                partner_sum: 291,
            },
            estimation: 3.9
        }
        el.insertAdjacentHTML('afterEnd',
        `<div class="container im-aside-promo-vkadmin_promo">
        <div class="page_block ui_rmenu _im_right_menu ui_rmenu_pr">
    
            <div class="ui_rmenu_item ui_rmenu_item _ui_item_unread">
                <span>Тариф: <span class="tariff-name">${data.user.tariff.name}</span></span>
            </div>
    
                    <div class="ui_rmenu_sep"></div>
    
            <div class="ui_rmenu_item ui_rmenu_item _ui_item_unread">
                <span>Сообщений сегодня: <span class="use-today">${data.user.tariff.use_today}</span> / <span class="tariff-limit">${data.user.tariff.limit}</span></span>
            </div>
    
                    <div class="ui_rmenu_sep"></div>
    
            <div class="ui_rmenu_item ui_rmenu_item _ui_item_unread">
                <span>Партнерских: <span class="partner-sum">${data.user.partner_sum}</span></span>
            </div>
    
                    <div class="ui_rmenu_sep"></div>
    
            <div class="ui_rmenu_item ui_rmenu_item _ui_item_unread">
                <span>Средняя оценка: <span class="estimation">${data.estimation}</span></span>
            </div>
    
                    <div class="ui_rmenu_sep"></div>
    
            <div class="ui_rmenu_item ui_rmenu_item _ui_item_unread estimation">
                <span>Оценить: 
                </span>
                <div class="rating">
                <div class="rating-item active" data-rate="1"></div>
                <div class="rating-item" data-rate="2"></div>
                <div class="rating-item" data-rate="3"></div>
                <div class="rating-item" data-rate="4"></div>
                <div class="rating-item" data-rate="5"></div>
            </div>
        </div>
    `);
    }
    else {
        const data = {
            exist: false,
            estimation: 3.9
        }
        el.insertAdjacentHTML('afterEnd',
        `<div class="container im-aside-promo-vkadmin_promo">
        <div class="page_block ui_rmenu _im_right_menu ui_rmenu_pr">
    
            <div class="ui_rmenu_item ui_rmenu_item _ui_item_unread estimation">
                <span>Оценить: 
                </span>
                <div class="rating">
                <div class="rating-item active" data-rate="1"></div>
                <div class="rating-item" data-rate="2"></div>
                <div class="rating-item" data-rate="3"></div>
                <div class="rating-item" data-rate="4"></div>
                <div class="rating-item" data-rate="5"></div>
            </div>
        </div>
    `);
    }
    clb()
}