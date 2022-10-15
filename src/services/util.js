// start ~ end - 1 범위의 배열 리턴
export const range = (start, end) => {
    const result = [];
    for(let i=start; i<end; i++)
        result.push(i);
    return result;
}