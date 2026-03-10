const list = document.querySelectorAll('.list');
let isLocked = false;

list.forEach((item) => {
    item.addEventListener('mouseenter', function() {
        if (!isLocked) {
            list.forEach((li) => li.classList.remove('active'));
            this.classList.add('active');
        }
    });

    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        list.forEach((li) => li.classList.remove('active'));
        this.classList.add('active');
        
        isLocked = true;
        
        setTimeout(() => {
            isLocked = false;
        }, 2000);
    });
});

const socialLinks = document.querySelectorAll('.magic-menu li a.social-icon');

socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentElement.classList.add('exploding');
    });
});

const magicMenuEl = document.querySelector('.magic-menu');

magicMenuEl.addEventListener('mouseleave', () => {
    const explodedItems = document.querySelectorAll('.magic-menu li.exploding');
    explodedItems.forEach(item => {
        item.classList.remove('exploding');
    });
});