import { PageProps } from "gatsby";
import React, { FC, useMemo } from "react";

import ExternalLink from "components/atoms/ExternalLink";
import List from "components/molecules/List";
import Table, { TableProps } from "components/molecules/Table";
import Request from "components/organisms/Request";
import Layout from "components/templates/Layout";
import Seo from "components/templates/Seo";

export type WebsiteProps = PageProps;

const Website: FC<WebsiteProps> = () => {
  const rows = useMemo<TableProps["rows"]>(
    () => [
      ["概要", "Webサイト制作を行います"],
      [
        "費用",
        <>
          前払い金500円
          <br />
          納品後に追加で支払って頂ける方は、お気持ち分頂けると幸いです
          <br />
          Webサイトの公開まで依頼される場合、ドメイン代やサーバー代などは要相談となります
          <br />
          Amazonギフト券でのお支払いも可能です
        </>,
      ],
      [
        "制作実績",
        <List
          items={[
            <ExternalLink href="https://hitmeup.co.jp/">
              ヒットミーアップ株式会社（ヒットミーアップ株式会社様）
            </ExternalLink>,
            <ExternalLink href="http://kontaniki.com/">
              1stKontact（こんたくん様）
            </ExternalLink>,
            <ExternalLink href="http://yukimusuko.meltlabcd.com/">
              春告と雪息子（melt Lab.様）
            </ExternalLink>,
          ]}
        />,
      ],
    ],
    []
  );

  return (
    <>
      <Seo path="/request/website" title="Request Website" />
      <Layout>
        <Request>
          <Table rows={rows} />
        </Request>
      </Layout>
    </>
  );
};

export default Website;
