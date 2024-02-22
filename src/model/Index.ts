export type TProps = {
    name: string,
    san: string;
    index:number;
    data?:Index[];
  };
  // export type arrIndex ={
  //   listIndex?:Index[];
  // }
  export type Index = {
    ChangePercent: string
    IndexId: string
    Exchange: string
    Change: string
    IndexValue: string
    TotalSharesAOM: string
    TotalValuesAOM: string
    TotalSharesPT: string
    TotalValuesPT: string
    Up: string
    Down: string
    NoChange: string
    Ceiling: string
    Floor: string
    Time: string
  }