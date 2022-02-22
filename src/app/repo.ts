export class Repo {
    constructor( 
        public name:string,
        public html_url:string,
        public forks:any,
        public id:number, 
        public description:string,  
        public language:string,
        public updated_at:Date ) {}
}
