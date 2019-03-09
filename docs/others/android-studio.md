title: Android Studio Install
tags:
  - Android
categories:
  - Mobile
author: suda-morris
date: 2016-01-19 10:06:41 +0800
---
## 最新安装的Android Studio打开软件特别慢，总是卡在“Fetching Android SDK component information”，如何解决？
1. 进入Android Studio的安装目录下的bin目录，找到idea.properties文件，用文本编辑器打开
2. 在idea.properties文件末尾天剑一行：disable.android.first.run=true,然后保存文件
3. 关闭Android Studio后重新启动

## 给Android Studio安装Genymotion插件
1. File->Settings
2. 找到plugins设置项，点击Browser，输入：genymotion关键字，安装相应插件
3. 重启android studio后，点击Genymotion插件的图标，设置Genymotion在本地的路径，完成后就告成

## 设置自动导入依赖包
1. File->Settings->Editor
2. 找到Auto Import选项，使能：show import popup，Optimize imports on the fly，Add unambiguous imports on the fly

## 常用功能
1. Gradle同步，在项目运行或者更改Gradle配置的时候都要点击下这个按钮，会下载相应的依赖
2. AVD Manager，模拟器管理
3. SDK Manager，管理SDK版本
4. DDMS即Dalvik Debug Monitor Service，Dalvik调试监控服务

## Gradle
1. Gradle是一种依赖管理工具，基于Groovy语言，面向Java应用为主，它抛弃了基于XML的各种繁琐配置，而取而代之的是一种基于Groovy的内部领域特定（DSL）语言
2. Android Studio中新建项目成功后会自动下载Gradle，Windows下回安装到：C:\Documents and Settings\<用户名>.gradle\wrapper\dists 目录
3. 命令行Gradle编译过程
	1. 切换到项目根目录，执行./gradlew -v来查看项目所用的Gradle版本，如果是第一次执行，将会去下载Gradle
	2. 接着执行./gradlew clean，清除项目根目录/app目录下的build文件夹
	3. 最后执行./gradlew build,检查依赖，直接编译生成相应的apk文件。接着在项目根目录/app/build/outputs/apk目录下会看到类似于app-debug-unaligned.apk，app-release-unsigned.apk等，unaligned代表没有进行zip优化的，unsigned代表没有签名的。
	4. gradlew build命令吧debug、release环境的包都打出来，如果正式发布只需要打Release的包，就需要这样使用：
		1. ./gradlew assembleDebug编译并打Debug包
		2. ./gradlew assembleRelease编译并打Release包
	5. 除此以外，assemble除了能和BuildType结合外还能和ProductFlavor结合，实质上，assemble是和Build Variants一起结合使用的，而Build Variants=Build Type + Product Flavor，例如如果想打包豌豆荚渠道的release版本，执行如下命令：``./gradle assembleWandoujiaRelease``,如果只打豌豆荚渠道的版本，则：``./gradle assembleWandoujia``
4. 与Gradle相关的几个文件
	1.  项目根目录/app/build.gradle,这个文件是app文件下下这个Module的gradle配置文件，在里面会指明要编译成安卓的应用程序（com.android.application）还是库（com.android.library）；指明编译SDK的版本，build tools的版本（根据实际开发者已经下载好的版本来修改），指明应用的包名，支持的最小的SDK版本，目标SDK版本，要编译在lib目录下的哪些jar包。
	2. 项目根目录/build.gradle，这个文件是整个项目的基础配置文件，内容主要包括两个方面，一个是声明仓库的源，一般是jcenter，jcenter可以理解成是一个新的中央远程仓库，兼容maven中心仓库，而且性能更优。另一个是声明了android gradle plugin的版本
	3. 项目根目录/settings.gradle，这个文件是全局的项目配置文件，里面主要声明一些需要加入gradle的module，例如：``include ':app', ':extras:ShimmerAndroid'``,文件中的app，extra：ShimmerAndroid都是module，如果还有其他module都需要按照如上格式加进去
5. 完整的gradle脚本
```C
apply plugin: 'com.android.application'

def releaseTime() {
    return new Date().format("yyyy-MM-dd", TimeZone.getTimeZone("UTC"))
}

android {
    compileSdkVersion 21
    buildToolsVersion '21.1.2'

    defaultConfig {
        applicationId "com.boohee.*"
        minSdkVersion 14
        targetSdkVersion 21
        versionCode 1
        versionName "1.0"

        // dex突破65535的限制
        multiDexEnabled true
        // 默认是umeng的渠道
        manifestPlaceholders = [UMENG_CHANNEL_VALUE: "umeng"]
    }

    lintOptions {
        abortOnError false
    }

    signingConfigs {
        debug {
            // No debug config
        }

        release {
            storeFile file("../yourapp.keystore")
            storePassword "your password"
            keyAlias "your alias"
            keyPassword "your password"
        }
    }

    buildTypes {
        debug {
            // 显示Log
            buildConfigField "boolean", "LOG_DEBUG", "true"

            versionNameSuffix "-debug"
            minifyEnabled false
            zipAlignEnabled false
            shrinkResources false
            signingConfig signingConfigs.debug
        }

        release {
            // 不显示Log
            buildConfigField "boolean", "LOG_DEBUG", "false"

            minifyEnabled true
            zipAlignEnabled true
            // 移除无用的resource文件
            shrinkResources true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
            signingConfig signingConfigs.release

            applicationVariants.all { variant ->
                variant.outputs.each { output ->
                    def outputFile = output.outputFile
                    if (outputFile != null && outputFile.name.endsWith('.apk')) {
                        // 输出apk名称为boohee_v1.0_2015-01-15_wandoujia.apk
                        def fileName = "boohee_v${defaultConfig.versionName}_${releaseTime()}_${variant.productFlavors[0].name}.apk"
                        output.outputFile = new File(outputFile.parent, fileName)
                    }
                }
            }
        }
    }

    // 友盟多渠道打包
    productFlavors {
        wandoujia {}
        _360 {}
        baidu {}
        xiaomi {}
        tencent {}
        taobao {}
        ...
    }

    productFlavors.all { flavor ->
        flavor.manifestPlaceholders = [UMENG_CHANNEL_VALUE: name]
    }
}

dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    compile 'com.android.support:support-v4:21.0.3'
    compile 'com.jakewharton:butterknife:6.0.0'
    ...
}
```