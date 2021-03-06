/**
 * 結合処理を実行する.
 */
function execute() {
    var inputText = getDocumentId("inputTextarea").value;
    var inputRows = inputText.split("\n");
    var leftString = getDocumentId("leftString").value;
    var rightString = getDocumentId("rightString").value;
    for (var i = 0; i < inputRows.length; i++) {
        // 対象の行でない場合は除く
        if (!isTargetRow(inputRows[i])) {
            continue;
        }
        var joinString = leftString + inputRows[i] + rightString;
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
 * @param commentSymbol コメント文字列
 */
function isTargetRow(text) {
    if (text.length < 1) {
        return false;
    }
    else {
        return true;
    }
}
