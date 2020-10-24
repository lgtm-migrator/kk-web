import { PageProps } from 'gatsby';
import React, { FC, useMemo } from 'react';
import ExternalLink from 'components/atoms/ExternalLink';
import List from 'components/molecules/List';
import Table, { TableProps } from 'components/molecules/Table';
import Request from 'components/organisms/Request';
import Layout from 'components/templates/Layout';
import Seo from 'components/templates/Seo';

export type MovieProps = PageProps;

const Movie: FC<MovieProps> = () => {
  const rows = useMemo<TableProps['rows']>(
    () => [
      ['概要', '動画制作を行います'],
      [
        '費用',
        <>
          前払い金500円
          <br />
          納品後に追加で支払って頂ける方は、お気持ち分頂けると幸いです
          <br />
          Amazonギフト券でのお支払いも可能です
        </>,
      ],
      [
        '制作実績',
        <List
          items={[
            <ExternalLink href="https://www.youtube.com/watch?v=RDHDQk10yV4">
              ヒラヒラヒラク秘密ノ扉（おおさわゆな様）
            </ExternalLink>,
            <ExternalLink href="https://www.youtube.com/watch?v=LqxwWFjP4qg">
              Catch You Catch Me（シスター・クレア様）
            </ExternalLink>,
            <ExternalLink href="https://piro0919.tumblr.com/post/130267159548/%E3%82%A2%E3%83%AA%E3%82%AA%E6%A9%8B%E6%9C%AC%E3%81%AE2015%E5%B9%B4%E3%83%8F%E3%83%AD%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E7%94%A8%E3%81%AB%E4%BD%9C%E3%81%A3%E3%81%9F%E5%8B%95%E7%94%BB">
              ハロウィンイベント向け店頭ムービー（アリオ橋本様）
            </ExternalLink>,
          ]}
        />,
      ],
    ],
    [],
  );

  return (
    <>
      <Seo path="/request/movie" title="Request Movie" />
      <Layout>
        <Request>
          <Table rows={rows} />
        </Request>
      </Layout>
    </>
  );
};

export default Movie;
