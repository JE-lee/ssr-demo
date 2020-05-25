<template>
  <div class="page index">
    <div class="row">
      <div id="left" class="col-xs-1">
        <div class="weather-container">
          <div class="search">
            <div class="logo">
              <a href="/">
                <img src="https://a.hecdn.net/img/ws/1.0/logo-dark.png" alt="">
              </a>
            </div>
            <div class="search-box">
              <div class="input-group">
                <input id="search-input" type="text" class="form-control" placeholder="搜索城市">
                <span class="input-group-btn">
                <img src="https://a.hecdn.net/img/ws/1.0/search-icon.png" alt="">
              </span>
              </div>
              <ul id="search-result" class="list-group" style="display: none">
              </ul>
            </div>
            <div class="visible-540">
              <a id="index-locate" href="javascript:void(0)" style="display: block;padding: 6px 5px 0">
                <img src="https://a.hecdn.net/img/ws/1.0/locate-black.png" height="22">
              </a>
            </div>
            <div class="visible-540">
              <button id="menu-panel-toggle-540" type="button" class="navbar-toggle collapsed">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
            </div>
          </div>
          <div class="current-alarm">
          </div>

          <div class="now">
            <div class="card">
              <div class="row">
                <div class="col-xs-6 name"><a href="/weather/jiangmen-101281101.html">{{weather.basic.location}}</a>
                </div>
                <div class="col-xs-6 text-right">{{weather.update.update}}</div>
              </div>
              <div class="row">
                <div class="col-xs-4 tmp">
                  <a href="/weather/jiangmen-101281101.html">
                    {{weather.now.tmp}}°
                  </a>
                </div>
                <div class="col-xs-4">
                  <div class="air-container">
                    <a href="/air/jiangmen-101281101.html">
                      <span class="txt">{{weather.now.cond_txt}}</span>
                        <span
                          class="air level1">
                          AQI 优
                        </span>
                    </a>
                  </div>
                </div>
                <div class="col-xs-4 text-center">
                  <a href="/weather/jiangmen-101281101.html">
                    <img class="cond" v-if="weather.now.cond_code" :src="`https://a.hecdn.net/img/plugin/190516/icon/c/${weather.now.cond_code}d.png`" alt="">
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-4">
                  <a href="/weather/jiangmen-101281101.html">{{weather.now.wind_dir}}{{weather.now.wind_sc}}级</a>
                </div>
                <div class="col-xs-4 text-left">
                  <a class="uv" href="/weather/jiangmen-101281101.html">紫外线最弱</a>
                </div>
                <div class="col-xs-4 text-center">
                  <a href="/weather/jiangmen-101281101.html">相对湿度{{weather.now.hum}}%</a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <p class="today-phrase">今天有雷阵雨，温度和昨天差不多，现在27°，空气不错。</p>
              </div>
            </div>
          </div>
          <div class="forecast">
            <table class="table">
              <tbody>
                <tr>
                  <td width="13%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">今天</a>
                  </td>
                  <td width="13%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <span
                        class="air level2">54</span>
                    </a>
                  </td>
                  <td width="9%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <img src="https://a.hecdn.net/img/plugin/190516/icon/c/302d.png" alt="">
                    </a>
                  </td>
                  <td>
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <span style="width: 17.143%;">&nbsp;</span>
                      <span>30°</span><span class="line" style="width: 42.857%;"></span><span>25°</span>
                    </a>
                  </td>
                  <td width="9%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <img src="https://a.hecdn.net/img/plugin/190516/icon/c/302n.png" alt="">
                    </a>
                  </td>
                </tr>
                <tr>
                  <td width="13%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">周一</a>
                  </td>
                  <td width="13%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <span
                        class="air level1">35</span>
                    </a>
                  </td>
                  <td width="9%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <img src="https://a.hecdn.net/img/plugin/190516/icon/c/302d.png" alt="">
                    </a>
                  </td>
                  <td>
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <span style="width: 0%;">&nbsp;</span>
                      <span>32°</span><span class="line" style="width: 60%;"></span><span>25°</span>
                    </a>
                  </td>
                  <td width="9%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <img src="https://a.hecdn.net/img/plugin/190516/icon/c/302n.png" alt="">
                    </a>
                  </td>
                </tr>
                <tr>
                  <td width="13%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">周二</a>
                  </td>
                  <td width="13%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <span
                        class="air level2">83</span>
                    </a>
                  </td>
                  <td width="9%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <img src="https://a.hecdn.net/img/plugin/190516/icon/c/302d.png" alt="">
                    </a>
                  </td>
                  <td>
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <span style="width: 8.571%;">&nbsp;</span>
                      <span>31°</span><span class="line" style="width: 51.429%;"></span><span>25°</span>
                    </a>
                  </td>
                  <td width="9%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <img src="https://a.hecdn.net/img/plugin/190516/icon/c/101n.png" alt="">
                    </a>
                  </td>
                </tr>
                <tr>
                  <td width="13%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">周三</a>
                  </td>
                  <td width="13%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <span
                        class="air level3">124</span>
                    </a>
                  </td>
                  <td width="9%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <img src="https://a.hecdn.net/img/plugin/190516/icon/c/300d.png" alt="">
                    </a>
                  </td>
                  <td>
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <span style="width: 8.571%;">&nbsp;</span>
                      <span>31°</span><span class="line" style="width: 42.857%;"></span><span>26°</span>
                    </a>
                  </td>
                  <td width="9%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <img src="https://a.hecdn.net/img/plugin/190516/icon/c/101n.png" alt="">
                    </a>
                  </td>
                </tr>
                <tr>
                  <td width="13%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">周四</a>
                  </td>
                  <td width="13%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <span
                        class="air level3">108</span>
                    </a>
                  </td>
                  <td width="9%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <img src="https://a.hecdn.net/img/plugin/190516/icon/c/300d.png" alt="">
                    </a>
                  </td>
                  <td>
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <span style="width: 0%;">&nbsp;</span>
                      <span>32°</span><span class="line" style="width: 51.429%;"></span><span>26°</span>
                    </a>
                  </td>
                  <td width="9%">
                    <a href="https://www.heweather.com/weather/jiangmen-101281101.html">
                      <img src="https://a.hecdn.net/img/plugin/190516/icon/c/101n.png" alt="">
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a href="https://www.heweather.com/weather30d/jiangmen-101281101.html" class="forecast-phrase">
            <table class="table">
              <tbody>
                <tr>
                  <td width="10%">
                  </td>
                  <td width="80%">
                    <h3>未来30天预报</h3>
                    <p>未来30天将有23天下雨，最高温34°（05月30日），最低温24°（06月14日，06月15日，06月16日，06月18日，06月19日，06月22日）。</p>
                  </td>
                  <td width="10%">
                    <a href="https://www.heweather.com/weather30d/jiangmen-101281101.html">
                      <img src="https://a.hecdn.net/img/ws/1.0/forecast-phrase-right.png" width="13">
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
</template>
<script>
import { getNowWeather } from '../services/api'
const fetchNowWeather = ($axios) => {
  return getNowWeather.apply({ $axios })
    .then(res => {
      return { weather: res.HeWeather6[0] }
    })
}
export default {
  asyncData({ $axios }) {
    return fetchNowWeather($axios)
  },
  data() {
    return {
      weather: {
        basic: {},
        now: {},
        update: {}
      }
    }
  }
}
</script>

<style>

</style>