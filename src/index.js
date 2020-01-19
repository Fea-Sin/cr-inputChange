import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/es/input';
import 'antd/es/input/style/css';

class Comp extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('component up date', prevState)
  }

  render () {

    const { prefixCls } = this.props
    
    return (
      <div className={`${prefixCls}`}>
        <div className={`${prefixCls}-box`}>
          <div className={`${prefixCls}-titleBox`}>1</div>
          <div className={`${prefixCls}-handle`}>2</div>
        </div>
        <Input />
      </div>
    )
  }
}

Comp.propTypes = {
  prefixCls: PropTypes.string
}
Comp.defaultProps = {
  prefixCls: 'cr-inputchange'
}
export default Comp
