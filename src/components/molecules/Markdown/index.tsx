import React, { FC } from "react";
import ReactMarkdown, { ReactMarkdownProps } from "react-markdown";
import "./style.module.scss";
import CopyToClipboard from "react-copy-to-clipboard";
import { Icon } from "react-icons-kit";
import { ic_content_copy } from "react-icons-kit/md/ic_content_copy";

export type MarkdownProps = Pick<ReactMarkdownProps, "source"> & {
  handleCopy: CopyToClipboard.Props["onCopy"];
};

const Markdown: FC<MarkdownProps> = ({ handleCopy, source }) => (
  <div className="markdown-body" styleName="markdown">
    <ReactMarkdown
      escapeHtml={false}
      linkTarget="_blank"
      renderers={{
        blockquote: (props) => <blockquote {...props} styleName="blockquote" />,
        code: ({ language, value }) => (
          <pre styleName="pre">
            <div styleName="copy-to-clipboard">
              <CopyToClipboard onCopy={handleCopy} text={value}>
                <Icon icon={ic_content_copy} />
              </CopyToClipboard>
            </div>
            <code className={`language-${language}`} styleName="code">
              {value}
            </code>
          </pre>
        ),
        inlineCode: (props) => <code {...props} styleName="code" />,
        link: ({ children, ...props }) => (
          <a {...props} styleName="a">
            {children}
          </a>
        ),
        list: ({ ordered, ...props }) => {
          return ordered ? (
            <ol {...props} styleName="ol" />
          ) : (
            <ul {...props} styleName="ul" />
          );
        },
        table: (props) => <table {...props} styleName="table" />,
        tableHead: (props) => <thead {...props} styleName="thead" />,
        tableRow: (props) => <tr {...props} styleName="tr" />,
      }}
      source={source}
    />
  </div>
);

export default Markdown;
