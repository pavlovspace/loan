export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page)
        this.slides = Array.from(this.page.children)
        this.btns = document.querySelectorAll(btns)
        this.slideIndex = 1
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1
        }
        if (n < 1) {
            this.slideIndex = this.slides.length
        }

        this.slides.forEach((element) => {
            element.classList.add('animated')
            element.style.display = 'none'
        })

        this.slides[this.slideIndex - 1].style.display = 'block'
    }

    plusSlides(n) {
        this.showSlides((this.slideIndex += n))
        this.slides[this.slideIndex - 1].classList.add('slideInDown')
    }

    render() {
        this.btns.forEach((element) => {
            element.addEventListener('click', () => {
                this.plusSlides(1)
            })

            element.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault()
                this.slideIndex = 1
                this.slides[this.slideIndex - 1].classList.add('slideInUp')
                this.showSlides(this.slideIndex)
            })
        })

        this.showSlides(this.slideIndex)
    }
}
