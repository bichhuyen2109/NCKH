window.onload = function () {
    var headerNews = document.querySelectorAll('.header-new');

    headerNews.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            

            // var headerNews = header.nextElementSibling;
            // if (headerNews.style.display === 'block') {
            //     headerNews.style.display = 'none';
            // } else {
            //     headerNews.style.display = 'block';
            // }
        });
    });

}



