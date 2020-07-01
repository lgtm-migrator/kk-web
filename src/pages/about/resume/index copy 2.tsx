import React, { FC, Fragment, useEffect, useMemo, useState } from "react";

import NoSSR from "react-no-ssr";
import Seo from "components/templates/Seo";
import dayjs from "dayjs";
import noScroll from "no-scroll";
import pdfFonts from "pdfmake/build/vfs_fonts";
import pdfMake from "pdfmake/build/pdfmake";
import useWindowSize from "hooks/useWindowSize";

const Resume: FC = () => {
  const [url, setUrl] = useState<JSX.IntrinsicElements["iframe"]["src"]>("");
  const { windowHeight, windowWidth } = useWindowSize();
  const style = useMemo(
    () => ({
      height: windowHeight,
      width: windowWidth,
    }),
    [windowHeight, windowWidth]
  );

  useEffect(() => {
    pdfMake.fonts = {
      ipam: {
        bold: "ipam.ttf",
        bolditalics: "ipam.ttf",
        normal: "ipam.ttf",
        italics: "ipam.ttf",
      },
    };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake
      .createPdf({
        content: [
          {
            alignment: "center",
            fontSize: 12,
            margin: [0, 0, 0, 5],
            style: "header",
            text: "スキルシート",
          },
          {
            layout: {
              fillColor: (_, __, columnIndex: number) =>
                columnIndex % 2 ? null : "#ccf",
              hLineWidth: (index, { table: { body } }) =>
                index === 0 || index === body.length ? 1 : 0.5,
              vLineWidth: (index, { table: { widths } }) =>
                index === 0 ||
                (Array.isArray(widths) && index === widths.length)
                  ? 1
                  : 0.5,
            },
            margin: [0, 0, 0, 5],
            table: {
              body: [
                [
                  "年齢",
                  `満${dayjs().diff(dayjs("19890919"), "year")}歳`,
                  "性別",
                  "男性",
                ],
                [
                  "資格",
                  "基本情報技術者",
                  "学歴",
                  "東京理科大学 理工学部 数学科 卒業",
                ],
                ["稼働", "2020年5月1日～", "最寄り駅", "西武池袋線 椎名町駅"],
              ],
              widths: [50, "*", 50, "*"],
            },
          },
          {
            layout: {
              fillColor: (_, __, columnIndex) =>
                columnIndex % 2 ? null : "#ccf",
              hLineWidth: (index, { table: { body } }) =>
                index === 0 || index === body.length ? 1 : 0.5,
              vLineWidth: (index, { table: { widths } }) =>
                index === 0 ||
                (Array.isArray(widths) && index === widths.length)
                  ? 1
                  : 0.5,
            },
            margin: [0, 0, 0, 5],
            table: {
              body: [
                ["得意分野", "実装"],
                [
                  "得意技術",
                  "HTML, CSS(Sass), JavaScript(React, Redux, TypeScript)",
                ],
                ["得意業務", "Webアプリケーション開発"],
              ],
              widths: [50, "*"],
            },
          },
          {
            layout: {
              fillColor: (_, __, columnIndex) =>
                columnIndex % 2 ? null : "#ccf",
              hLineWidth: (index, { table: { body } }) =>
                index === 0 || index === body.length ? 1 : 0.5,
              vLineWidth: (index, { table: { widths } }) =>
                index === 0 ||
                (Array.isArray(widths) && index === widths.length)
                  ? 1
                  : 0.5,
            },
            margin: [0, 0, 0, 5],
            table: {
              body: [
                [
                  "自己PR",
                  `私はこれまでPG/SEとして経験を積み、主にWeb系システム開発に携わってきました。
                  顧客、メンバーの方々と共に仕事を行うことにより、対応方法や話の持って行き方等コミュニケーションの重要性を学んできました。
                  良い人間関係を構築することは、良い現場を生み出し、現場においてより一層作業がスムーズに進むと考えおり、仕事において最も重要視しております。
                  これまでの業務内外で身につけた「技術力」及び「コミュニケーション能力」をフルに発揮し、プロジェクトに貢献していきたいと考えております。`,
                ],
              ],
              widths: [50, "*"],
            },
          },
          {
            layout: {
              fillColor: (rowIndex, _, columnIndex) =>
                rowIndex <= 1 || (columnIndex === 0 && rowIndex !== 12 + 2)
                  ? "#ccf"
                  : null,
              hLineWidth: (index, { table: { body } }) =>
                index === 0 || index === body.length ? 1 : 0.5,
              vLineWidth: (index, { table: { widths } }) =>
                index === 0 ||
                (Array.isArray(widths) && index === widths.length)
                  ? 1
                  : 0.5,
            },
            table: {
              body: [
                [
                  {
                    colSpan: 4,
                    rowSpan: 2,
                    text: "期間",
                  },
                  "",
                  "",
                  "",
                  {
                    rowSpan: 2,
                    text: "業務内容",
                  },
                  {
                    rowSpan: 2,
                    text: `役割
                      規模`,
                  },
                  {
                    rowSpan: 2,
                    text: "使用言語",
                  },
                  {
                    rowSpan: 2,
                    text: "DB",
                  },
                  {
                    rowSpan: 2,
                    text: "サーバOS",
                  },
                  {
                    rowSpan: 2,
                    text: `FW・MW
                      ツール等`,
                  },
                  {
                    colSpan: 7,
                    text: "担当工程",
                  },
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                ],
                [
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "要件定義",
                  "基本設計",
                  "詳細設計",
                  "実装・単体",
                  "結合テスト",
                  "総合テスト",
                  "保守・運用",
                ],
                [
                  {
                    rowSpan: 2,
                    text: 1,
                  },
                  dayjs("201304", "YYYYMM").format(`YYYY年MM月`),
                  "-",
                  dayjs("201305", "YYYYMM").format(`YYYY年MM月`),
                  "プログラミング研修受講",
                  "PG",
                  {
                    rowSpan: 2,
                    text: "C",
                  },
                  {
                    rowSpan: 2,
                    text: "-",
                  },
                  {
                    rowSpan: 2,
                    text: "-",
                  },
                  {
                    rowSpan: 2,
                    text: "-",
                  },
                  {
                    rowSpan: 2,
                    text: "",
                  },
                  {
                    rowSpan: 2,
                    text: "",
                  },
                  {
                    rowSpan: 2,
                    text: "",
                  },
                  {
                    rowSpan: 2,
                    text: "●",
                  },
                  {
                    rowSpan: 2,
                    text: "",
                  },
                  {
                    rowSpan: 2,
                    text: "",
                  },
                  {
                    rowSpan: 2,
                    text: "",
                  },
                ],
                [
                  "",
                  {
                    colSpan: 3,
                    text: `(${
                      dayjs("201304", "YYYYMM").diff(
                        dayjs("201305", "YYYYMM"),
                        "month"
                      ) + 1
                    }ヶ月間)`,
                  },
                  "",
                  "",
                  "新入社員向けプログラミング研修受講",
                  `チーム\n1名`,
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                ],
              ],
              headerRows: 2,
              widths: [
                "auto",
                30,
                "auto",
                30,
                "*",
                20,
                "auto",
                "auto",
                "auto",
                "auto",
                5,
                5,
                5,
                5,
                5,
                5,
                5,
              ],
            },
          },
        ],
        defaultStyle: {
          font: "ipam",
          fontSize: 6,
          lineHeight: 1.25,
        },
        pageMargins: [15, 5, 15, 5],
        pageSize: "A4",
      })
      .getDataUrl((result) => {
        setUrl(result);
      });
  }, [setUrl]);

  useEffect(() => {
    noScroll.on();

    return () => {
      noScroll.off();
    };
  }, []);

  return (
    <Fragment>
      <Seo path="/about/resume" title="Resume" />
      <NoSSR>
        <iframe src={url} style={style} title="resume" />
      </NoSSR>
    </Fragment>
  );
};

export default Resume;
