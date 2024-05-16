
export function countDigits(n:number):number{
    return Math.abs(n).toString().length;
}

export function colouredText(text:string,style:number){
    return `\x1b[${style}m${text}\x1b[0m`
}