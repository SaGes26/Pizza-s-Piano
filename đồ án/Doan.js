document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.submenu-toggle');
    const submenu = document.getElementById('submenu-list');

    if (btn && submenu) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); 
            submenu.classList.toggle('active');
        });
    }

    document.addEventListener('click', function() {
        if(submenu) submenu.classList.remove('active');
    });
});


const trackBtn = document.getElementById('btn-track-order');
if (trackBtn) {
    trackBtn.addEventListener('click', function() {
        const orderId = document.getElementById('order-id').value;
        if (orderId === "") {
            alert("Vui lòng nhập mã đơn hàng!");
        } else {
            alert("Đang tìm kiếm đơn hàng: " + orderId);
        }
    });
}