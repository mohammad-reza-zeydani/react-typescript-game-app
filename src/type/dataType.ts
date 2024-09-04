export type Tdata={
        id:number,
        name:string,
        year:number,
        image:string,
}
export type PropsType={
data:[Tdata],
loading:boolean,
isError:boolean,
error:Error | null
}