function toast({title = "", message = "", type = "text", duration = 3000}) {
    const main = document.getElementById("toast");
    if (main) {
        // Tao mot bien toan la mot div
        const toast = document.createElement("div");

        // Them div toast vao trong div main
        main.appendChild(toast);

        // Them class va tinh chat vao div toast
        toast.classList.add("toast", `toast--${type}`);

        // Tao array icon
        const icons = {
            success: "fas fa-check-circle",
            error: "fas fa-exclamation-circle"
        }

        // Chon icon theo type
        const icon = icons[type];
        
        // Them tinh chat cua class Toast
        toast.innerHTML = `
            <div class="toast__status toast__status--${type}">
                <i class="${icon}"></i>
            </div>
            <div class="toast__content">
                <div class="toast__content-header">
                    ${title}
                </div>
                <div class="toast__content-disciption">
                    ${message}
                </div>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;

        // Tao delay cho toast sau khoang thoi gian
        const delay = (duration / 1000).toFixed(2);

        // Them stye chuyen dong cho toast
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 0.5s ${delay}s forwards`;

        // Auto close toast
        const autoRemoveToastId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // Close toast when clicked close
        toast.onclick = function (e) {
            // Nhan trung close thuc hien lenh remove child
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
            }

            // Xoa bo lenh set timeout auto close toast
            clearTimeout(autoRemoveToastId);
        }

    }
}

