import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Testone from '..'
import '../assets/index.less'

const reactContainer = document.getElementById('__react-content');
const bodyContainer = document.getElementsByTagName('body')
bodyContainer[0].style.padding = '10px'
reactContainer.style.cssText = `
                                border: 1px solid #11d0bc;
                                padding: 10px;
                                margin-bottom: 10px;
                               `

const doPost = (val) => {
  console.log('保存数据----', val)
}

function render(container) {
  ReactDOM.render(
    <div>
      <h2>RESCT COMPONENT TEMPLATE</h2>
      <Testone
        title='传入文本'
        post={doPost}
        titleStyle={{fontSize: 30, color: 'green'}}
      />
    </div>, container
  )
}

render(reactContainer)
