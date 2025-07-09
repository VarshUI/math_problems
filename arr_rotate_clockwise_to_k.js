function rotate(arr, k)
{
    for (let i = 0; i < k; i++)
    {
        const left = arr.shift();
        arr.push(left)
    }
}