let time = 200;
let printArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n']
for (let i = 0; i < printArr.length; i++) {
  setTimeout(() => {
    process.stdout.write(printArr[i]);
  }, time);
  time += 200;
}