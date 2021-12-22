var temp, rev=0, num=454,rem;
temp=num;

while(num > 0) {
  rem = num % 10;
  rev = rev * 10 + rem;
  num = num / 10;
}
if (temp == rev) {
  console.log("Number is palindrome");
} else {
  console.log("Number is not palindrome");
}