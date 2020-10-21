class bdd { 
    flag:boolean;
    constructor(flag:boolean) {
        this.flag=flag;
    }
    public query (flag:boolean) {
        if (flag) {
            return [
                {
                    id: 2, 
                    creation_date: "s",
                    create_hour: "d",
                },
                {
                    id: 1, 
                    creation_date: "s",
                    create_hour: "d",
                },
            ];
        } else {
            return false;
        }
    }
    public service () {
        return this.query(this.flag);
    }
}
const controller:bdd = new bdd(true);