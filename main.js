/**
 * 結合処理を実行する.
 */
function execute() {
    var inputText = getDocumentId("inputTextarea").value;
    var inputRows = inputText.split("\n");
    var leftString = getDocumentId("leftString").value;
    var rightString = getDocumentId("rightString").value;
    var commentSymbol = getDocumentId("commentSymbol").value == "" ? "//" : getDocumentId("commentSymbol").value;
    for (var i = 0; i < inputRows.length; i++) {
        var commentString = "";
        // 空白行の場合は除く
        if (!isTargetRow(inputRows[i])) {
            continue;
        }
        // コメントされている行は除く
        if (!isCommentRow(inputRows[i], commentSymbol)) {
            continue;
        }
        // 右側にコメントがある場合、コメント文字列として退避させておく
        var position = isComment(inputRows[i], commentSymbol);
        if (position != 0) {
            commentString = inputRows[i].substr(position, inputRows[i].length);
            inputRows[i] = (inputRows[i].replace(commentString, "").trim());
        }
        var joinString = leftString + inputRows[i] + rightString + " " + commentString;
        inputRows[i] = joinString;
    }
    var outputTextarea = document.getElementById("outputTextarea");
    outputTextarea.value = inputRows.join("\n");
}
/**
 * 指定したIDを持つエレメントを返す.
 * @param id エレメントID
 */
function getDocumentId(id) {
    return document.getElementById(id);
}
/**
 * 操作すべき行か判定する.
 * @param text 判定する対象テキスト
 */
function isTargetRow(text) {
    if (text.length < 1) {
        return false;
    }
    else {
        return true;
    }
}
/**
 * コメント行か判定する.
 * @param text 判定する対象テキスト
 * @param commentSymbol コメント判定に使う文字列
 */
function isCommentRow(text, commentSymbol) {
    if (text.trim().startsWith(commentSymbol)) {
        return false;
    }
    return true;
}
/**
 * コメントか判定する.
 * @param text 判定する対象テキスト
 * @param commentSymbol コメント判定に使う文字列
 */
function isComment(text, commentSymbol) {
    var position = 0;
    if (text.match(commentSymbol)) {
        position = text.lastIndexOf(commentSymbol);
        return position;
    }
    return position;
}
