import Slider from './module/slider'
import PlayVideo from './module/playVideo'

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next')
    const playVideo = new PlayVideo('.showup .play', '.overlay')

    slider.render()
    playVideo.init()
})
