function download(url) {
  const a = document.createElement("a");
  a.href = url;
  a.download = url.split("./sample resume/resume.pdf").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
