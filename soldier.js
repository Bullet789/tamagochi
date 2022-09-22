const soldier = {
    soldiername : 'Дени',
    health : 10,
    weapon: {
        nameweapon: 'm416',
        numcartrid: 30,

    },
    supplies: 3,

    fire (){
        if (this.weapon.numcartrid === 0) {
            console.log('обойма пуста.Перезаредитесь')
        } else {
            this.weapon.numcartrid --
            console.log('бах-бах')
        }
    },
    reload (){
        if (this.supplies === 0) {
           
            console.log('не осталось припасов')
        } else {
             this.supplies --
            console.log('перезарядка')
        }
    },
    hurt(){
        if (this.health === 0) {
            console.log('Ты проиграл')
        } else {
            this.health--
        }
    },

};

soldier.fire()
soldier.reload()
soldier.hurt()