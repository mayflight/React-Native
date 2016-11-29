##简单的UI控件学习
运行工程（以iOS为例，Andriod类似）：
1、Download project from https://github.com/mayflight/React-Native.git
2、cd React-Native
3、npm install
4、react-native run-ios

可以在index.ios.js的View里面添加代码

##此次更新解决了ListView超出屏幕后无法滚动的问题
如果ListView有父视图View，View的style都必须有个样式flex:1
无论有几层View，必须每层View都有这个样式flex:1
