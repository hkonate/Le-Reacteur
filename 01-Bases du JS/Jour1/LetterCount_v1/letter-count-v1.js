const str = "le reacteur c'est super !";
let counter = 0; // stocke le nombre de e

// début de votre code 
for(let i = 0; i < str.length; i++)
{
    if(str[i] === 'e')
    {
        counter++;
    }
}
// fin de votre code
console.log(counter);