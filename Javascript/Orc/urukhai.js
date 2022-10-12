class Urukhai extends orc {
    constructor(name, strenght){
        super(name, null, strenght+10);
    }
    
    kill(someone){
        if(someone instanceof creature){
            throw new Error('Ceci est pas une creature')
        } console.warn(this.name + "a tué" + someone);
    }
}