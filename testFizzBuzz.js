function testFizzBuzz(targetNum) {
    //出力用の数値を宣言
    var num = 1;
    //出力用のテキストを宣言
    var result = "";
    //仮引数のtargetNumに到達するまでループ
    for (var i = 0; i < targetNum; i++) {
        if ((num % 3 === 0) && (num % 5 === 0)) { //3の倍数かつ5の倍数の場合
            result = "FizzBuzz";
            //console.log(`Current num is ${num}`);
        }
        else if (num % 3 === 0) { //3の倍数の場合
            result = "Fizz";
            //console.log(`Current num is ${num}`);
        }
        else if (num % 5 === 0) { //5の倍数の場合
            result = "Buzz";
            //console.log(`Current num is ${num}`);
        }
        else { //3の倍数でも5の倍数でもない場合
            result = num.toString();
        }
        //テキストを出力
        console.log(result);
        //出力用の数値を+1
        num++;
    }
}
testFizzBuzz(30);
