import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Balloon, Icon } from '@icedesign/base';
import FoundationSymbol from 'foundation-symbol';
import IceImg from '@icedesign/img';
import Logo from '../Logo';
import './Header.scss';

@withRouter
export default class Header extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <Logo isDark />

          <Balloon
            trigger={
              <div
                className="ice-design-header-userpannel"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 12,
                }}
              >
                <IceImg
                  height={40}
                  width={40}
                  src={require('./images/avatar.png')}
                  className="user-avatar"
                />
                <div className="user-profile">
                  <span className="user-name" style={{ fontSize: '13px' }}>
                    淘小宝
                  </span>
                  <br />
                  <span className="user-department">技术部</span>
                </div>
                <Icon
                  type="arrow-down-filling"
                  size="xxs"
                  className="icon-down"
                />
              </div>
            }
            closable={false}
            className="user-profile-menu"
          >
            <ul>
              <li className="user-profile-menu-item">
                <Link to="/">
                  <FoundationSymbol type="person" size="small" />
                  我的主页
                </Link>
              </li>
              <li className="user-profile-menu-item">
                <Link to="/">
                  <FoundationSymbol type="repair" size="small" />
                  设置
                </Link>
              </li>
              <li className="user-profile-menu-item">
                <Link to="/">
                  <FoundationSymbol type="compass" size="small" />
                  退出
                </Link>
              </li>
            </ul>
          </Balloon>
        </div>
      </div>
    );
  }
}
