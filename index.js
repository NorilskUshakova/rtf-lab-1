/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) 
{ 
	let n;
	let sum	=0;
	for (let i of array)
	{
		if (typeof(i)!=='number')
		{
			return null;
			break;
		}
		else
		{
			n=(array.reduce((total, current) => total + current))+number;
			while(n > 0)
			{
  				sum += n % 10;
  				num = Math.floor(n / 10);
			}
			return sum;
		}
	}
}

module.exports = {
    addNumber
};
