import SaleLine from "./saleline.model";

export default interface Sale{
    id:number;
    code:string;
    discount:number;
    sale_lines?:SaleLine[];
}