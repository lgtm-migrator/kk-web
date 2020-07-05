import React, { FC, useMemo } from "react";
import { PageProps } from "gatsby";

import Layout from "components/templates/Layout";
import Seo from "components/templates/Seo";
import Table, { TableProps } from "components/molecules/Table";
import List from "components/molecules/List";
import SkillList from "components/molecules/SkillList";
import Request from "components/organisms/Request";

export type FrontendProps = PageProps;

const Frontend: FC<FrontendProps> = () => {
  const rows = useMemo<TableProps["rows"]>(
    () => [
      [
        "概要",
        "フロントエンドエンジニアを目指している方や、Webサイトを作ってみたい方のサポートを行います",
      ],
      [
        "内容",
        <List
          items={[
            "コードレビュー",
            "開発環境の構築サポート",
            "相談などもお気軽にどうぞ",
          ]}
        />,
      ],
      [
        "スキル",
        <SkillList
          items={[
            {
              description: "☆☆☆☆",
              term: "React",
            },
            {
              description: "☆☆☆",
              term: "Redux",
            },
            {
              description: "☆☆☆",
              term: "TypeScript",
            },
            {
              description: "☆☆☆☆",
              term: "Atomic Design",
            },
            {
              description: "☆☆☆☆☆",
              term: "Create React App",
            },
            {
              description: "☆☆☆",
              term: "Next.js",
            },
          ]}
        />,
      ],
      [
        "方法",
        <>
          Slack・Skype・Zoom・Discord・メールなど、何でも問題ありません
          <br />
          コードレビューの場合はGitHubを介して行います
        </>,
      ],
      [
        "費用",
        <>
          初回無料
          <br />
          2回目以降前払い金500円
          <br />
          サポート後に追加で支払って頂ける方は、お気持ち分頂けると幸いです
          <br />
          Amazonギフト券でのお支払いも可能です
        </>,
      ],
    ],
    []
  );

  return (
    <>
      <Seo path="/request/frontend" title="Request Frontend" />
      <Layout>
        <Request>
          <Table rows={rows} />
        </Request>
      </Layout>
    </>
  );
};

export default Frontend;
