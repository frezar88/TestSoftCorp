class Site {
    mainHomePage = document.querySelector('.main-home-page');
    mainMorePage = document.querySelector('.main-more-page');
    mainInfoPage = document.querySelector('.main-info-page');

    constructor() {
        this.allUI();
    }

    allUI() {
        this.swiperSlider();
        this.headerUI();
        this.mainUI();
    }

    headerUI() {
        this.setTimeForHeader();
        this.setDateForHeader();
    }

    mainUI() {
        this.addEventForMainPageListItem();
        this.addEventForMorePageListItem();
        this.addEventForBtnBack();
        this.addEventForBtnHome();
    }

    addEventForMainPageListItem() {
        let list = document.querySelectorAll('.main-home-page__list .main-home-page__item');

        list.forEach(el => {
            el.addEventListener('click', (e) => {
                this.mainHomePage.classList.add('hide');
                this.mainMorePage.classList.remove('hide');
                setTimeout(() => {
                    this.mainHomePage.classList.add('absolute');
                    this.mainMorePage.classList.remove('absolute');
                }, 300);
                if (!e.target.className) {
                    console.log(e.target.parentNode)
                } else {
                    console.log(e.target)
                }
            })
        });
    }
    addEventForMorePageListItem() {
        let list = document.querySelectorAll('.main-more-page__list .main-more-page__item');

        list.forEach(el => {
            el.addEventListener('click', (e) => {
                this.mainMorePage.classList.add('hide');
                this.mainInfoPage.classList.remove('hide');
                setTimeout(() => {
                    this.mainMorePage.classList.add('absolute');
                    this.mainInfoPage.classList.remove('absolute');
                }, 300);
                
            })
        });
    }

    addEventForBtnBack() {
        let btnBack = document.querySelector('.main-more-page__title .arrow-back')
        let btnBackInfoPage = document.querySelector('.main-info-page__title .arrow-back')
        btnBack.addEventListener('click', () => {
            this.mainHomePage.classList.remove('hide');
            this.mainMorePage.classList.add('hide');
            setTimeout(() => {
                this.mainHomePage.classList.remove('absolute');
                this.mainMorePage.classList.add('absolute');
            }, 300);
        })
        btnBackInfoPage.addEventListener('click', () => {
            this.mainMorePage.classList.remove('hide');
            this.mainInfoPage.classList.add('hide');
            this.mainInfoPage.classList.add('absolute');
            this.mainMorePage.classList.remove('absolute');
        })
    }
    addEventForBtnHome() {
        let btnHome = document.querySelector('.main-info-page__title .btn-home')

        btnHome.addEventListener('click', () => {
            this.mainInfoPage.classList.add('hide');
            
            this.mainHomePage.classList.remove('hide');
            
            setTimeout(() => {
                this.mainInfoPage.classList.add('absolute');
                this.mainHomePage.classList.remove('absolute');
            }, 300);
        })
    }

    setTimeForHeader() {
        const date = new Date();
        let options = {
            hour: 'numeric',
            minute: 'numeric',
        };
        document.querySelector(".header__time p").innerHTML = date.toLocaleString("ru", options)

        setInterval(() => {
            const date = new Date();
            let options = {
                hour: 'numeric',
                minute: 'numeric',
            };
            document.querySelector(".header__time p").innerHTML = date.toLocaleString("ru", options)
        }, 1000);

    }

    setDateForHeader() {
        const date = new Date();
        let options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timezone: 'UTC',
        };
        document.querySelector(".header__date p").innerHTML = date.toLocaleString("ru", options)
    }

    swiperSlider() {
        new Swiper(".swiper-container", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            observer: true,
            observeParents: true,
            pagination: {
            },
            slidesPerView: 1,
            slidesPerGroup: 1,
            //Бесконечный слайдер
            loop: true,
            speed: 800,
            autoHeight: true,

            watchOverflow: true,
        })
    }


    /* ------------Не смог найти рабочий токен что бы подключиться к API погодному------------- */

    getWeather() {
        /*  this.requestData('https://api.gismeteo.net/v2/weather/current/4368/?lang=en', 'GET').then((data) => {
             console.log(data)
         }) */
    }

    async requestData(url, method, body) {

        let domain = url;

        let response = await fetch(domain, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (!response.ok) return console.error("Error");
        return response.json();

    }
}

new Site();