/**
 * 結合処理を実行する.
 */
function execute():void{
    const inputText:string = getDocumentId("inputTextarea").value;
    const inputRows:string[] = inputText.split("\n");
    const leftString:string = getDocumentId("leftString").value;
    const rightString:string = getDocumentId("rightString").value;

    for (let i = 0; i < inputRows.length; i++){
        // 対象の行でない場合は除く
        if (!isTargetRow(inputRows[i])){
            continue; 
        }
        

        const joinString:string = leftString + inputRows[i] + rightString
        inputRows[i] = joinString;

    }
    let outputTextarea:HTMLInputElement = <HTMLInputElement>document.getElementById("outputTextarea");
    outputTextarea.value = inputRows.join("\n");
}

/**
 * 指定したIDを持つエレメントを返す.
 * @param id エレメントID
 */
function getDocumentId(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

/**
 * 操作すべき行か判定する.
 * @param text 判定する対象テキスト
 * @param left 左側に追加したい文字列
 */
 function isTargetRow(text:string):boolean{
    if (text.length < 1){
        return false;
    }
    else{
        return true;
    }
    
}