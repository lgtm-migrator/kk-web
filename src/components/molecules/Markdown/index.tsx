import React, { FC } from "react";
import ReactMarkdown, { ReactMarkdownProps } from "react-markdown";
import "./style.module.scss";
import CopyToClipboard from "react-copy-to-clipboard";
import { Icon } from "react-icons-kit";
import { ic_content_copy } from "react-icons-kit/md/ic_content_copy";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  github,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

import DarkModeContext from "contexts/DarkModeContext";

export type MarkdownProps = Pick<ReactMarkdownProps, "source"> & {
  handleCopy: CopyToClipboard.Props["onCopy"];
};

const Markdown: FC<MarkdownProps> = ({ handleCopy, source }) => (
  <DarkModeContext.Consumer>
    {({ value: isDarkMode }) => (
      <div className="markdown-body" styleName="markdown">
        <ReactMarkdown
          escapeHtml={false}
          linkTarget="_blank"
          renderers={{
            blockquote: (props) => (
              <blockquote {...props} styleName="blockquote" />
            ),
            code: ({ language, value }) => (
              <div styleName="syntax-highlighter-wrapper">
                <div styleName="copy-to-clipboard">
                  <CopyToClipboard onCopy={handleCopy} text={value}>
                    <Icon icon={ic_content_copy} />
                  </CopyToClipboard>
                </div>
                <SyntaxHighlighter
                  language={language}
                  style={isDarkMode ? atomOneDark : github}
                  styleName="syntax-highlighter"
                >
                  {value}
                </SyntaxHighlighter>
              </div>
            ),
            inlineCode: ({ inline, ...props }) => (
              <code {...props} inline={inline.toString()} styleName="code" />
            ),
            link: ({ children, ...props }) => (
              <a {...props} styleName="a">
                {children}
              </a>
            ),
            list: ({ ordered, tight, ...props }) => {
              return ordered ? (
                <ol {...props} styleName="ol" tight={tight.toString()} />
              ) : (
                <ul {...props} styleName="ul" tight={tight.toString()} />
              );
            },
            table: (props) => <table {...props} styleName="table" />,
            tableHead: (props) => <thead {...props} styleName="thead" />,
            tableRow: (props) => <tr {...props} styleName="tr" />,
          }}
          source={source}
        />
      </div>
    )}
  </DarkModeContext.Consumer>
);

export default Markdown;
