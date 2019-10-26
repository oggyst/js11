
function run(max , min) 
{   
    const intNumberOfColumns = document.getElementById('numberOfColumns').value;
    if(intNumberOfColumns == "" )
    {
        alert('Please fill required fields.');
    } else if (intNumberOfColumns < 1)
        alert('Number of columns and rows must be 1 or greater');
    else
        {
        document.write ('<style>td{border:1px solid black;}.main{color:blue;}.secondary{color:red;}</style>');
        let arrMatrix = [[]];
        let arrElements = [];
        document.write('<table><tr><td></td>')
         for (var i = 0; i< intNumberOfColumns; i++)
        {
            arrElements [i] = Math.floor(Math.random() * (max - min + 1)) + min;
            document.write('<td>' + arrElements[i] + '</td>');
        }
        document.write('</tr>');
        for(var i = 0; i < intNumberOfColumns; i++)
        {
            arrMatrix[i] = [];
            for (var j = 0; j < intNumberOfColumns; j++)
            {
                if(j==0)
                {
                    document.write('<tr><td>' + arrElements[i] + '</td>');
                }
                arrMatrix [i][j] = arrElements[i] * arrElements [j];
                if (i == j)
                {
                    document.write('<td class = "main">' + arrMatrix[i][j] + '</td>'); 
                }
                else if ((i + j) == (intNumberOfColumns -1 )    )
                {
                    document.write('<td class = "secondary">' + arrMatrix[i][j] + '</td>'); 
                }
                else {
                document.write('<td>' + arrMatrix[i][j] + '</td>');
                }
            }
            document.write('</tr>');
        }
        document.write('</table>');
        arrNewMatrix = arrMatrix;
    }
} 