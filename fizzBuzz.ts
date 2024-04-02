/*
FizzBuzzの要件は以下のように定められます

- プログラムは任意の数値を受け取る
    - 本課題では、30で固定して良いです
- 受け取った数値まで1から順番に1つずつ増加させる
- 増加させた結果、3の倍数だったら Fizz と出力する
- 増加させた結果、5の倍数だったら Buzz と出力する
- 増加させた結果、3の倍数かつ5の倍数だったら FizzBuzz と出力する
- それ以外は数値を出力する

これを実装してみてください。
*/

function fizzBuzz(targetNum: number) {
    
    //出力用のテキストを宣言
    let result = "";

    //仮引数のtargetNumに到達するまでループ
    for (let i = 1; i <= targetNum; i++) {
        
        if ((i % 3 === 0) && (i % 5 === 0)) { //3の倍数かつ5の倍数の場合
            result = "FizzBuzz";
        }
        else if (i % 3 === 0) { //3の倍数の場合
            result = "Fizz";
        }
        else if (i % 5 === 0) { //5の倍数の場合
            result = "Buzz";
        }
        else { //3の倍数でも5の倍数でもない場合
            result = i.toString();
        }
        //テキストを出力
        console.log(result);
    }
}

testFizzBuzz(30);
