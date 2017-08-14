# react-native_practice1
这只是一个rn的练习Demo。强烈建议使用mac电脑去开发RN，据使用Windows开发的同事吐槽，在Windows上遇到过很多无解的大坑。
通过这个练习掌握RN的目录结构，布局，事件等。
## 目录结构：
### 1.Android文件夹：android原生代码文件夹，使用android studio打开RN项目：file-open选中RN项目中的android目录点击打开，如果集成了react-native-config这个库，可能会报某个arg为null的错误，此时需要修复node_module中react-native-config/android/dotenv.gradle中getCurrentFlavor函数需要替换成下面这样的：
>
```gradle
def getCurrentFlavor() {
	Gradle gradle = getGradle()
	String tskReqStr = gradle.getStartParameter().getTaskRequests().toString()
	Pattern pattern = Pattern.compile("(assemble|generate|install)(.*?)(Debug|Release)")
	Matcher matcher = pattern.matcher(tskReqStr)

	if( matcher.find() ) {
	String variant = matcher.group(2) + matcher.group(3)
	return variant.toLowerCase()
	} else {
	    return "";
	}
}
```

>
> 改了之后sync一下就可以在as上跑RN了，为啥要这样改具体原因不是很清楚。
### 2.ios文件夹：ios原生代码文件夹。如果安装了Xcode那么打开ios双击.xcworkspace文件就能在Xcode编译运行RN项目了。不过使用Xcode运行时编译报错third-party库找不到，原因是npm start的时候依赖库会下载到node_modules文件中，但node_module/react-native/third-party下载不全，导致编译不过，此时只要能把third-party下载下来，然后解压拷贝到node_module/react-native目录下再reload就可以了。
### 3.index.android.js 在android平台上渲染的主界面
### 4.index.ios.js 在ios平台上渲染的主界面（也可以写一个界面js，然后让index.ios.js和index.android.js同时引用这个js文件）
### 5.package.json项目信息，包括name，version以及项目的依赖包信息（dependencies和devDependencies）
### 6.app.js 应用信息包括name，displayName