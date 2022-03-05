let slides = document.getElementsByClassName('slides')
let i = 0
let curSlide = slides[i]
curSlide.style.display = 'block'

function hienThiSlideKeTiep() {
    curSlide.style.display = 'none'
    if (i + 1 > slides.length - 1) {
        i = 0
    } else {
        i = i + 1
    }
    curSlide = slides[i]
    curSlide.style.display = 'block'
}

function hienThiSlideTruocDo() {
    curSlide.style.display = 'none'
    if (i - 1 < 0) {
        i = slides.length - 1
    } else {
        i = i - 1
    }
    curSlide = slides[i]
    curSlide.style.display = 'block'
}

setInterval(() => hienThiSlideKeTiep(),3000)