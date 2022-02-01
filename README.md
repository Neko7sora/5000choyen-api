# 5000choyen-api

5000 兆円欲しい！をサーバーサイドで生成できるようにしたものです。

# Shields
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FNeko7sora-dev%2F5000choyen-api.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FNeko7sora-dev%2F5000choyen-api?ref=badge_shield)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FNeko7sora-dev%2F5000choyen-api.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FNeko7sora-dev%2F5000choyen-api?ref=badge_large)


# how to use

https:\/\/gsapi.cyberrex.jp/image?top=上部文字列&bottom=下部文字列

↓

![a](https://gsapi.cyberrex.jp/image?top=上部文字列&bottom=下部文字列)

# spec

画像形式: PNG/WebP (アルファチャンネルあり、背景透明)、JPEG

最大横幅: 3840px

# parameters

| name    | value        | description                         |
| ------- | ------------ | ----------------------------------- |
| top     | -            | 上部文字列                          |
| bottom  | -            | 下部文字列                          |
| type    | png/jpg/webp | PNG/JPEG/WebP の切り替え            |
| q       | -            | 画質(1 ～ 100)                      |
| hoshii  | true/false   | 下部文字列を「欲しい！」に固定する  |
| noalpha | true/false   | 背景色を白にする                    |
| rainbow | true/false   | 虹色にする ※1                       |
| single  | true/false   | 上部・下部どちらかをレンダリング ※2 |

※1：hoshii が`true`の場合、下部は虹色になりません。

※2：top と bottom を両方指定するとエラーになります。hoshii は無視されます。

# server configuration

サーバーの設定を変えることができます。
ホスト名と SSL の有無を設定できます。なおこれは表示に関わる設定で動作自体に影響はありません。

`server_config.json` をサーバープログラムがあるディレクトリに配置するか、環境変数 `GSAPI_HOSTNAME` `GSAPI_SSL` で設定可能です。(Heroku などでは環境変数で設定するほうが簡単です)

JSON の例は以下のとおりです。

```json
{
  "hostname": "gsapi.cyberrex.jp",
  "ssl": true
}
```

環境変数の例は以下のとおりです。

```
GSAPI_HOSTNAME="gsapi.cyberrex.jp"
GSAPI_SSL="1" # 1=true, 0=false
```

反映優先順は 設定ファイル > 環境変数 です。

# caution

文字列が短いと横幅が自動で調整されて短くなります。

どんなに長くても 3840px までしか横幅は伸びません。

過剰なアクセスはお控えください。

# thanks

このプログラムは、yurafuca 様が作られたものをベースに Node.js 向けに改良を加えつつ、サーバーサイドに移植したものです。
原作リポジトリは[こちら](https://github.com/yurafuca/5000choyen)
