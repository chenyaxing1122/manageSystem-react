import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd'
import { getInfo } from "../../api/login"
import { loginAction, menuAction } from '../../redux/actions/login'
import { asyncRouterMap } from "../../common/routerMap"
import { filterMenu } from "../../utils/menuFilter"
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout
class Index extends Component {
  state = {
    menuTree: []
  }
  componentDidMount() {
    //判断用户是否刷新
    if (this.props.res.menuReducer.length) {
      const menuTree = this.renderMenu(this.props.res.menuReducer)
      this.setState({
        menuTree
      })
    } else {
      //刷新
      getInfo().then(res => {

        //重新设置
        const { loginAction, menuAction } = this.props;
        loginAction({
          role: res.data.role,
          nickname: res.data.nickname
        })
        menuAction(filterMenu(asyncRouterMap, res.data.role))
        console.log("刷新了", this.props.res)
        const menuTree = this.renderMenu(this.props.res.menuReducer)
        this.setState({
          menuTree
        })


      })
    }

  }
  renderMenu = (data) => {
    return data.map(item => {
      if (item.children) {
        return <SubMenu title={item.meta.title} key={item.path}>
          {this.renderMenu(item.children)}
        </SubMenu>
      }
      return <Menu.Item key={item.path}>{item.meta.title}</Menu.Item>
    })
  }
  render() {
    return (
      <div>
        <Layout style={{ height: "100vh" }}>
          <Sider style={{ background: "gray" }}>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
            >
              {this.state.menuTree}
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ color: "#fff" }}>Header</Header>
            <Content>Content</Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default connect(
  state => ({
    res: state
  }),
  {
    loginAction,
    menuAction
  }
)(Index)