/**
 * 結合処理を実行する.
 */
function execute():void{
    const inputText:string = getDocumentId("inputTextarea").value;
    const inputRows:string[] = inputText.split("\n");
    const leftString:string = getDocumentId("leftString").value;
    const rightString:string = getDocumentId("rightString").value;
    const commentSymbol:string = getDocumentId("commentSymbol").value == "" ? "//" : getDocumentId("commentSymbol").value;

    for (let i = 0; i < inputRows.length; i++){
        var commentString:string = "";

        // 空白行の場合は除く
        if (!isTargetRow(inputRows[i])){
            continue; 
        }
        
        // コメントされている行は除く
        if (!isCommentRow(inputRows[i], commentSymbol)){
            continue;
        }
        
        // 右側にコメントがある場合、コメント文字列として退避させておく
        var position:number = isComment(inputRows[i], commentSymbol)
        if(position != 0){
            commentString = inputRows[i].substr(position,inputRows[i].length)
            inputRows[i] = (inputRows[i].replace(commentString,"").trim())
        }        

        const joinString:string = leftString + inputRows[i] + rightString + " " + commentString
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
 */
 function isTargetRow(text:string):boolean{
    if (text.length < 1){
        return false;
    }
    else{
        return true;
    }
    
}
/**
 * コメント行か判定する.
 * @param text 判定する対象テキスト
 * @param commentSymbol コメント判定に使う文字列
 */
 function isCommentRow(text:string, commentSymbol:string):boolean{
    if (text.trim().startsWith(commentSymbol)){
        return false;
    }
    return true;
}

/**
 * コメントか判定する.
 * @param text 判定する対象テキスト
 * @param commentSymbol コメント判定に使う文字列
 */
 function isComment(text:string, commentSymbol:string):number{
    var position:number = 0
    if(text.match(commentSymbol)){
        position = text.lastIndexOf(commentSymbol)
        return position;
    }
    return position;
}