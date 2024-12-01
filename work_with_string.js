// программа, считающая количество слов строке

string = "мяу мур мрр";
const cleanedStr = string.replace(/[.,!?;]*/g, '');
const words = cleanedStr.split(/\s+/);

counter = 0

for (i = 0; i < words.length; i++) {
    console.log(words[i])
    counter++
}

console.log("Количество слов -", counter)