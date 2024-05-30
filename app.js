let cash = 109
let price = 40

if (cash > price) {
    console.log(`here is ${cash - price} dollars change`)
}

else if (cash === price) {
    console.log9`you paid the exact amount thank you`
}

else {
    console.log(`thats not enough money u poor bitch, you still owe me ${(cash - price) * -1} dollars`)
}