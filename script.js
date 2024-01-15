//Compiler
function runCode() {
  let HTMLCode = document.getElementsByClassName("HTMLCode").value;
  let CSSCode = document.getElementById("CSSCode").value;
  let JSCode = document.getElementById("JSCode").value;
  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML =
    HTMLCode + "<style>" + CSSCode + "</style>";
  output.contentWindow.eval(JSCode);
}

//CopyCodeHTML
document.getElementById("copyCodeHTML").onclick = function () {
  let copyTextHTML = document.getElementById("copyTextHTML");
  document.getElementById("HTMLCode").select();
  document.execCommand("copy");
  copyTextHTML.style.display = "block";
  setTimeout(function () {
    copyTextHTML.style.display = "none";
  }, 1000);
};
//CopyCodeCSS
document.getElementById("copyCodeCSS").onclick = function () {
  let copyTextCSS = document.getElementById("copyTextCSS");
  document.getElementById("CSSCode").select();
  document.execCommand("copy");
  copyTextCSS.style.display = "block";
  setTimeout(function () {
    copyTextCSS.style.display = "none";
  }, 1000);
};
//CopyCodeJS
document.getElementById("copyCodeJS").onclick = function () {
  let copyTextJS = document.getElementById("copyTextJS");
  document.getElementById("JSCode").select();
  document.execCommand("copy");
  copyTextJS.style.display = "block";
  setTimeout(function () {
    copyTextJS.style.display = "none";
  }, 1000);
};

//bar
bar.onclick = function () {
  document.getElementById("content").classList.toggle("shrink");
  document.getElementById("navRightChild").classList.toggle("show");
};

//HTMLFile
document.getElementById("HTMLFile").onclick = function () {
  HTMLFile.classList.toggle("color");
  document.getElementById("fileDropDown").classList.toggle("showFileDropDown");
  document.getElementById("HTMLFileImport").onclick = async function(){
    let [fileHandle] = await window.showOpenFilePicker();
    let fileData = await fileHandle.getFile();
    let text = await fileData.text();
    localStorage.setItem("HTMLCode",text);
    HTMLCode.innerHTML = text;
  };
};

//CSSFile
document.getElementById("CSSFile").onclick = async function () {
  let [fileHandle] = await window.showOpenFilePicker();
  let fileData = await fileHandle.getFile();
  let text = await fileData.text();
  CSSCode.innerHTML = text;
};

//JSFile
document.getElementById("JSFile").onclick = async function () {
  let [fileHandle] = await window.showOpenFilePicker();
  let fileData = await fileHandle.getFile();
  let text = await fileData.text();
  JSCode.innerHTML = text;
};

//HTMLFileExport
document.getElementById("HTMLFileExport").onclick = function(){
  let HTMLCode = localStorage.getItem("HTMLCode");
  let file = new Blob([HTMLCode],{type: "text"});
  let a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.download = "index.html";
  a.click();
}