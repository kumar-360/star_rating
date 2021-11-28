function Star(el, count, callback) {
    const starDiv = document.querySelector('#star');
    const displayStar = document.querySelector('#display-star');
    const starElements = document.querySelectorAll('#star i');
    starElements.forEach((ele, index) => {
        ele.setAttribute('value', index);
    })
    const addMouseEnter = (e) => {
        let value = Number(e.target.getAttribute('value'));
        starElements.forEach((ele, index) => {
            if (index <= value) {
                ele.classList.remove('fa-star-o');
                ele.classList.add('fa-star');
            }

        })
    };
    starElements.forEach((ele) => {
        ele.addEventListener('mouseenter', addMouseEnter);
    });
    const normaliseStars = (e) => {
        starElements.forEach(ele => {
            ele.classList.remove('fa-star');
            ele.classList.add('fa-star-o');
        })
    }
    const addClick = (e) => {
        let value = Number(e.target.getAttribute('value'));
        getStar(value + 1);
        starElements.forEach((ele, index) => {
            if (index <= value) {
                ele.classList.remove('fa-star-o');
                ele.classList.add('fa-star');
            }
        })
        starElements.forEach(ele => {
            ele.removeEventListener('mouseenter', addMouseEnter);
            ele.removeEventListener('mouseleave', addMouseLeave);
            ele.removeEventListener('click', addClick);
        });
        starDiv.removeEventListener('mouseleave', normaliseStars);
    }
    starElements.forEach(ele => {
        ele.addEventListener('click', addClick);
    });
    const addMouseLeave = (e) => {
        let value = Number(e.target.getAttribute('value'));
        starElements.forEach((ele, index) => {
            if (index >= value) {
                ele.classList.remove('fa-star');
                ele.classList.add('fa-star-o');
            }

        })
    };
    starElements.forEach(ele => {
        ele.addEventListener('mouseleave', addMouseLeave);
    });
    starDiv.addEventListener('mouseleave', normaliseStars);
}

function getStar(value) {
    document.getElementById("display-star").innerHTML = value;
}
Star("#star", 5, getStar);