document.querySelectorAll('.sidebar nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.sidebar nav a').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});
