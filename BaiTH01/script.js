function tabbar(name) {
let i = 0;
const getClassTabbar = document.getElementsByClassName("tab-content");

for (i = 0; i < getClassTabbar.length; i++) {
getClassTabbar[i].style.display = "none";
}

let buttons = document.querySelectorAll(".button button");
buttons.forEach(function (btn) {
btn.classList.remove("activate");
});
document.getElementById(name).style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
default_html = document.getElementById("gioiThieu");
not_default_html1 = document.getElementById("kyNang");
not_default_html2 = document.getElementById("duAn");
not_default_html3 = document.getElementById("lienHe");
if (default_html) {
default_html.style.display = "block";
}
if (not_default_html1 || not_default_html2 || not_default_html3) {
not_default_html1.style.display = "none";
not_default_html2.style.display = "none";
not_default_html3.style.display = "none";
}
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            if (document.body.classList.contains('dark-mode')) {
                themeToggleBtn.textContent = 'Light';
            } else {
                themeToggleBtn.textContent = 'Dark';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const projectItems = document.querySelectorAll('.project-item');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase().trim();
            projectItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(keyword)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    const formLienHe = document.getElementById('FormLienHe');
    const formMsg = document.getElementById('formMsg');

    if (formLienHe) {
        formLienHe.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name) {
                formMsg.style.color = 'red';
                formMsg.textContent = 'Vui lòng nhập họ và tên!';
                return;
            }

            if (!email) {
                formMsg.style.color = 'red';
                formMsg.textContent = 'Vui lòng nhập email!';
                return;
            }

            if (!emailRegex.test(email)) {
                formMsg.style.color = 'red';
                formMsg.textContent = 'Email không hợp lệ!';
                return;
            }

            if (message.length < 10) {
                formMsg.style.color = 'red';
                formMsg.textContent = 'Lời nhắn phải có ít nhất 10 ký tự!';
                return;
            }

            formMsg.style.color = 'green';
            formMsg.textContent = 'Gửi thông tin liên hệ thành công!';
            formLienHe.reset();
        });
    }

    const footerP = document.querySelector('footer p');
    if (footerP) {
        const currentYear = new Date().getFullYear();
        footerP.innerHTML = `&copy; ${currentYear} Giới thiệu bản thân.`;
    }
});