## cr-comp

react component


## Usage


```jsx
import React from 'react';
import InputChange from 'cr-inputchange';
import 'cr-inputchange/assets/index.css';

const doPost = (val) => {
  console.log('数据保存', val)
}
function ChangeText() {
  return (
    <InputChange
      title='传入文本'
      post={doPost}
      titleStyle={{fontSize: 20}}
    />
  )
}

```

## API

| name | type | description |
| --- | --- | --- |
| title | 'string' | 文本框初始文本数据 |
| post | 'function' | 数据修改后回掉函数 |
| titleStyle | React.CSSProperties | 文本样式 |

## Development

```
git clone https://github.com/Fea-Sin/cr-inputChange.git
npm install
npm start
```

## Example

http://localhost:8018/examples/testOne.html

## Test
  ```js
  npm test
  
  npm run coverage
  ```



## License

cr-inputChange is released under the MIT license.
