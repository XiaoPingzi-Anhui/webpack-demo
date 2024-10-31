import _ from 'lodash';
import './style.css';
import Icon from './assets/icon.png';
import Data from './assets/data/data.xml';
import Notes from './assets/data/data.csv';
import Json from './assets/data/data.json'; // json 文件是内置支持的，需要使用默认导出
import toml from './assets/data/data.toml';
import yaml from './assets/data/data.yaml';
import json from './assets/data/data.json5';

console.log(toml.title); // 输出 `TOML Example`
console.log(toml.owner.name); // 输出 `Tom Preston-Werner`

console.log(yaml.title); // 输出 `YAML Example`
console.log(yaml.owner.name); // 输出 `Tom Preston-Werner`

console.log(json.title); // 输出 `JSON5 Example`
console.log(json.owner.name); // 输出 `Tom Preston-Werner`

function component() {
  const element = document.createElement('div');

  // lodash 现在使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到已经存在的 div 中
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);
  console.log(Json);

  return element;
}

document.body.appendChild(component());