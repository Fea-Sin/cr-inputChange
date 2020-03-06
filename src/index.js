import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/es/input';
import 'antd/es/input/style/css';
import Icon from 'antd/es/icon';
import Tooltip from 'antd/es/tooltip';
import 'antd/es/tooltip/style/css';
import { trim } from './utils/utils';
import OUIDOM from './utils/ouiDomUtils';


class Comp extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      canEdit: false,
      changeTitle: props.title || '',
      icon: true,
    }
    this.initTitle = props.title
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return nextProps.title === prevState.changeTitle
  //     ? null
  //     : { changeTitle: nextProps.title }
  // }

  componentDidMount() {
    
  }

  componentDidUpdate(prevProps) {
    if (prevProps.title !== this.props.title) {
      this.setState({
        changeTitle: this.props.title
      })
    }
  }

  handleClick = (e) => {

    this.setState({
      canEdit: true,
    }, () => {
      const input = this.ID.input;
      input.addEventListener('blur', this.onBlur);
      input.focus();
      input.select();
      this.styleEdit()
    })
  }

  onBlur = (e) => {
    const { post, noValue } = this.props;
    if (this.ID) {
      const input = this.ID.input;
      const value = input.value;
      if (!trim(value)) {
        // console.log('标题不能为空！')
        if (noValue && typeof noValue === 'function') {
          noValue()
        }
        return false;
      }

      this.setState({
        canEdit: false,
      }, () => {
        this.styleTitle()
        if (post && typeof post === 'function') {
          if (this.initTitle !== value)
          post(trim(value))
          this.initTitle = value
        }
      })
    }
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13 && !e.ctrlKey) {
      console.log('点击enter键----')
      this.onBlur()
    }
  }

  handleInput = (e) => {
    const { maxLength } = this.props
    const { value } = e.target;
    if (value && value.length > maxLength) {
      return false;
    }
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

    const { prefixCls, titleStyle } = this.props
    
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
                  style={titleStyle}
                  onKeyUp={this.handleKeyUp}
                />
              : <span style={titleStyle}>{this.state.changeTitle}</span>
            }
          </div>
          {
            this.state.icon &&
            (
              <Tooltip placement='top' title={'编辑'}>
                <div className={`${prefixCls}-handle`} onClick={this.handleClick}>
                  <Icon type="edit" style={{color: '#3E7AFA', pointerEvents: 'none'}} />
                </div>
              </Tooltip>
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
  titleStyle: PropTypes.object,
  noValue: PropTypes.func,
  maxLength: PropTypes.number,
}
Comp.defaultProps = {
  prefixCls: 'cr-inputchange',
  titleStyle: {},
}
export default Comp
