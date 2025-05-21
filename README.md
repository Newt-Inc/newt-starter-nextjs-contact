## End of Life Notice

**The Newt headless CMS will be retired on 2026-11-24.**

2026年11月24日（火）をもちまして、Newt株式会社が提供しているヘッドレスCMS「Newt」のサービス提供を終了させていただくこととなりました。

サービス終了後は、管理画面・APIともにご利用いただくことができなくなります。

これまでヘッドレスCMS「Newt」をご支援・ご愛顧いただき、誠にありがとうございました。

## 概要

[Newt](https://www.newt.so/) と [Next.js](https://nextjs.org/) を利用した問い合わせフォームです。<br />
[App Router](https://nextjs.org/docs/app) を用いて、問い合わせフォームを作成してみたい方はぜひお試しください。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNewt-Inc%2Fnewt-starter-nextjs-contact)

| 問い合わせフォーム                                                                                                                | 送信成功                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ![starter-contact1](https://github.com/Newt-Inc/newt-starter-nextjs-contact/assets/14175298/f4b31ee4-1baa-467f-968a-aa97d0140607) | ![starter-contact2](https://github.com/Newt-Inc/newt-starter-nextjs-contact/assets/14175298/8efdfbda-d857-4164-b0ef-f0ae899b2393) |

## 開発をはじめる

### Step1: Newt スペースをセットアップ

1. スペースを作成します
   - スペース UID を控えておきましょう。スペース UID は 管理画面 URL（ `https://app.newt.so/{スペースUID}` ） もしくは スペース設定 > 一般 から確認できます。
2. App を作成します
   - Appを追加 > テンプレートから追加 から、**Contact**を選んで「このテンプレートを追加」をクリックしてください。
3. フォームを作成します
   - 作成した Form App のトップページより、フォームを作成します
   - フォーム設定 > セットアップ より API エンドポイントをコピーします

### Step2: .env.local ファイルを作成する

[.env.local.example](https://github.com/Newt-Inc/newt-starter-nextjs-contact/blob/main/.env.local.example) ファイルを参考に、`.env.local` ファイルを作成します。<br />
Step1 で取得した API エンドポイントの値を設定します。

```conf
NEXT_PUBLIC_NEWT_FORM_ENDPOINT=APIエンドポイント
```

Next.js における環境変数の扱いについては、[公式ドキュメント](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)を参照してください。

### Step3: dev サーバーを起動する

Yarn を使う

```bash
# 依存パッケージをインストール
$ yarn install

# localhost:3000でdevサーバーを起動
$ yarn dev
```

npm を使う

```bash
# 依存パッケージをインストール
$ npm install

# localhost:3000でdevサーバーを起動
$ npm run dev
```

## ページの構成

| ページ             | パス    | ファイル                                                                                        |
| ------------------ | ------- | ----------------------------------------------------------------------------------------------- |
| 問い合わせフォーム | /       | [ソース](https://github.com/Newt-Inc/newt-starter-nextjs-contact/blob/main/app/page.tsx)        |
| 送信成功           | /thanks | [ソース](https://github.com/Newt-Inc/newt-starter-nextjs-contact/blob/main/app/thanks/page.tsx) |
| 送信失敗           | /error  | [ソース](https://github.com/Newt-Inc/newt-starter-nextjs-contact/blob/main/app/error/page.tsx)  |

## License

[MIT License](https://github.com/Newt-Inc/newt-starter-nextjs-contact/blob/main/LICENSE)
