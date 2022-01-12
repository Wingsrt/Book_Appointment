


export const incre=(pay)=>{

    return {
        type:'INC',
        pay:pay,
        id:Math.floor(Math.random() * 100)
    }
}
export const dele=(pay)=>{

    return {
        type:'DEL',
        pay:pay
    }
}