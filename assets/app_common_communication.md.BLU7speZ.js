import{_ as a,c as e,o as s,a4 as i}from"./chunks/framework.DhooLXd5.js";const l="/assets/telegram.BWGF4RIV.png",r="/assets/qq-3.B61JuGMR.png",t="/assets/qq-1.BjllvxG_.png",n="/assets/qq-2.ZOUfH_da.png",p="/assets/wechat-1.DELdGF7U.png",h="/assets/wechat-2.iDE6pYay.png",o="/assets/skype.7uksZ-Oi.png",d="/assets/discord.u3idjId_.png",c="/assets/teamspeak3.uqpNUbQZ.png",u="/assets/slack.CTl1MsKs.png",k="/assets/zoom.DdrvlB_n.png",g="/assets/meeting-2.zDs648aU.png",b="/assets/thunderbird.Deyll6pw.png",m="/assets/kmail.CuB17NfB.png",S=JSON.parse('{"title":"聊天通讯","description":"","frontmatter":{"sidebarDepth":2,"prev":"/advanced/btrfs.md"},"headers":[],"relativePath":"app/common/communication.md","filePath":"app/common/communication.md","lastUpdated":1719757770000}'),v={name:"app/common/communication.md"},y=i('<h1 id="聊天通讯" tabindex="-1">聊天通讯 <a class="header-anchor" href="#聊天通讯" aria-label="Permalink to &quot;聊天通讯&quot;">​</a></h1><blockquote><h3 id="🍻-海上生明月-天涯共此时" tabindex="-1">🍻 海上生明月，天涯共此时 <a class="header-anchor" href="#🍻-海上生明月-天涯共此时" aria-label="Permalink to &quot;🍻 海上生明月，天涯共此时&quot;">​</a></h3><p>这一小节讨论在 archlinux 上安装常用的聊天通讯软件</p></blockquote><blockquote><h3 id="🔖-这一节将会讨论" tabindex="-1">🔖 这一节将会讨论： <a class="header-anchor" href="#🔖-这一节将会讨论" aria-label="Permalink to &quot;🔖 这一节将会讨论：&quot;">​</a></h3><details class="details custom-block"><summary>目录</summary><nav class="table-of-contents"><ul><li><a href="#💬-即时通讯">💬 即时通讯</a><ul><li><a href="#telegram">Telegram</a></li><li><a href="#qq">QQ</a></li><li><a href="#微信">微信</a></li><li><a href="#wine版">wine版</a></li><li><a href="#skype">Skype</a></li><li><a href="#discord">Discord</a></li><li><a href="#teamspeak-3">TeamSpeak 3</a></li></ul></li><li><a href="#🤝🏻-团队合作">🤝🏻 团队合作</a><ul><li><a href="#slack">Slack</a></li></ul></li><li><a href="#📹-网络会议">📹 网络会议</a><ul><li><a href="#zoom">Zoom</a></li><li><a href="#腾讯会议">腾讯会议</a></li></ul></li><li><a href="#✉️-电子邮件">✉️ 电子邮件</a><ul><li><a href="#thunderbird">Thunderbird</a></li><li><a href="#kmail">KMail</a></li><li><a href="#mailspring">Mailspring</a></li></ul></li></ul></nav></details></blockquote><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>指南中带有 <sup>aur</sup> 角标的软件代表是在 <a href="https://aur.archlinux.org/" target="_blank" rel="noreferrer">AUR</a>（Arch User Repository）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>cn</sup> 角标的软件代表是在 <a href="https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/" target="_blank" rel="noreferrer">archlinuxcn</a>（Arch Linux 中文社区仓库）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>EULA</sup> 角标的软件代表是 <a href="https://www.gnu.org/proprietary/proprietary.html" target="_blank" rel="noreferrer">专有软件</a>。请自行斟酌是否使用。</p></div><h2 id="💬-即时通讯" tabindex="-1">💬 即时通讯 <a class="header-anchor" href="#💬-即时通讯" aria-label="Permalink to &quot;💬 即时通讯&quot;">​</a></h2><h3 id="telegram" tabindex="-1">Telegram <a class="header-anchor" href="#telegram" aria-label="Permalink to &quot;Telegram&quot;">​</a></h3><p>Telegram（电报）是跨平台的即时通信软件。其客户端是自由软件（桌面端在 <a href="https://github.com/telegramdesktop/tdesktop/blob/dev/LICENSE" target="_blank" rel="noreferrer">GPLv3</a> 协议下发布），但服务器是专有软件。</p><p>Telegram 有两种加密模式：</p><ul><li>一般聊天 —— 使用<strong>端到端</strong>的加密通信，但服务端会有访问密钥的权限，而且可以经由多重设备登录</li><li>秘密聊天 —— 使用<strong>端对端</strong>的加密通信，而且只能经由两个特定设备登录</li></ul><p>官方宣称当两名用户进行通信时，第三方包含管理人员皆无法访问用户的通信内容。当用户在进行秘密聊天时，消息包含多媒体皆可以被指定为自毁消息，当消息被用户阅读之后，消息在指定的时间内会自动销毁。一旦消息过期，消息会消失在用户的设备上。</p><ol><li><p>安装 <code>Telegram</code><sup>extra / cn / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-a_jqO" id="tab-aFf-e40" checked="checked"><label for="tab-aFf-e40">extra</label><input type="radio" name="group-a_jqO" id="tab-SnUdZGX"><label for="tab-SnUdZGX">cn (git)</label><input type="radio" name="group-a_jqO" id="tab-iW3fm9g"><label for="tab-iW3fm9g">aur</label><input type="radio" name="group-a_jqO" id="tab-wy2Qnla"><label for="tab-wy2Qnla">aur（dev）</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> telegram-desktop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> telegram-desktop-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> telegram-desktop-bin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> telegram-desktop-bin-dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+l+'" alt="telegram"></p></li><li><p>调整隐私权限以及自动下载：</p><ul><li><p>在 <code>Settings</code>（设置） &gt; <code>Advanced</code>（高级） &gt; <code>Automatic media download</code>（自动媒体下载） 中分别将 <code>In private chats</code>（私聊中）、<code>In groups</code>（群组中） 和 <code>In channels</code>（频道中） 的 <code>Files</code>（文件） 关掉，以避免下载病毒以及垃圾文件</p></li><li><p>在 <code>Settings</code>（设置） &gt; <code>Privacy and Security</code>（隐私和安全） &gt; <code>Privacy</code>（隐私） 中将 <code>Phone number</code>（电话号码） 改为 <code>Nobody</code>（仅联系人可见）、将 <code>Forwarded messages</code>（转发的消息）、<code>Calls</code>（语音通话） 和 <code>Groups &amp; channels</code>（邀请权限） 分别改为 <code>My contacts</code>（仅联系人）</p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>更进一步，可将 <code>Phone number</code> 中的 <code>Who can find me by my number</code> 改为 <code>My contacts</code>，这将使只有双向联系人（即双方手机都有对方的电话号码）才可以通过电话号码添加您为好友。这可以在一定程度增加安全性。</p></div></li></ul></li></ol><blockquote><h4 id="💕-相关链接-archlinux-telegram-相关群组" tabindex="-1">💕 相关链接：archlinux Telegram 相关群组 <a class="header-anchor" href="#💕-相关链接-archlinux-telegram-相关群组" aria-label="Permalink to &quot;💕 相关链接：archlinux Telegram 相关群组&quot;">​</a></h4><ul><li><a href="https://t.me/archlinuxcn_group" target="_blank" rel="noreferrer">#archlinux-cn</a></li><li><a href="https://t.me/archlinuxcn_offtopic" target="_blank" rel="noreferrer">#archlinux-cn-offtopic</a></li><li><a href="https://t.me/FSF_Ministry_of_Truth" target="_blank" rel="noreferrer">ArchLinuxStudio🇨🇦🏳️‍⚧️🏳️‍🌈</a></li></ul></blockquote><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>目前官方中文语言包还不完整，可以通过点击第三方语言包链接设置 Telegram 为中文：</p><ul><li>简体： <ul><li><a href="https://t.me/setlanguage/zhcncc" target="_blank" rel="noreferrer">聪聪</a></li><li><a href="https://t.me/setlanguage/jianghu" target="_blank" rel="noreferrer">江湖</a></li><li><a href="https://t.me/setlanguage/zhlangcn" target="_blank" rel="noreferrer">langCN</a></li><li><a href="https://t.me/setlanguage/zh-hans-beta" target="_blank" rel="noreferrer">zh-hans</a></li><li><a href="https://t.me/setlanguage/moecn" target="_blank" rel="noreferrer">Moecn</a></li></ul></li><li>繁体： <ul><li><a href="https://t.me/setlanguage/hongkong" target="_blank" rel="noreferrer">繁體一</a></li><li><a href="https://t.me/setlanguage/zhhant-hk" target="_blank" rel="noreferrer">繁體二</a></li></ul></li></ul></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>虽然 Telegram 很“自由”，但也带来了很多问题：</p><ul><li>牵涉恐怖活动 —— 2015 年 11 月，由于伊斯兰国（ISIS）相关组织使用频繁，Telegram 移除了近 250 个所使用广播频道，并屏蔽其所属账号并且持续每天移除近百频道</li><li>非法出售个人信息 —— 2020 年 3 月中旬，中华人民共和国江苏园区公安分局网安大队在“净网 2020”专项行动的网络巡查中获取了一条网民通过 Telegram 出售公民个人信息的线索，并于 4 月 22 日在广东东莞和湖南衡阳逮捕 6 名嫌疑犯，查获过百万条公民个人信息</li><li>传播钓鱼木马 —— 2020 年 12 月 26 日，金山毒霸安全团队通过“捕风”威胁感知系统捕获一类新的钓鱼木马，该类木马在 Telegram 群组中传播，通过命名成各种时政热点消息的标题或者更改图标伪装成正规软件，诱使用户点击</li><li>传播色情、侵犯著作权的内容 —— 2018 年下半年至 2020 年 3 月间，韩国有人通过 Telegram 组建多个聊天室并收取费用，进行了有组织的、大规模的性虐待事件，即震惊韩国社会的 N 号房事件</li><li>颠覆国家政权 —— 2019 年 6 月，“反修例运动”期间，香港很多“抗议者”使用 Telegram 来逃避电子监视</li></ul><p>使用 Telegram 时注意安全，保护好个人隐私；同时也要注意谨言慎行。</p></div><blockquote><h4 id="🍧-碎碎念" tabindex="-1">🍧 碎碎念 <a class="header-anchor" href="#🍧-碎碎念" aria-label="Permalink to &quot;🍧 碎碎念&quot;">​</a></h4><p>道也者，不可须臾离也；可离，非道也。是故君子戒慎乎其所不睹，恐惧乎其所不闻。莫见乎隐，莫显乎微，故君子慎其独也。</p></blockquote><h3 id="qq" tabindex="-1">QQ <a class="header-anchor" href="#qq" aria-label="Permalink to &quot;QQ&quot;">​</a></h3><p>推荐安装官方最新的<a href="https://aur.archlinux.org/packages/linuxqq" target="_blank" rel="noreferrer"><code>linuxqq</code></a><sup>EULA / aur</sup>（基于 Electron 框架）</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linuxqq</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>wrap 版本<a href="https://aur.archlinux.org/packages/linuxqq-nt-bwrap" target="_blank" rel="noreferrer"><code>linuxqq-nt-bwrap</code></a><sup>EULA / aur</sup>，该版本限制了 qq 的目录访问</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linuxqq-nt-bwrap</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+r+'" alt="qq-3"></p><h4 id="其它版本" tabindex="-1">其它版本 <a class="header-anchor" href="#其它版本" aria-label="Permalink to &quot;其它版本&quot;">​</a></h4><p>基于 <a href="https://aur.archlinux.org/packages/deepin-wine5" target="_blank" rel="noreferrer"><code>deepin-wine5</code></a><sup>EULA / extra / cn / aur</sup> 的 QQ。</p><ol><li><p>安装 <a href="https://aur.archlinux.org/packages/deepin-wine-qq/" target="_blank" rel="noreferrer"><code>deepin-wine-qq</code></a><sup>aur</sup>：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deepin-wine-qq</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+t+'" alt="qq-1"></p></li><li><p>参考 <a href="./../../guide/advanced/debug.html#deepin-wine5-相关">deepin-wine5 相关</a> 完成配置：</p><p><img src="'+n+'" alt="qq-2"></p></li></ol><h4 id="第三方" tabindex="-1">第三方 <a class="header-anchor" href="#第三方" aria-label="Permalink to &quot;第三方&quot;">​</a></h4><p>以下为第三方版本 QQ</p><ul><li>Icalingua <a href="https://aur.archlinux.org/packages/icalingua/" target="_blank" rel="noreferrer"><code>Icalingua</code></a><sup>aur</sup> - electron 开发的第三方<s>QQ</s> (<a href="https://github.com/Icalingua/Icalingua" target="_blank" rel="noreferrer"><s>github</s></a>)(作者已删库)<div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> icalingua</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>Icalingua++ <a href="https://aur.archlinux.org/packages/icalingua++/" target="_blank" rel="noreferrer"><code>Icalingua++</code></a><sup>aur</sup> - electron 开发的第三方 QQ (<a href="https://github.com/Icalingua-plus-plus/Icalingua-plus-plus" target="_blank" rel="noreferrer">github</a>)(为 icalingua 升级版)<div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> icalingua++</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><h3 id="微信" tabindex="-1">微信 <a class="header-anchor" href="#微信" aria-label="Permalink to &quot;微信&quot;">​</a></h3><p>2024 年 3 月，微信 Linux 原生版重构，可以安装 <a href="https://aur.archlinux.org/packages/wechat-uos-qt/" target="_blank" rel="noreferrer"><code>wechat-uos-qt</code></a><sup>aur</sup> 体验，这是目前最好的解决方案。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wechat-uos-qt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>对于沙盒等存在的一些问题可以参照<a href="https://wiki.archlinuxcn.org/wiki/%E5%BE%AE%E4%BF%A1" target="_blank" rel="noreferrer">Wiki</a>来解决。</p><h3 id="wine版" tabindex="-1">wine版 <a class="header-anchor" href="#wine版" aria-label="Permalink to &quot;wine版&quot;">​</a></h3><p>基于目前社区的反馈，更推荐使用上游来自 Deepin 社区主导的星火商店，用 <code>wine</code> 运行的 <a href="https://aur.archlinux.org/packages/com.qq.weixin.spark" target="_blank" rel="noreferrer"><code>com.qq.weixin.spark</code></a><sup>EULA / aur</sup>，功能相对较全也较少 bug。</p><ol><li><p>安装 <a href="https://aur.archlinux.org/packages/com.qq.weixin.spark" target="_blank" rel="noreferrer"><code>com.qq.weixin.spark</code></a><sup>EULA / aur</sup>：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.qq.weixin.spark</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+p+'" alt="wechat-1"></p></li><li><p>如果存在透明窗口等问题，可以考虑使用 <a href="https://github.com/archlinuxcn/repo/tree/master/archlinuxcn/wine-for-wechat" target="_blank" rel="noreferrer"><code>wine-for-wechat</code></a><sup>cn</sup>：</p><p><img src="'+h+'" alt="wechat-2"></p></li></ol><h4 id="其它版本-1" tabindex="-1">其它版本 <a class="header-anchor" href="#其它版本-1" aria-label="Permalink to &quot;其它版本&quot;">​</a></h4><p>以下为其它的微信版本，但体验一般：</p><ul><li><p><a href="https://aur.archlinux.org/packages/wechat-uos/" target="_blank" rel="noreferrer"><code>wechat-uos</code></a><sup>aur</sup> —— UOS 版本原生微信的移植版本</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wechat-uos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><p>相关内容：<a href="https://wiki.archlinuxcn.org/wiki/%E5%BE%AE%E4%BF%A1" target="_blank" rel="noreferrer">ArchWiki - 微信</a></p><h3 id="skype" tabindex="-1">Skype <a class="header-anchor" href="#skype" aria-label="Permalink to &quot;Skype&quot;">​</a></h3><p>Skype 是一款通信应用软件，可通过互联网为电脑、平板电脑和移动设备提供与其它联网设备或传统电话 / 智能手机间进行视频通话和语音通话的服务。用户也可通过 Skype 收发即时通讯信息、传输文件、收发多媒体信息、进行视频会议。</p><p>目前 Skype 归微软所有。</p><p>安装 <a href="https://www.skype.com/zh-Hans/" target="_blank" rel="noreferrer">Skype</a><sup>EULA / cn / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-HXopU" id="tab-KUeJ_2T" checked="checked"><label for="tab-KUeJ_2T">cn</label><input type="radio" name="group-HXopU" id="tab-_7jQWCk"><label for="tab-_7jQWCk">aur</label><input type="radio" name="group-HXopU" id="tab-ZCB_nI1"><label for="tab-ZCB_nI1">cn（preview）</label><input type="radio" name="group-HXopU" id="tab-p6D_qm5"><label for="tab-p6D_qm5">aur（preview）</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> skypeforlinux-stable-bin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aur/skypeforlinux-stable-bin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> skypeforlinux-preview-bin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aur/skypeforlinux-preview-bin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+o+'" alt="skype"></p><h3 id="discord" tabindex="-1">Discord <a class="header-anchor" href="#discord" aria-label="Permalink to &quot;Discord&quot;">​</a></h3><p><a href="https://discord.com/" target="_blank" rel="noreferrer">Discord</a> 是一款专为社区设计的免费网络实时通话软件与数字发行平台，主要针对游戏玩家、教育人士及商业人士，用户之间可以在其中的聊天频道通过信息、图片、视频和音频进行互动。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/discord/" target="_blank" rel="noreferrer">Discord</a>：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> discord</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+d+'" alt="discord"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>类似 Telegram，Discord 同样存在诸多不正当内容（包括但不限于种族歧视、色情内容等）。</p><p>请注意安全、保护好隐私、文明上网。</p></div><h3 id="teamspeak-3" tabindex="-1">TeamSpeak 3 <a class="header-anchor" href="#teamspeak-3" aria-label="Permalink to &quot;TeamSpeak 3&quot;">​</a></h3><p>一款代替 <code>YY语音</code> <code>Discord</code> 等游戏语音聊天软件，有占用资源低、连接快捷、自带 Opus 音频解码器、无广告、全平台、语音加密传输、可自建服务器、可随意调节的“语音感应激活”功能告别通讯底噪和键盘噪音。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> teamspeak3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+c+'" alt="teamspeak3"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><ol><li><p><a href="https://www.wevg.org/archives/fix-ts3-linux-plugin/" target="_blank" rel="noreferrer">中文汉化</a> 没有目录就创建目录，脚本需要给执行权限</p></li><li><p>直接 <code>/opt/teamspeak3/package_inst Chinese_Translation_zh-CN.ts3_translation</code></p></li><li><p>以上汉化 二选一</p></li><li><p><a href="https://www.wevg.org/archives/how-to-use-teamspeak3/" target="_blank" rel="noreferrer">新手指南</a></p></li></ol></div><h2 id="🤝🏻-团队合作" tabindex="-1">🤝🏻 团队合作 <a class="header-anchor" href="#🤝🏻-团队合作" aria-label="Permalink to &quot;🤝🏻 团队合作&quot;">​</a></h2><h3 id="slack" tabindex="-1">Slack <a class="header-anchor" href="#slack" aria-label="Permalink to &quot;Slack&quot;">​</a></h3><p><a href="https://slack.com/intl/zh-cn/features" target="_blank" rel="noreferrer">Slack</a> 是一款基于云端运算的即时通讯软件。为团队和工作提供一个单一的平台。类似 Discord，也分有许多频道，通过频道组织工作。</p><p>安装 <a href="https://aur.archlinux.org/packages/slack-desktop/" target="_blank" rel="noreferrer">Slack</a><sup>EULA / cn / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-0YH0f" id="tab-OQOimvq" checked="checked"><label for="tab-OQOimvq">cn</label><input type="radio" name="group-0YH0f" id="tab-Y4PG7D2"><label for="tab-Y4PG7D2">aur</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slack-desktop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aur/slack-desktop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+u+'" alt="slack"></p><h2 id="📹-网络会议" tabindex="-1">📹 网络会议 <a class="header-anchor" href="#📹-网络会议" aria-label="Permalink to &quot;📹 网络会议&quot;">​</a></h2><h3 id="zoom" tabindex="-1">Zoom <a class="header-anchor" href="#zoom" aria-label="Permalink to &quot;Zoom&quot;">​</a></h3><p>安装 <a href="https://aur.archlinux.org/packages/zoom/" target="_blank" rel="noreferrer">Zoom</a>：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zoom</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+k+'" alt="zoom"></p><h3 id="腾讯会议" tabindex="-1">腾讯会议 <a class="header-anchor" href="#腾讯会议" aria-label="Permalink to &quot;腾讯会议&quot;">​</a></h3><p>安装 <a href="https://aur.archlinux.org/packages/wemeet-bin" target="_blank" rel="noreferrer"><code>wemeet-bin</code></a><sup>EULA / aur</sup>：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wemeet-bin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+g+'" alt="meeting-2"></p><h2 id="✉️-电子邮件" tabindex="-1">✉️ 电子邮件 <a class="header-anchor" href="#✉️-电子邮件" aria-label="Permalink to &quot;✉️ 电子邮件&quot;">​</a></h2><h3 id="thunderbird" tabindex="-1">Thunderbird <a class="header-anchor" href="#thunderbird" aria-label="Permalink to &quot;Thunderbird&quot;">​</a></h3><p>Mozilla Thunderbird（雷鸟）是由 Mozilla 基金会研发的一款自由开源的跨平台电子邮件客户端、新闻阅读器、聚合器以及即时通信软件。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/thunderbird/" target="_blank" rel="noreferrer">Thunderbird</a>：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> thunderbird</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+b+'" alt="thunderbird"></p><h3 id="kmail" tabindex="-1">KMail <a class="header-anchor" href="#kmail" aria-label="Permalink to &quot;KMail&quot;">​</a></h3><p>KMail 是一款功能先进的电子邮件客户端，能与 GMail 等常用电子邮件服务提供商进行整合。KMail 支持各种电子邮件协议，包括 POP3、IMAP、Microsoft Exchange（EWS）等。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/kmail/" target="_blank" rel="noreferrer">KMail</a>：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kmail</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+m+'" alt="kmail"></p><h3 id="mailspring" tabindex="-1">Mailspring <a class="header-anchor" href="#mailspring" aria-label="Permalink to &quot;Mailspring&quot;">​</a></h3><p>MailSpring 是一款界面简约、操作便捷、功能出众的邮件管理工具。MailSpring 官方版可以帮助用户管理多个邮箱，提高工作效率，同时还能够对重要事项进行提醒，并可以编辑自己的签名，给大家带来了不一样的感受和体验。其客户端在 github 上开源，但使用时需要注册 mailspring 账户。</p><p>KDE 用户使用 mailspring 前需要安装<code>gnome-keyring</code></p><p>安装 <a href="https://github.com/Foundry376/Mailspring" target="_blank" rel="noreferrer">mailspring</a><sup>EULA / cn / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-9tUBA" id="tab-UejMOZE" checked="checked"><label for="tab-UejMOZE">cn</label><input type="radio" name="group-9tUBA" id="tab-Xyq7s8R"><label for="tab-Xyq7s8R">aur</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mailspring</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aur/mailspring</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="https://raw.githubusercontent.com/Foundry376/Mailspring/master/screenshots/hero_graphic_mac%402x.png" alt="mailspring"></p>',87),F=[y];function C(f,_,q,B,w,x){return s(),e("div",null,F)}const P=a(v,[["render",C]]);export{S as __pageData,P as default};
