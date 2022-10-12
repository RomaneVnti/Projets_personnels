class creature {
    constructor(name, age, strenght){
        this.name = name;
        this.name = age;
        this.strenght = strenght;
    }

    saySomething(words){
        console.info(this.name + 'Dit' + words);
    }

    identity(){
        console.info(`
        NOM : $[this.name];
        AGE : $[this.age];
        STRENGHT : $[this.strenght];
        `)
    }
}

