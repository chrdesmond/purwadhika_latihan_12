//1
/*
buat majority element yang merupakan elemen yang muncul lebih dari [n / 2]
misal ada array nums = [3,2,3], maka jumlah elemen arraynya ada 3 dan dibagi 2 yang hasilnya 1/2. 
Di array [3,2,3] elemen yang muncul lebih dari 1/2 adalah 3 dengan 2 elemen yang sama.

step
tulis arraynya
buat function
buat loopingnya
buat if
munculkan hasilnya
*/
let nums = [3,2,3]
function majorityElement(nums) {
    half = nums.length / 2
    
    for(let i = 0; i < nums.length; i++){
        let majority = 0
        for(let j = 0; j < nums.length; j++){
            if(nums[i] == nums[j]){
                majority += 1
            }
        }
        if(majority > half) {
            return nums[i]
        }
    }
    return -1
}

console.log(majorityElement([3,2,3]))
console.log(majorityElement([3,2,3,2,5,2,2]))

//2
/*
buat function untuk mengubah roman numeral ke integer
tahap:
1. membuat function
2. membuat for loop
3. membuat pengartian angka biasa ke roman numeral
I = 1
V = 5
X = 10
*/
function romanNumeral(str){
    let obj = {
        "I" : 1,
        "IV": 4,
        "V" : 5,
        "IX": 9,
        "X" : 10,
        "XL": 40,
        "L" : 50,
        "XC": 90,
        "C" : 100,
        "CD": 400,
        "D" : 500,
        "CM": 900,
        "M" : 1000
    }
    let result = 0

    for(i = 0; i < str.length; i++){
        if(obj[str[i]] < obj[str[i+1]]){
            result += obj[str[i]+str[i+1]]
            i += 1
        } else {
            result += obj[str[i]]
        }
    }
    return result
}

console.log(romanNumeral("XIXIV"))
console.log(romanNumeral("MCMXCIV"))

//3
/*
membuat segitiga pascal
di pascal triangle, setiap angka adalah total dari 2 angka di atasnya
misal:
Example 1:
○ Input: numRows = 5
○ Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
step:
1. membuat function
2. membuat variabel kosong atau temp
3. membuat loop dalam loop
4. lakukan rumus penambahan
*/
function segitigaPascal(angka) {
    let res = []
    for(let i = 0; i < angka; i++){ //looping baris
        let arr2 = []
        for(let j = 0; j < i; j++){ //looping jumlah item yang masuk ke row
            if(j == 0 || j == i - 1){
                arr2.push(1)
            } else{
                let total = res[i-1][j-1] + res[i-1][j]
                arr2.push(total)
            }
        }
        res.push(arr2)
    }
    return res
}

console.log(segitigaPascal(10))


//4
/*
ada array yang berisi harga. kita ingin memaksimalkan profit dengan memilih 1 hari untuk membeli 1 stok dan memilih hari yang berbeda intuk kedepannya
misal prices = [7,1,5,3,6,4]. beli di hari pertama dan selanjutnya dan cari hari yang menghasilkan profit terbesar.
*/
function stockExchange(arr){
    let maxProfit = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] - arr[i] > maxProfit){
                maxProfit = arr[j] - arr[i]
            }
        }
    }
    return maxProfit
}

console.log(stockExchange([7,1,5,3,6,4]))
console.log(stockExchange([7,6,4,3,1]))