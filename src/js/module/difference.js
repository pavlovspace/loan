export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        try {
            this.oldOfficer = document.querySelector(oldOfficer)
            this.newOfficer = document.querySelector(newOfficer)
            this.oldItems = this.oldOfficer.querySelectorAll(items)
            this.newItems = this.newOfficer.querySelectorAll(items)
            this.oldCounter = 0
            this.newCounter = 0
        } catch (error) {}
    }

    bindTriggers(container, items, counter) {
        const lastItem = items[items.length - 1]

        container.querySelector('.plus').addEventListener('click', () => {
            lastItem.remove()
            items[counter].classList.add('animated', 'slideInUp')
            lastItem.classList.add('animated', 'slideInDown')
            if (counter !== items.length - 2) {
                items[counter].style.display = 'flex'
                lastItem.style.display = 'flex'

                counter++
            } else {
                items[counter].style.display = 'flex'
                lastItem.style.display = 'none'
            }

            container.appendChild(lastItem)
        })
    }

    hideItems(items) {
        items.forEach((element, i, arr) => {
            if (i !== arr.length - 1) {
                element.style.display = 'none'
            }
        })
    }

    init() {
       try {
        this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter)
        this.bindTriggers(this.newOfficer, this.newItems, this.newCounter)

        this.hideItems(this.oldItems)
        this.hideItems(this.newItems)
       } catch (error) {
        
       }
    }
}
