class chiefOrc extends orc {
    constructor(name, age, strenght){
        super(name,age,strenght+2);
        this.isChief = true;
    }

    giveOrder(someone){
        if(someone instanceof creature){
            throw new Error('Ceci est pas une creature');
        } console.info(this.name + 'a donné un ordre a' + someone);
    }

    identity(){
        super.identity();
        console.info('Je suis le chef orc, je donne les ordres');
    }
}
