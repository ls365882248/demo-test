import React from 'react';
import Swiper from 'swiper';
import axios from 'axios';
import 'swiper/css/swiper.css';
import './index.scss';

const { useEffect } = React;

interface ITest {
  p1: string;
  p2: number;
  p3: string[];
}

interface ITestNest {
  n1: ITest[]
}

const Home = () => {
  useEffect(() => {
    // var mySwiper = new Swiper('.swiper-container', {
    //   autoplay: true,//可选选项，自动滑动
    // })

    axios.get('/v2/data', {
      params: {
        name: 'carl'
      }
    }).then((res) => {
      console.log(444, res)
    })
    axios.get('/v2/data/2345').then((res) => {
      console.log(5555, res)
    })
    // axios.get('/v2/data/query', {
    //   params: {
    //     name: 'carl'
    //   }
    // }).then((res) => {
    //   console.log(7777, res)
    // })
    // axios.get('/v2/base').then((res) => {
    //   console.log(333, res)
    // })
    axios.post('http://yapi.datagrand.cn/mock/324/v2/data').then((res) => {
      console.log(222, res);
    })
  }, [])

  const testEvent = () => {
    // async function foo() {
    //   console.log('foo')
    // }
    // async function bar() {
    //   console.log('bar start')
    //   await foo()
    //   console.log('bar end')
    // }
    // console.log('script start')
    // setTimeout(function () {
    //   console.log('setTimeout')
    // }, 0)
    // bar();
    // new Promise(function (resolve) {
    //   console.log('promise executor')
    //   resolve();
    // }).then(function () {
    //   console.log('promise then')
    // })
    // console.log('script end')
  }

  testEvent();

  return (
    <div className="swiper-container">
      {/* <div className="swiper-wrapper">
        <div className="swiper-slide">slider1</div>
        <div className="swiper-slide">slider2</div>
        <div className="swiper-slide">slider3</div>
      </div>
      <div className='flex-demo'>
        <section className="gray"></section>
        <div className="green"></div>
        <section className="yellow"></section>
      </div> */}
    </div>
  )
}

export default Home;