export const FormatSalary = (salary:string) => {

    if (Number(salary)) {
        return Number(salary).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    }

    return `R$ ${salary}`;    
}