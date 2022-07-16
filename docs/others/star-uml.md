title: StarUML Install
tags:
  - StarUML
categories:
  - UML
author: suda-morris
date: 2015-11-10 15:44:29
---
## StarUML 软件破解
1. [官网地址](http://staruml.io)
2. 该软件为跨平台的UML建模工具，采用NodeJs编写
3. 破解：安装目录/www/license/node/LicenseManagerDomain.js文件修改为如下：
```javascript LicenseManagerDomain.js
(function () {
    "use strict";

    var NodeRSA = require('node-rsa');

    function validate(PK, name, product, licenseKey) {
        var pk, decrypted;
		return {
            name: "morris",
            product: "StarUML",
            licenseType: "vip",
            quantity: "suda_morris.github.io",
            licenseKey: "later equals never!"
        };
        try {
            pk = new NodeRSA(PK);
            decrypted = pk.decrypt(licenseKey, 'utf8');
        } catch (err) {
            return false;
        }
        var terms = decrypted.trim().split("\n");
        if (terms[0] === name && terms[1] === product) {
            return {
                name: name,
                product: product,
                licenseType: terms[2],
                quantity: terms[3],
                licenseKey: licenseKey
            };
        } else {
            return false;
        }
    }

    /**
     * Initializes the domain with several commands.
     * @param {DomainManager} domainManager The DomainManager for the server
     */
    function init(domainManager) {
        if (!domainManager.hasDomain("LicenseManager")) {
            domainManager.registerDomain("LicenseManager", {major: 0, minor: 1});
        }
        domainManager.registerCommand(
            "LicenseManager", // domain name
            "validate",       // command name
            validate,         // command handler function
            false,            // this command is synchronous in Node ("false" means synchronous")
            "Validate License",
            [
                {
                    name: "PK",
                    type: "string",
                    description: "PK"
                },
                {
                    name: "name",
                    type: "string",
                    description: "name of license owner"
                },
                {
                    name: "product",
                    type: "string",
                    description: "product name"
                },
                {
                    name: "licenseKey",
                    type: "string",
                    description: "license key"
                }
            ],
            [
                {
                    name: "result", // return values
                    type: "object",
                    description: "result"
                }
            ]
        );
    }

    exports.init = init;

}());
```
4. 打开软件，，help->Enter License,随便输入用户名密码即可破解成功
