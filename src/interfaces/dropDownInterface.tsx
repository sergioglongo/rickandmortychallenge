export interface DropDownFilterInterface {
    data:    Data[];
    value: string | null;
    onChange: (item:Data)=>void
}

export interface Data {
    label:string;
    value:string;
}

