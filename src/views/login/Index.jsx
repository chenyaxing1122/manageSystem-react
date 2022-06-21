import React, { Component } from 'react'
import style from './index.module.css'
import { Card, Tabs, Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { loginAction, menuAction } from '../../redux/actions/login'
import { loginApi } from "../../api/login"
import { asyncRouterMap } from "../../common/routerMap"
import { filterMenu } from "../../utils/menuFilter"
const { TabPane } = Tabs;


class Index extends Component {
  login = () => {
    const { loginAction, menuAction ,history} = this.props
    this.formRef.validateFields().then(res => {
      loginApi(res).then(res => {
        sessionStorage.setItem('token', res.token)
        loginAction({
          role: res.role,
          nickname: res.nickname
        })
        menuAction(filterMenu(asyncRouterMap, res.role))
        history.push("/home")
        //路由权限管控
      }).catch(err => {
        console.log("登陆出错:", err);
      })
    }).catch((err) => {
      console.log(err)
    })
  }
  render() {
    return (
      <div className={style.wrap}>
        <Card title="好学教育管理系统" style={{ width: 500 }} bordered={false} headStyle={{ textAlign: 'center' }}>
          <Tabs defaultActiveKey="1" tabBarStyle={{ width: "100%" }}>
            <TabPane tab="手机号密码登录" key="1">
              <Form
                name="basic"
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                ref={(a) => { this.formRef = a }}
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" style={{ width: "100%" }} onClick={this.login}>
                    登陆
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="用户注册" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </Card>
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