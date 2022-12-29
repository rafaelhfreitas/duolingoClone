export class Heart {
    
    constructor(
        public filled: boolean,
        public urlHeartFilled: string = '/assets/coracao_cheio.png',
        public urlHeartUnfilled: string = '/assets/coracao_vazio.png'
    ) {}

     public hasHeart(): string {
        if(this.filled) {
            return this.urlHeartFilled
        } else {
            return this.urlHeartUnfilled
        }
     }
}