import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Layout, Button, Menu } from 'antd'
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout
class Index extends Component {
  state={
    menuTree:[]
  }
  componentDidMount(){
    const menuTree= this.renderMenu(this.props.res.menuRedcuer)
    this.setState({
      menuTree
    })
  }
  renderMenu=(data)=>{
    console.log(data);
    return data.map(item=>{
      if(item.children){
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

  })(Index)