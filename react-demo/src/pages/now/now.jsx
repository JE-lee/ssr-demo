import React, { Component } from "react";
import { connect } from "react-redux";
import { dispatch } from '../../store/index'
import { fetchNowWeather } from "../../store/now-weather";

function nowRender(props) {
  return (
    <div className="page index">
      <div className="row">
        <div id="left" className="col-xs-1">
          <div className="weather-container">
            <div className="search">
              <div className="logo">
                <a href="/">
                  <img
                    src="https://a.hecdn.net/img/ws/1.0/logo-dark.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="search-box">
                <div className="input-group">
                  <input
                    id="search-input"
                    type="text"
                    className="form-control"
                    placeholder="搜索城市"
                  />
                  <span className="input-group-btn">
                    <img
                      src="https://a.hecdn.net/img/ws/1.0/search-icon.png"
                      alt=""
                    />
                  </span>
                </div>
                <ul
                  id="search-result"
                  className="list-group"
                  style={{ display: "none" }}
                ></ul>
              </div>
              <div className="visible-540">
                <a
                  id="index-locate"
                  style={{
                    display: "block",
                    padding: "6px 5px 0",
                  }}
                >
                  <img
                    src="https://a.hecdn.net/img/ws/1.0/locate-black.png"
                    height="22"
                  />
                </a>
              </div>
              <div className="visible-540">
                <button
                  id="menu-panel-toggle-540"
                  type="button"
                  className="navbar-toggle collapsed"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
            </div>
            <div className="current-alarm"></div>

            <div className="now">
              <div className="card">
                <div className="row">
                  <div className="col-xs-6 name">
                    <a href="/weather/jiangmen-101281101.html">
                      {props.basic.location}
                    </a>
                  </div>
                  <div className="col-xs-6 text-right">
                    {props.update.update}
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-4 tmp">
                    <a href="/weather/jiangmen-101281101.html">
                      {props.now.tmp}°
                    </a>
                  </div>
                  <div className="col-xs-4">
                    <div className="air-container">
                      <a href="/air/jiangmen-101281101.html">
                        <span className="txt">{props.now.cond_txt}</span>
                        <span className="air level1">AQI 优</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="/weather/jiangmen-101281101.html">
                      {
                      props.now.cond_code && 
                      <img
                        className="cond"
                        src={`https://a.hecdn.net/img/plugin/190516/icon/c/${props.now.cond_code}d.png`}
                        alt=""
                      />}
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-4">
                    <a href="/weather/jiangmen-101281101.html">
                      {props.now.wind_dir}
                      {props.now.wind_sc}级
                    </a>
                  </div>
                  <div className="col-xs-4 text-left">
                    <a className="uv" href="/weather/jiangmen-101281101.html">
                      紫外线最弱
                    </a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="/weather/jiangmen-101281101.html">
                      相对湿度{props.now.hum}%
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <p className="today-phrase">
                    今天有雷阵雨，温度和昨天差不多，现在27°，空气不错。
                  </p>
                </div>
              </div>
            </div>
            <div className="forecast">
              <table className="table">
                <tbody>
                  <tr>
                    <td width="13%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        今天
                      </a>
                    </td>
                    <td width="13%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <span className="air level2">54</span>
                      </a>
                    </td>
                    <td width="9%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <img
                          src="https://a.hecdn.net/img/plugin/190516/icon/c/302d.png"
                          alt=""
                        />
                      </a>
                    </td>
                    <td>
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <span style={{width:'17.143%'}}>&nbsp;</span>
                        <span>30°</span>
                        <span className="line" style={{ width: '42.857%'}}></span>
                        <span>25°</span>
                      </a>
                    </td>
                    <td width="9%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <img
                          src="https://a.hecdn.net/img/plugin/190516/icon/c/302n.png"
                          alt=""
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td width="13%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        周一
                      </a>
                    </td>
                    <td width="13%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <span className="air level1">35</span>
                      </a>
                    </td>
                    <td width="9%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <img
                          src="https://a.hecdn.net/img/plugin/190516/icon/c/302d.png"
                          alt=""
                        />
                      </a>
                    </td>
                    <td>
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <span style={{width:'0%'}}>&nbsp;</span>
                        <span>32°</span>
                        <span className="line" style={{width:'60%'}}></span>
                        <span>25°</span>
                      </a>
                    </td>
                    <td width="9%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <img
                          src="https://a.hecdn.net/img/plugin/190516/icon/c/302n.png"
                          alt=""
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td width="13%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        周二
                      </a>
                    </td>
                    <td width="13%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <span className="air level2">83</span>
                      </a>
                    </td>
                    <td width="9%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <img
                          src="https://a.hecdn.net/img/plugin/190516/icon/c/302d.png"
                          alt=""
                        />
                      </a>
                    </td>
                    <td>
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <span style={{width:'8.571%'}}>&nbsp;</span>
                        <span>31°</span>
                        <span className="line" style={{width:'51.429%'}}></span>
                        <span>25°</span>
                      </a>
                    </td>
                    <td width="9%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <img
                          src="https://a.hecdn.net/img/plugin/190516/icon/c/101n.png"
                          alt=""
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td width="13%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        周三
                      </a>
                    </td>
                    <td width="13%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <span className="air level3">124</span>
                      </a>
                    </td>
                    <td width="9%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <img
                          src="https://a.hecdn.net/img/plugin/190516/icon/c/300d.png"
                          alt=""
                        />
                      </a>
                    </td>
                    <td>
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <span style={{width:'8.571%'}}>&nbsp;</span>
                        <span>31°</span>
                        <span className="line" style={{width:'51.429%'}}></span>
                        <span>26°</span>
                      </a>
                    </td>
                    <td width="9%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <img
                          src="https://a.hecdn.net/img/plugin/190516/icon/c/101n.png"
                          alt=""
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td width="13%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        周四
                      </a>
                    </td>
                    <td width="13%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <span className="air level3">108</span>
                      </a>
                    </td>
                    <td width="9%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <img
                          src="https://a.hecdn.net/img/plugin/190516/icon/c/300d.png"
                          alt=""
                        />
                      </a>
                    </td>
                    <td>
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <span style={{width:'0%'}}>&nbsp;</span>
                        <span>32°</span>
                        <span className="line" style={{width:'51.429%'}}></span>
                        <span>26°</span>
                      </a>
                    </td>
                    <td width="9%">
                      <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                        <img
                          src="https://a.hecdn.net/img/plugin/190516/icon/c/101n.png"
                          alt=""
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a
              href="https://www.heweather.com/weather30d/jiangmen-101281101.html"
              className="forecast-phrase"
            >
              <table className="table">
                <tbody>
                  <tr>
                    <td width="10%"></td>
                    <td width="80%">
                      <h3>未来30天预报</h3>
                      <p>
                        未来30天将有23天下雨，最高温34°（05月30日），最低温24°（06月14日，06月15日，06月16日，06月18日，06月19日，06月22日）。
                      </p>
                    </td>
                    <td width="10%">
                      <a href="https://www.heweather.com/weather30d/jiangmen-101281101.html">
                        <img
                          src="https://a.hecdn.net/img/ws/1.0/forecast-phrase-right.png"
                          width="13"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


class Now extends Component{
  static asyncData() {
    return dispatch(fetchNowWeather())
  }
  render(){
    return nowRender(this.props)
  }
}

export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({ 
    fetchNowWeather: () => dispatch(fetchNowWeather())
  })
)(Now);
