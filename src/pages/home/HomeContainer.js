import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'

import img1 from 'img/1.png'
import img2 from 'img/2.png'
import img3 from 'img/3.png'
import img4 from 'img/4.png'
import img5 from 'img/5.png'
import img6 from 'img/6.png'
import img7 from 'img/7.png'
import img8 from 'img/8.png'

import { OneContainer as One } from 'pages/one'
import { TwoContainer as Two } from 'pages/two'
import { ThreeContainer as Three } from 'pages/three'
import { FourContainer as Four } from 'pages/four'

export class HomeContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        selectedTab: 'cookbooks',
        fullScreen: true,
      }
    }
    render() {
      return (
        <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
          <TabBar
            unselectedTintColor="#666"
            tintColor="#000"
            barTintColor="white"
          >
            <TabBar.Item
              title="首页"
              key="cookbooks"
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${img1}) center center /  25px 25px no-repeat` }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${img2}) center center /  25px 25px no-repeat` }}
              />
              }
              selected={this.state.selectedTab === 'cookbooks'}
              onPress={() => {
                this.setState({
                  selectedTab: 'cookbooks',
                });
              }}
              data-seed="logId"
            >
              <One></One>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${img3}) center center /  25px 25px no-repeat` }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${img4}) center center /  25px 25px no-repeat` }}
                />
              }
              title="9块9包邮"
              key="category"
              selected={this.state.selectedTab === 'category'}
              onPress={() => {
                this.setState({
                  selectedTab: 'category',
                });
              }}
              data-seed="logId1"
            >
           <Two></Two>
              {/* <Menu></Menu> */}
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${img5}) center center /  25px 25px no-repeat` }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${img6}) center center /  25px 25px no-repeat` }}
                />
              }
              title="搜券"
              key="map"
              selected={this.state.selectedTab === 'map'}
              onPress={() => {
                this.setState({
                  selectedTab: 'map',
                });
              }}
            >
              <Three></Three>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${img7}) center center /  25px 25px no-repeat` }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${img8}) center center /  25px 25px no-repeat` }}
                />
              }
              title="我"
              key="map1"
              selected={this.state.selectedTab === 'map1'}
              onPress={() => {
                this.setState({
                  selectedTab: 'map1',
                });
              }}
            >
              <Four></Four>
            </TabBar.Item>
          </TabBar>
        </div>
      )
    }
  }
  
  export default HomeContainer