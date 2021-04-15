function main() {
    const slider = document.querySelector('.imgs-area .items');
    let isDown = false;
    let stratX,scrollLeft;
    

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      stratX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      let x = e.pageX - slider.offsetLeft;
      let walk = x - stratX;
      slider.scrollLeft = scrollLeft - walk;
    });


    // tab-menu
    const contBtn = document.querySelectorAll('.menu > ul > li');
    const contList = document.querySelectorAll('.contents > div');


    for (let i = 0; i < contBtn.length; ++i) {
        const target = this;


        contBtn[i].addEventListener('click', function (e) {
            e.preventDefault();
            for (let y = 0; y < contBtn.length; ++y) {

                const target = this;
                var tabNum = target.getAttribute('data-num');
                contBtn[y].classList.remove('active');
                target.classList.add('active');
                contList[y].classList.remove('active');
                contList[tabNum].classList.add('active');
            }
        });
    }

    // cont5 imgEffect

    //밖에서 쓰는 지정어


    const imgs = document.querySelectorAll('.cont5 ul li.pf');
    imgs[0].classList.add('active');



    const aniStop = {
        toggle: false,
    }



    const StopBtn = document.querySelector('.cont5 a.stop');
    const BtnPlay = document.querySelector('.cont5 a.stop .play');
    const BtnPause = document.querySelector('.cont5 a.stop .pause');
    StopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(aniStop.toggle);
        if (aniStop.toggle === false) {
            BtnPause.style = 'display: none';
            BtnPlay.style = 'display: block';
            return aniStop.toggle = true;
        } else {
            BtnPause.style = 'display: block';
            BtnPlay.style = 'display: none';
            return aniStop.toggle = false;
        }

    });
    const NextBtn = document.querySelector('.cont5 .nextBtn');
    NextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const imgParents = document.querySelector('.cont5 ul');
        const imgCurrnts = document.querySelector('.cont5 ul li.pf.active');
        const imgFirst = document.querySelector('.cont5 ul li.pf:first-child');
        const imgNexts = imgCurrnts.nextElementSibling;
        const imgPrves = imgCurrnts.previousElementSibling;
        imgCurrnts.classList.remove('active');
        imgNexts.classList.add('active');
        if (imgPrves === null && imgs[0].classList.contains('active')) {
            imgParents.appendChild(imgs[0]);
        }
        if (imgPrves === null) {
            return;
        } else {
            imgParents.appendChild(imgFirst);
        }
        if(aniStop.toggle === false){
            setInterval(() => {
                aniStop.toggle = false;
            }, 4000);
            return aniStop.toggle = true;
        }

    });

    const prevBtn = document.querySelector('.cont5 .prevBtn');

    prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const imgParents = document.querySelector('.cont5 ul');
        const imgCurrnts = document.querySelector('.cont5 ul li.pf.active');
        const imgLast = document.querySelector('.cont5 ul li.pf:Last-child');
        const imgNexts = imgCurrnts.nextElementSibling;
        const imgPrves = imgCurrnts.previousElementSibling;
        if (imgPrves) {
            imgCurrnts.classList.remove('active');
            imgPrves.classList.add('active');
            if (imgPrves === null && imgs[0].classList.contains('active')) {
                imgParents.appendChild(imgs[0]);
            }
            if (imgPrves === null) {
                return;
            } else {
                imgParents.insertBefore(imgLast, imgParents.firstChild);
            }
            if(aniStop.toggle === false){
                setInterval(() => {
                    aniStop.toggle = false;
                }, 4000);
                return aniStop.toggle = true;
            }
        }
    });
    prevBtn.addEventListener('click',function(e){
        // if (aniStop === false) {
        //     aniStop.toggle = true;
        //     setTimeout(function () {
        //         return aniStop.toggle = false;
        //     }, 7000);
        // }
        e.preventDefault();
        
    });

    setInterval(function () {
        if (aniStop.toggle === false) {
            const imgParent = document.querySelector('.cont5 ul');
            const imgCurrnt = document.querySelector('.cont5 ul li.pf.active');
            const imgFirst = document.querySelector('.cont5 ul li.pf:first-child');
            const imgNext = imgCurrnt.nextElementSibling;
            const imgPrve = imgCurrnt.previousElementSibling;
            console.log(imgPrve);

            function nextFadeIn() {
                imgCurrnt.classList.remove('active');
                imgNext.classList.add('active');
                if (imgPrve === null && imgs[0].classList.contains('active')) {
                    imgParent.appendChild(imgs[0]);
                }
            }
            nextFadeIn();
            if (imgPrve === null) {
                return;
            } else {
                imgParent.appendChild(imgFirst);
            }
        }
        console.log(aniStop)
    }, 4000);
    // date
    const clockTargeting = document.querySelector('.clock');

    function clock() {
        const date = new Date();
        const monthDate = date.getMonth();
        const clockDate = date.getDate();
        const hoursDate = date.getHours();
        const minDate = date.getMinutes();
        const secDate = date.getSeconds();
        const dayDate = date.getDay();

        const week = ['일', '월', '화', '수', '목', '금', '토'];
        clockTargeting.innerHTML = `${monthDate+1}월  ${clockDate}일 ${week[dayDate]} ${hoursDate}:${minDate}:${secDate}`
    }

    setInterval(() => {
        clock();
    }, 1000);


    //ham
    let btnAttr = {
        toggle: false,
    }
    const hamBtn = document.querySelector('.aside .ham');
    const menu = document.querySelector('.aside .menu');
    const menus = document.querySelectorAll('.menu ul li');

    hamBtn.addEventListener('click',function(e){
        if(btnAttr.toggle === false){
            btnAttr.toggle = true;
            menu.classList.add('active');
        }else{
            btnAttr.toggle = false;
            menu.classList.remove('active');
        }
    });

    for(let i = 0; i < menus.length; ++i){
        
        menus[i].addEventListener('click',function(){
           if(btnAttr.toggle === true){
               btnAttr.toggle = false;
               menu.classList.remove('active');
           }
        })
    }


}

document.addEventListener('DOMContentLoaded', main);