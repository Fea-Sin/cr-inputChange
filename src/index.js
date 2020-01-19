import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/es/input';
import 'antd/es/input/style/css';
import Icon from 'antd/es/icon';

class Comp extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      canEdit: false,
      changeTitle: props.title || '',
      icon: true
    }
  }

  componentDidMount() {

  }

  handleClick = () => {
    this.setState({
      canEdit: true,
    }, () => {
      const input = this.ID.input;
      input.addEventListener('blur', this.onBlur);
      input.focus();
      this.styleEdit()
    })
  }

  onBlur = (e) => {
    const { post } = this.props;
    const input = this.ID.input;
    input.removeEventListener('blur', this.onBlur);
    this.setState({
      canEdit: false,
    }, () => {
      this.styleTitle()
      if (post && typeof post === 'function') {
        post(input.value)
      }
    })
  }

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({
      changeTitle: value,
    })
  }

  styleEdit = () => {
    const box = document.getElementById('INPUTBOX')
    box.style.width = '500px';
    this.setState({
      icon: false,
    })
  }
  styleTitle = () => {
    const box = document.getElementById('INPUTBOX')
    box.style.width = 'auto';
    this.setState({
      icon: true,
    })
  }

  render () {

    const { prefixCls, title } = this.props
    
    return (
      <div className={`${prefixCls}`}>
        <div className={`${prefixCls}-box`}>
          <div id='INPUTBOX' className={`${prefixCls}-titleBox`}>
            {
              this.state.canEdit
              ? <Input
                  value={this.state.changeTitle}
                  onChange={this.handleInput}
                  ref={ID => this.ID = ID}
                />
              : <span>{this.state.changeTitle}</span>
            }
          </div>
          {
            this.state.icon &&
            (
              <div className={`${prefixCls}-handle`} onClick={this.handleClick}>
                <Icon type="edit" style={{color: '#3E7AFA'}} />
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

Comp.propTypes = {
  prefixCls: PropTypes.string,
  title: PropTypes.string,
  post: PropTypes.func,
}
Comp.defaultProps = {
  prefixCls: 'cr-inputchange'
}
export default Comp
