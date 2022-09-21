const tamagochi = {
    name: 'egg',
    mael: 1,
    energy: 2,
    mood: 4,
    getStatus () {
        if(this.mael <= 0 || this.energy <= 0 || this.mood <= 0) {
            console.log(`${this.name}: я умер`)
        } else {
            console.log(`имя: ${this.name}, еда: ${this.mael < 3 ? 'я голоден' : 'я не голоден'}, энергия: ${this.energy < 3 ? 'я хочу спать' : 'я не хочу спать'}, настроение: ${this.mood < 3 ? 'мне скучно':'мне весело'}`);}
        },
    

    setName (newname) {
        this.name = newname},
    eat () {
        if (this.mael <= 5) {
            this.mael++;
            this.mood--
        }
    },
    sleep () {
        if (this.energy <= 5) {
            this.energy++
            this.mood--
        }
    },
    play () {
        if (this.mood <= 5) {
            this.mood++;
            this.energy--
        }
    },
    cocaine() {
        if(this.mood >= 3) {
            this.energy += 3
            this.mael += 100
        }
    }
}
tamagochi.cocaine ()
tamagochi.play ()
tamagochi.sleep ()
tamagochi.eat ()
tamagochi.setName ('убийца')
tamagochi.getStatus()
