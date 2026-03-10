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