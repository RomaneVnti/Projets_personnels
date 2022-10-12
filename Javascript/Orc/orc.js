class orc extends creature {
    constructor(name, age, strenght){
    super(name, age, strenght)
    }

    scream(words){
        console.info(this.name + 'scream' + words);
    }

    bite(someone){
        if(someone instanceof creature){
            throw new Error("Ceci n'est pas une créature");
        } console.warn(this.name + 'a mordu' + someone);
    }
}

