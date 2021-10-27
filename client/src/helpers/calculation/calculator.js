export const refineNum =(num, gbpRate) => {
    if (num > 10000) return (num * gbpRate).toFixed(2);
    if (num < 10000 && num > 1000) return (num * gbpRate).toFixed(3);
    if (num < 1000 && num > 100) return (num * gbpRate).toFixed(4);
    if (num < 100 && num > 10) return (num * gbpRate).toFixed(5);
    if (num < 10 && num > 1) return (num * gbpRate).toFixed(6);
    if (num < 1 && num > 0.1) return (num * gbpRate).toFixed(6);
    if (num < 0.1) return (num * gbpRate).toFixed(6);
} 

export const refineNumWithoutGbp =(num) => {
    if (num > 10000) return (num).toFixed(2);
    if (num < 10000 && num > 1000) return (num).toFixed(3);
    if (num < 1000 && num > 100) return (num).toFixed(4);
    if (num < 100 && num > 10) return (num).toFixed(5);
    if (num < 10 && num > 1) return (num).toFixed(6);
    if (num < 1 && num > 0.1) return (num).toFixed(6);
    if (num < 0.1) return (num).toFixed(6);
} 