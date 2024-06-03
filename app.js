for (let i = 1; i <= 20 ; i++) {
    console.log(i)

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + '---> Frontend Simplfied')
    }

    else if (i % 3 == 0) {
        console.log(i +" ---> Frontend")
    }
    else if (i % 5 == 0) {
        console.log(i + '---> Simplfied')
    }

    
}