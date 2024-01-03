import MainSlider from './module/slider/slider-main'
import MiniSlider from './module/slider/slider-mini'
import PlayVideo from './module/playVideo'
import Difference from './module/difference'
import Form from './module/forms'

window.addEventListener('DOMContentLoaded', () => {
    const mainSlider = new MainSlider({ container: '.page', btns: '.next' })
    const showUpSlider = new MiniSlider({ container: '.showup__content-slider', prev: '.showup__prev', next: '.showup__next', activeClass: 'card-active', animate: true })
    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true,
    })
    const feedSlider = new MiniSlider({ container: '.feed__slider', prev: '.feed__slider .slick-prev', next: '.feed__slider .slick-next', activeClass: 'feed__item-active' })
    const playVideo = new PlayVideo('.showup .play', '.overlay')
    const difference = new Difference('.officerold', '.officernew', '.officer__card-item')
    const form = new Form('.form')

    mainSlider.render()
    showUpSlider.init()
    modulesSlider.init()
    feedSlider.init()
    playVideo.init()
    difference.init()
    form.init();
})
