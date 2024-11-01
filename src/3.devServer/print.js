export default function printMe() {
  console.log('I get called from print.js!');
  cosnole.log('我被 print.js 调用了！'); // 通过source map，可以在开发环境快速定位错误源代码
}