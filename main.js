var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function () {
    var isClosed = header.clientHeight === headerHeight;

    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');

        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}

const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');


// hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTicket() {
    modal.classList.add('open');
}

// hàm ẩn modal mua vé (xóa class open vào modal)
function hideBuyTicket() {
    modal.classList.remove('open');
}

//  lặp qua từng thẻ button rồi  nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket)
}

// nghe hành vi click vào nút close
modalClose.addEventListener('click', hideBuyTicket)
modal.addEventListener('click', hideBuyTicket)

modalContainer.addEventListener('click', function(event) {
    event.stopImmediatePropagation(); // ngừng việc nổi bọt, để khi click vào ko bị tắt
})