require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ReactDOM from 'react-dom';

// 获取图片的 json 数据
var imagesData = require('../data/imageDatas.json');

require('../styles/common.css');

// 根据图片的文件名，生成图片URL
imagesData = (function getImageURL(imagesDataArray) {
  for (var i = 0, j = imagesDataArray.length; i < j; i++) {
    var singleImageData = imagesDataArray[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName);

    imagesDataArray[i] = singleImageData;
  }
  return imagesDataArray;
})(imagesData);

class AppComponent extends React.Component {
  
  render() {

    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
