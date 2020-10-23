import "./style.module.scss";

import React, { FC, useMemo } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Icon } from "react-icons-kit";
import { ic_content_copy } from "react-icons-kit/md/ic_content_copy";
import ReactMarkdown, { ReactMarkdownProps } from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  github,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import gfm from "remark-gfm";

import DarkModeContext from "contexts/DarkModeContext";

export type MarkdownProps = Pick<ReactMarkdownProps, "source"> & {
  handleCopy: CopyToClipboard.Props["onCopy"];
};

const Markdown: FC<MarkdownProps> = ({ handleCopy, source = "" }) => {
  const replacedSource = useMemo<ReactMarkdownProps["source"]>(
    () =>
      source.replace(
        /(<iframe.*?youtube.*?<\/iframe>)/g,
        '<div class="iframe-wrapper">$1</div>'
      ),
    [source]
  );

  return (
    <DarkModeContext.Consumer>
      {({ value: isDarkMode }) => (
        <div className="markdown-body" styleName="markdown">
          <ReactMarkdown
            escapeHtml={false}
            linkTarget="_blank"
            plugins={[gfm as any]}
            renderers={{
              blockquote: ({ node, ...props }) => (
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
              inlineCode: ({ inline, node, ...props }) => (
                <code {...props} inline={inline.toString()} styleName="code" />
              ),
              link: ({ children, node, ...props }) => (
                <a {...props} styleName="a">
                  {children}
                </a>
              ),
              list: ({ node, ordered, tight, ...props }) =>
                ordered ? (
                  <ol {...props} spread={tight} styleName="ol" />
                ) : (
                  <ul {...props} spread={tight} styleName="ul" />
                ),
              table: ({ node, ...props }) => (
                <table {...props} styleName="table" />
              ),
              tableHead: ({ node, ...props }) => (
                <thead {...props} styleName="thead" />
              ),
              tableRow: ({ node, ...props }) => (
                <tr {...props} styleName="tr" />
              ),
            }}
            source={replacedSource || ""}
          />
        </div>
      )}
    </DarkModeContext.Consumer>
  );
};

export default Markdown;
