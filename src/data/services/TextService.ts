export const TextService = {
    limitarText(text : string, tamMaximo: number) : string{
        if(text.length < tamMaximo){
            return text;
        }
        return text.slice(0, tamMaximo) + '...';
    }
}