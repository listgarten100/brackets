//start task
module.exports = function check(str, bracketsConfig) {
 
    let arrConf = bracketsConfig.flat();
    let arrStr = str.split('');
    let res = [];

    for(let i = 0; i < arrStr.length; i++) {
        let strItem = arrStr[i];
        let bracketInd = arrConf.indexOf(strItem);

        if (arrConf[bracketInd] === arrConf[bracketInd + 1]) {
            if (res[res.length - 1] !== bracketInd) res.push(bracketInd);
            else res.pop();

        } else {  
            if(bracketInd % 2 === 0) res.push(bracketInd + 1);
            else{
                if(res.pop() !== bracketInd) return false;
            }
        }
    }
       return res.length === 0;
};
