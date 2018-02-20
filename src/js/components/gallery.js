import React from 'react';

// 获取图片相关数据
var imageDatas = require('../../data/imageDatas.json');

function genImageURL(imageDatasArr) {
	for(var i= 0,j = imageDatasArr.length; i < j; i++) {
		var singleImageData = imageDatasArr[i];
		singleImageData.imageURL = require('../../images/' + singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
}

// 将图片名信息转换成图片URL路径信息
imageDatas = genImageURL(imageDatas)

export default class Gallery extends React.Component {

	render() {
		return (
			<section className="stage">
				<section className="img-sec">你好</section>
				<section className="controller-nav"></section>
			</section>
		);
	}
}
