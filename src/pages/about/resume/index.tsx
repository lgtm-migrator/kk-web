import React, {
  ComponentPropsWithoutRef,
  FC,
  useEffect,
  useMemo,
  useState,
} from "react";
import dayjs from "dayjs";
import noScroll from "no-scroll";
import pdfFonts from "pdfmake/build/vfs_fonts";
import pdfMake from "pdfmake/build/pdfmake";
// eslint-disable-next-line import/no-unresolved
import { TableLayout, TableCell } from "pdfmake/interfaces";

import Seo from "components/templates/Seo";
import useWindowSize from "hooks/useWindowSize";

const Resume: FC = () => {
  const [url, setUrl] = useState<ComponentPropsWithoutRef<"iframe">["src"]>("");
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
        italics: "ipam.ttf",
        normal: "ipam.ttf",
      },
    };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const layout: TableLayout = {
      fillColor: (_, __, columnIndex: number) =>
        columnIndex % 2 ? null : "#ccf",
      hLineWidth: (index, { table: { body } }) =>
        index === 0 || index === body.length ? 1 : 0.5,
      vLineWidth: (index, { table: { widths } }) =>
        index === 0 || (Array.isArray(widths) && index === widths.length)
          ? 1
          : 0.5,
    };
    const histories = [
      {
        content: "新入社員向けプログラミング研修受講",
        dbList: [],
        from: "201304",
        fwMwToolList: [],
        languageList: ["C"],
        process: {
          basicDesign: false,
          combinedTest: false,
          comprehensiveTest: false,
          detailedDesign: false,
          maintenanceAndOperation: false,
          mountingSingleUnit: true,
          requirementDefinition: false,
        },
        role: "PG",
        serverOsList: [],
        team: 1,
        title: "プログラミング研修受講",
        to: "201305",
      },
      {
        content: `ポイントカードを使用する顧客の情報を管理する
        システムの新規開発

        ≪担当業務≫
        ・顧客へのプロジェクト進捗報告
        ・各種設計書など、ドキュメント作成
        ・顧客情報DB更新ソフトウェア作成
        ・サーバー及びDB構築`,
        dbList: ["Postgre SQL"],
        from: "201306",
        fwMwToolList: [],
        languageList: ["Ruby", "SQL"],
        process: {
          basicDesign: true,
          combinedTest: false,
          comprehensiveTest: false,
          detailedDesign: true,
          maintenanceAndOperation: false,
          mountingSingleUnit: true,
          requirementDefinition: false,
        },
        role: "PG",
        serverOsList: ["CentOS 6"],
        team: 3,
        title: "顧客情報管理システム新規開発",
        to: "201312",
      },
      {
        content: `大手高速バス会社の高速バス予約Webシステム保守運用
        高速バスの情報管理ソフトウェアの新規開発及び保守改修

        ≪担当業務≫
        ・顧客との要件定義の検討及びプロジェクト進捗報告
        ・線表、WBS管理
        ・各種設計書及び作業手順書などのドキュメント作成
        ・高速バス予約Webシステム改修及び保守
        ・高速バス予約Webシステム用管理ソフトウェア
        新規開発、既存改修、及び保守`,
        dbList: ["Postgre SQL"],
        from: "201401",
        fwMwToolList: [],
        languageList: ["PHP4", "HTML", "CSS", "VB6", "SQL"],
        process: {
          basicDesign: true,
          combinedTest: false,
          comprehensiveTest: false,
          detailedDesign: true,
          maintenanceAndOperation: true,
          mountingSingleUnit: true,
          requirementDefinition: true,
        },
        role: "SE/PG",
        serverOsList: ["CentOS 5"],
        team: 1,
        title: "高速バス予約Webシステム保守、運用",
        to: "201407",
      },
      {
        content: `大手保険会社の保険契約Webシステムの新規開発

        ≪担当業務≫
        ・上位商流とのスケジュールの調整、及びプロジェクト進捗報告
        ・各種設計書などのドキュメント作成
        ・保険契約Webシステム新規開発及び既存改修
        ・各種テスト実施及び証跡整理`,
        dbList: ["Oracle 11g"],
        from: "201408",
        fwMwToolList: ["JSF 1.2", "Eclipse"],
        languageList: ["Java"],
        process: {
          basicDesign: true,
          combinedTest: true,
          comprehensiveTest: false,
          detailedDesign: true,
          maintenanceAndOperation: false,
          mountingSingleUnit: true,
          requirementDefinition: false,
        },
        role: "PG",
        serverOsList: [],
        team: 12,
        title: "保険契約Webシステム新規開発",
        to: "201501",
      },
      {
        content: `地方銀行向け銀行端末間Webシステム新規開発

        ≪担当業務≫
        ・上位商流とのスケジュールの調整、及びプロジェクト進捗報告
        ・線表・WBS管理サポート
        ・各種設計書などのドキュメント作成
        ・各メンバーの作業担当割り当て及び技術サポート
        ・銀行端末間Webシステム新規開発
        ・各種プログラムレビュー
        ・各種テスト実施及び証跡整理`,
        dbList: ["SQL Server"],
        from: "201502",
        fwMwToolList: ["IIS 7.5", "SOAP", "MIDMOST", "Visual Studio"],
        languageList: ["C#", "VBA"],
        process: {
          basicDesign: false,
          combinedTest: false,
          comprehensiveTest: false,
          detailedDesign: true,
          maintenanceAndOperation: false,
          mountingSingleUnit: true,
          requirementDefinition: false,
        },
        role: "PG",
        serverOsList: ["Windows 7"],
        team: 10,
        title: "銀行端末間Webシステム開発",
        to: "201508",
      },
      {
        content: `大手電気通信機器メーカーのネットワーク管理システム向けWebシステム新規開発及び既存改修
        管理ソフトウェア新規開発及び既存改修

        ≪担当業務≫
        ・顧客との要件定義の検討及び調整、及びプロジェクト進捗報告
        ・各種設計書及び作業手順書作成
        ・ネットワーク管理システム向けWebシステム新規開発及び既存改修
        ・ネットワーク管理システム向け管理ソフトウェア新規開発及び既存改修`,
        dbList: ["Postgre SQL"],
        from: "201509",
        fwMwToolList: ["TortoiseSVN", "Visual Studio"],
        languageList: ["C#", "PHP5", "HTML", "CSS", "JavaScript", "SQL"],
        process: {
          basicDesign: true,
          combinedTest: false,
          comprehensiveTest: false,
          detailedDesign: true,
          maintenanceAndOperation: true,
          mountingSingleUnit: true,
          requirementDefinition: true,
        },
        role: "SE/PG",
        serverOsList: ["CentOS 6"],
        team: 1,
        title:
          "ネットワーク管理システム向けWebシステム新規開発及び既存改修、及び管理ソフトウェア新規開発及び既存改修",
        to: "201609",
      },
      {
        content: `スマートフォン向け、証券・FX・商品先物
        オンライントレードアプリケーション既存改修

        ≪担当業務≫
        ・証券・FX・商品先物管理機能実装
        ・レイアウト・UIデザイン提案、実装`,
        dbList: [],
        from: "201610",
        fwMwToolList: ["Xamarin", "Visual Studio"],
        languageList: ["C#", "F#"],
        pageBreakAfter: true,
        process: {
          basicDesign: false,
          combinedTest: false,
          comprehensiveTest: false,
          detailedDesign: false,
          maintenanceAndOperation: false,
          mountingSingleUnit: true,
          requirementDefinition: false,
        },
        role: "PG",
        serverOsList: [],
        team: 2,
        title: "オンライントレードアプリケーション既存改修",
        to: "201612",
      },
      {
        content: `株取引精査システムのフロントエンド新規開発

        ≪担当業務≫
        ・ユーザー情報登録、修正機能実装
        ・レイアウト・UIデザイン提案、実装
        ・技術サポート`,
        dbList: [],
        from: "201701",
        fwMwToolList: ["ASP.NET MVC", "Visual Studio"],
        languageList: ["C#"],
        process: {
          basicDesign: false,
          combinedTest: false,
          comprehensiveTest: false,
          detailedDesign: false,
          maintenanceAndOperation: false,
          mountingSingleUnit: true,
          requirementDefinition: false,
        },
        role: "PG",
        serverOsList: [],
        team: 3,
        title: "株取引精査システム新規開発",
        to: "201702",
      },
      {
        content: `PC向け、証券・FX・商品先物オンライントレード
        ブラウザアプリケーション新規開発

        ≪担当業務≫
        ・取引コース登録、修正機能実装
        ・ユーザー情報登録、修正機能実装
        ・レイアウト・UIデザイン提案、実装
        ・技術サポート`,
        dbList: [],
        from: "201703",
        fwMwToolList: [
          "React",
          "Redux",
          "redux-thunk",
          "WebStorm",
          "Git",
          "Webpack",
        ],
        languageList: ["HTML", "Sass", "JavaScript"],
        process: {
          basicDesign: false,
          combinedTest: false,
          comprehensiveTest: false,
          detailedDesign: false,
          maintenanceAndOperation: false,
          mountingSingleUnit: true,
          requirementDefinition: false,
        },
        role: "PG",
        serverOsList: [],
        team: 10,
        title: "オンライントレードブラウザアプリケーション新規開発",
        to: "201708",
      },
      {
        content: `PC向け、クレジットカード及びオンライン
        決済サービス管理システムブラウザ
        アプリケーション保守及びリプレース

        ≪担当業務≫
        ・反社チェック等、追加機能実装
        ・決済サービス利用者、新規登録機能リプレース
        ・単体テスト、E2Eテスト、総合テスト`,
        dbList: [],
        from: "201709",
        fwMwToolList: [
          "React",
          "react-boilerplate",
          "Redux",
          "redux-saga",
          "redux-observable",
          "Immutable.js",
          "TypeScript",
          "Jest",
          "Nightwatch.js",
          "Visual Studio Code",
          "Git",
          "Webpack",
        ],
        languageList: ["HTML", "Sass", "JavaScript"],
        process: {
          basicDesign: false,
          combinedTest: true,
          comprehensiveTest: true,
          detailedDesign: false,
          maintenanceAndOperation: true,
          mountingSingleUnit: true,
          requirementDefinition: false,
        },
        role: "PG",
        serverOsList: [],
        team: 3,
        title: "決済サービス管理システムブラウザアプリケーション保守",
        to: "201806",
      },
      {
        content: `PC向け、広告配信管理システムブラウザ
        アプリケーション新規開発

        ≪担当業務≫
        ・広告登録及び管理機能実装
        ・キャンペーン登録及び管理機能実装
        ・顧客管理機能実装
        ・新規参画メンバーに対する技術サポート
        ・レイアウト・UIデザイン提案・実装`,
        dbList: [],
        from: "201807",
        fwMwToolList: [
          "React",
          "Redux",
          "redux-saga",
          "Storybook",
          "TypeScript",
          "Atomic Design",
          "Visual Studio Code",
          "Git",
          "Webpack",
          "Swagger",
          "InVision",
        ],
        languageList: ["HTML", "CSS", "JavaScript"],
        process: {
          basicDesign: false,
          combinedTest: false,
          comprehensiveTest: false,
          detailedDesign: false,
          maintenanceAndOperation: false,
          mountingSingleUnit: true,
          requirementDefinition: false,
        },
        role: "LE/PG",
        serverOsList: [],
        team: 6,
        title: "DSPシステムブラウザアプリケーション新規開発",
        to: "201905",
      },
      {
        content: `英会話レッスン・カウンセリングシステムブラウザ
        アプリケーション新規開発
        # 短期契約

        ≪担当業務≫
        ・オンラインビデオ通話機能改修
        ・チャット機能改修
        ・参画メンバーに対する技術サポート、改修提案`,
        dbList: [],
        from: "201906",
        fwMwToolList: [
          "Vue.js",
          "Vuex",
          "Vue CLI",
          "WebRTC",
          "TypeScript",
          "Visual Studio Code",
          "Git",
          "Webpack",
        ],
        languageList: ["HTML", "Sass", "JavaScript"],
        process: {
          basicDesign: false,
          combinedTest: false,
          comprehensiveTest: false,
          detailedDesign: false,
          maintenanceAndOperation: false,
          mountingSingleUnit: true,
          requirementDefinition: false,
        },
        role: "PG",
        serverOsList: [],
        team: 3,
        title: "英会話システムブラウザアプリケーション新規開発",
        to: "201909",
      },
      {
        content: `訪日外国人向けプラットフォームサービスブラウザアプリケーション保守
        # 短期契約

        ≪担当業務≫
        ・インバウンド向け特集、LP実装
        ・参画メンバーに対する技術サポート`,
        dbList: [],
        from: "201910",
        fwMwToolList: [
          "React",
          "Nextjs",
          "Flow",
          "Visual Studio Code",
          "Git",
          "Webpack",
        ],
        languageList: ["HTML", "CSS", "JavaScript"],
        process: {
          basicDesign: false,
          combinedTest: false,
          comprehensiveTest: false,
          detailedDesign: false,
          maintenanceAndOperation: false,
          mountingSingleUnit: true,
          requirementDefinition: false,
        },
        role: "PG",
        serverOsList: [],
        team: 8,
        title: "訪日外国人向けプラットフォーム保守",
        to: "201912",
      },
      {
        content: `社外人材を活用するためのセキュリティー・管理機能の新規機能の開発及び保守改修
        # コロナの影響により契約が早期に終了しました

        ≪担当業務≫
        ・社外人材契約フォーム実装
        ・顧客管理機能実装
        ・プロジェクト全体のリファクタリング
        ・参画メンバーに対する技術サポート`,
        dbList: [],
        from: "202001",
        fwMwToolList: [
          "React",
          "Redux",
          "redux-saga",
          "TypeScript",
          "Atomic Design",
          "Visual Studio Code",
          "Git",
          "Webpack",
        ],
        languageList: ["HTML", "CSS", "JavaScript"],
        process: {
          basicDesign: false,
          combinedTest: false,
          comprehensiveTest: false,
          detailedDesign: false,
          maintenanceAndOperation: false,
          mountingSingleUnit: true,
          requirementDefinition: false,
        },
        role: "LE/PG",
        serverOsList: [],
        team: 5,
        title:
          "法人向け社外人材の活用及び一元管理ソリューションの新規開発及び保守改修",
        to: "202004",
      },
      {
        content: `事業継続マネジメントの完全クラウド化を実現するプラットフォーム新規開発

        ≪担当業務≫
        ・ダッシュボード機能実装
        ・ニュース一覧機能実装
        ・顧客管理機能実装
        ・参画メンバーに対する技術サポート
        ・フロントエンド勉強会主催`,
        dbList: [],
        from: "202005",
        fwMwToolList: [
          "React",
          "Redux",
          "redux-saga",
          "TypeScript",
          "Atomic Design",
          "Visual Studio Code",
          "Git",
          "Webpack",
        ],
        languageList: ["HTML", "Sass", "JavaScript"],
        process: {
          basicDesign: false,
          combinedTest: false,
          comprehensiveTest: false,
          detailedDesign: false,
          maintenanceAndOperation: false,
          mountingSingleUnit: true,
          requirementDefinition: false,
        },
        role: "LE/PG",
        serverOsList: [],
        team: 5,
        title:
          "事業継続マネジメント完全クラウド化実現用プラットフォーム新規開発",
      },
    ];
    const rows: TableCell[][] = [];

    histories.forEach(
      (
        {
          content,
          dbList,
          from,
          fwMwToolList,
          languageList,
          pageBreakAfter,
          process: {
            requirementDefinition,
            basicDesign,
            detailedDesign,
            mountingSingleUnit,
            combinedTest,
            comprehensiveTest,
            maintenanceAndOperation,
          },
          role,
          serverOsList,
          team,
          title,
          to,
        },
        index
      ) => {
        rows.push([
          {
            rowSpan: 2,
            text: index + 1,
          },
          dayjs(from, "YYYYMM").format(`YYYY年MM月`),
          "-",
          to ? dayjs(to, "YYYYMM").format(`YYYY年MM月`) : "",
          title,
          role,
          ...[languageList, dbList, serverOsList, fwMwToolList].map(
            (value) => ({
              rowSpan: 2,
              text: value.join("\n") || "-",
            })
          ),
          ...[
            requirementDefinition,
            basicDesign,
            detailedDesign,
            mountingSingleUnit,
            combinedTest,
            comprehensiveTest,
            maintenanceAndOperation,
          ].map((value) => ({
            rowSpan: 2,
            text: value ? "●" : "",
          })),
        ]);

        rows.push(
          [
            { text: "" },
            {
              colSpan: 3,
              text: `(${
                (to ? dayjs(to, "YYYYMM") : dayjs()).diff(
                  dayjs(from, "YYYYMM"),
                  "month"
                ) + 1
              }ヶ月間)`,
            },
            ...[...Array(2)].map(() => ({ text: "" })),
            { text: content },
            {
              text: `チーム\n${team}名`,
            },
            ...[...Array(11)].map(() => ({ text: "" })),
          ].map((cell) =>
            pageBreakAfter ? { ...cell, pageBreak: "after" } : cell
          )
        );
      }
    );

    rows.splice(12, 0, [
      {
        colSpan: 17,
        text: "2016年10月～2017年8月まで同一企業に参画しておりました",
      },
      ...[...Array(16)].map(() => ({ text: "" })),
    ]);

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
            layout,
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
                ["稼働", "即時～", "最寄り駅", "西武池袋線 椎名町駅"],
              ],
              widths: [50, "*", 50, "*"],
            },
          },
          {
            layout,
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
            layout,
            margin: [0, 0, 0, 5],
            table: {
              body: [
                [
                  "自己PR",
                  `私はこれまでPG/SEとして経験を積み、主にWeb系システム開発に携わってきました。
                  顧客、メンバーの方々と共に仕事を行うことにより、対応方法や話の持って行き方等コミュニケーションの重要性を学んできました。
                  良い人間関係を構築することは、良い現場を生み出し、現場においてより一層作業がスムーズに進むと考えており、仕事において最も重要視しております。
                  これまでの業務内外で身につけた「技術力」及び「コミュニケーション能力」をフルに発揮し、プロジェクトに貢献していきたいと考えております。`,
                ],
              ],
              widths: [50, "*"],
            },
          },
          {
            layout: {
              ...layout,
              fillColor: (rowIndex, _, columnIndex) =>
                // rowIndex <= 1 || (columnIndex === 0 && rowIndex !== 12 + 2)
                rowIndex <= 1 || columnIndex === 0 ? "#ccf" : null,
            },
            table: {
              body: [
                [
                  {
                    colSpan: 4,
                    rowSpan: 2,
                    text: "期間",
                  },
                  ...[...Array(3)].map(() => ""),
                  ...[
                    "業務内容",
                    `役割
                      規模`,
                    "使用言語",
                    "DB",
                    "サーバOS",
                    `FW・MW
                      ツール等`,
                  ].map((value) => ({
                    rowSpan: 2,
                    text: value,
                  })),
                  {
                    colSpan: 7,
                    text: "担当工程",
                  },
                  ...[...Array(6)].map(() => ""),
                ],
                [
                  ...[...Array(10)].map(() => ""),
                  "要件定義",
                  "基本設計",
                  "詳細設計",
                  "実装・単体",
                  "結合テスト",
                  "総合テスト",
                  "保守・運用",
                ],
                ...rows,
              ],
              headerRows: 2,
              widths: [
                "auto",
                30,
                "auto",
                30,
                "*",
                20,
                ...[...Array(4)].map(() => "auto"),
                ...[...Array(7)].map(() => 5),
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
    <>
      <Seo path="/about/resume" title="Resume" />
      <object data={url} style={style} title="resume" type="application/pdf" />
    </>
  );
};

export default Resume;
