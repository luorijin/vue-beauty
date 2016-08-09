webpackJsonp([18,19],{9:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{apis:Array}}},10:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){hljs.initHighlightingOnLoad()},methods:{handleOpen:function(){this.open=!this.open}}}},11:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},12:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E658";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}',""])},13:function(e,t,o){var s=o(11);"string"==typeof s&&(s=[[e.id,s,""]]);o(2)(s,{});s.locals&&(e.exports=s.locals)},14:function(e,t,o){var s=o(12);"string"==typeof s&&(s=[[e.id,s,""]]);o(2)(s,{});s.locals&&(e.exports=s.locals)},15:function(e,t){e.exports=' <section class="markdown api-container"> <h2>API</h2> <slot></slot> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr v-for="api in apis"> <td>{{api.parameter}}</td> <td>{{api.explain}}</td> <td>{{api.type}}</td> <td>{{api.default}}</td> </tr> </tbody> </table> </section> '},16:function(e,t){e.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{title}}</a></div> <div><p>{{describe}}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{code}}</code></pre> </div> </section> </section> '},17:function(e,t,o){var s,a;o(13),s=o(9),a=o(15),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},18:function(e,t,o){var s,a;o(14),s=o(10),a=o(16),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},85:function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(95),r=s(a);t["default"]=r["default"]},86:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{type:{type:String,require:!0,"default":"info"},closable:{type:Boolean,"default":!1},closeText:{type:String,require:!1},message:{type:String,require:!0},description:{type:String,require:!1},showIcon:{type:Boolean,"default":!1},onClose:{type:Function,require:!1},closed:{type:Boolean,"default":!1}},data:function(){return{iconClass:""}},computed:{iconClass:function o(){var o="";switch(this.type){case"success":o="check-circle";break;case"info":o="info-circle";break;case"warning":o="exclamation-circle";break;case"error":o="cross-circle"}return this.description&&(o+="-o"),o}},methods:{handleClose:function(e){this.closed=!0,this.onClose()}}}},94:function(e,t){e.exports=" <div class=ant-alert :class=\"['ant-alert-'+type,{'ant-alert-with-description':description, 'ant-alert-no-icon':!showIcon}]\" v-if=!closed transition=bounce> <i class=\"ant-alert-icon anticon\" :class=\"'anticon-'+iconClass\" v-if=showIcon></i> <span class=ant-alert-message>{{message}}</span> <span class=ant-alert-description>{{description}}</span> <a class=ant-alert-close-icon v-if=closable @click=handleClose> {{closeText}} <i class=\"anticon anticon-cross\" v-if=!closeText></i> </a> </div> "},95:function(e,t,o){var s,a;s=o(86),a=o(94),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},149:function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(85),r=s(a),i=o(18),n=s(i),l=o(17),c=s(l);t["default"]={data:function(){return{onClose:function(){console.log(this)},apis:[{parameter:"type",explain:"必选参数，指定警告提示的样式，有四种选择 success、info、warning、error",type:"String","default":"info"},{parameter:"closable",explain:"可选参数，默认不显示关闭按钮",type:"Boolean","default":"false"},{parameter:"closeText",explain:"可选参数，自定义关闭按钮",type:"String","default":"无"},{parameter:"message",explain:"必选参数，警告提示内容",type:"String","default":"无"},{parameter:"description",explain:"可选参数，警告提示的辅助性文字介绍",type:"String","default":"无"},{parameter:"onClose",explain:"可选参数，关闭时触发的回调函数",type:"Function","default":"无"},{parameter:"showIcon",explain:"可选参数，是否显示辅助图标",type:"Boolean","default":"false"},{parameter:"closed",explain:"可选参数，控制组件隐藏显示，默认显示",type:"Boolean","default":"false"}]}},components:{vAlert:r["default"],codeBox:n["default"],apiTable:c["default"]}}},183:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,"",""])},208:function(e,t,o){var s=o(183);"string"==typeof s&&(s=[[e.id,s,""]]);o(2)(s,{});s.locals&&(e.exports=s.locals)},257:function(e,t){e.exports=' <div> <section class=markdown> <h1>Alert 警告提示</h1> <p> 警告提示，展现需要关注的信息。 </p> <h2>何时使用</h2> <ul> <li>当某个页面需要向用户显示警告的信息时。</li> <li>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</li> </ul> <h2>组件演示</h2> </section> <div class=ant-row style="margin-left: -8px; margin-right: -8px"> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=基础 describe=最简单的用法，适用于简短的警告提示。 code=\'<v-alert type="success" message="成功提示的文案"></v-alert>\'> <v-alert type=success message=成功提示的文案></v-alert> </code-box> <code-box title=可关闭的警告提示 describe=显示关闭按钮，点击可关闭警告提示。 code=\'<v-alert type="warning" message="警告提示的文案"></v-alert>\n<v-alert type="error" message="错误提示的文案"\ndescription="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"\nclosable></v-alert>\'> <v-alert type=warning message=警告提示的文案></v-alert> <v-alert type=error message=错误提示的文案 description=错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍 closable></v-alert> </code-box> <code-box title=图标 describe=可口的图标让信息类型更加醒目。 code=\'<v-alert type="success" message="成功提示的文案" show-icon></v-alert>\n<v-alert type="info" message="消息提示的文案" show-icon></v-alert>\n<v-alert type="warning" message="警告提示的文案" show-icon></v-alert>\n<v-alert type="error" message="错误提示的文案" show-icon></v-alert>\n<v-alert type="success" message="成功提示的文案" show-icon\n  description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍"\n></v-alert>\n<v-alert type="info" message="消息提示的文案" show-icon\n  description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"\n></v-alert>\n<v-alert\n  type="warning" message="警告提示的文案" show-icon\n  description="警告提示的辅助性文字介绍警告提示的辅助性文字介绍"\n></v-alert>\n<v-alert\n  type="error" message="错误提示的文案" show-icon\n  description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"\n></v-alert>\'> <v-alert type=success message=成功提示的文案 show-icon></v-alert> <v-alert type=info message=消息提示的文案 show-icon></v-alert> <v-alert type=warning message=警告提示的文案 show-icon></v-alert> <v-alert type=error message=错误提示的文案 show-icon></v-alert> <v-alert type=success message=成功提示的文案 show-icon description=成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍></v-alert> <v-alert type=info message=消息提示的文案 show-icon description=消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍></v-alert> <v-alert type=warning message=警告提示的文案 show-icon description=警告提示的辅助性文字介绍警告提示的辅助性文字介绍></v-alert> <v-alert type=error message=错误提示的文案 show-icon description=错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍></v-alert> </code-box> </div> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=四种样式 describe="共有四种样式 success、info、warning、error。" code=\'<v-alert type="success" message="成功提示的文案"></v-alert>\n<v-alert type="info" message="消息提示的文案"></v-alert>\n<v-alert type="warning" message="警告提示的文案"></v-alert>\n<v-alert type="error" message="错误提示的文案"></v-alert>\'> <v-alert type=success message=成功提示的文案></v-alert> <v-alert type=info message=消息提示的文案></v-alert> <v-alert type=warning message=警告提示的文案></v-alert> <v-alert type=error message=错误提示的文案></v-alert> </code-box> <code-box title=含有辅助性文字介绍 describe=含有辅助性文字介绍的警告提示。 code=\'<v-alert type="success" message="成功提示的文案"\n  description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍"\n></v-alert>\n<v-alert type="info" message="消息提示的文案"\n  description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"\n></v-alert>\n<v-alert\n  type="warning" message="警告提示的文案"\n  description="警告提示的辅助性文字介绍警告提示的辅助性文字介绍"\n></v-alert>\n<v-alert\n  type="error" message="错误提示的文案"\n  description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"\n></v-alert>\'> <v-alert type=success message=成功提示的文案 description=成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍></v-alert> <v-alert type=info message=消息提示的文案 description=消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍></v-alert> <v-alert type=warning message=警告提示的文案 description=警告提示的辅助性文字介绍警告提示的辅助性文字介绍></v-alert> <v-alert type=error message=错误提示的文案 description=错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍></v-alert> </code-box> <code-box title=自定义关闭 describe="可以自定义关闭，自定义的文字会替换原先的关闭 Icon。" code=\'<v-alert type="info" message="消息提示的文案" close-text="不再提醒"  closable :on-close="onClose" ></v-alert>\'> <v-alert type=info message=消息提示的文案 close-text=不再提醒 closable :on-close=onClose></v-alert> </code-box> </div> </div> <api-table :apis=apis></api-table> </div> '},298:function(e,t,o){var s,a;o(208),s=o(149),a=o(257),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)}});