'use strict';
import markdownItMermaidLess = require('markdown-it-mermaid-less');
import * as path from 'path';

export interface IMarkdownRender {
  renderToHtml(mdContent: string): IMermaid2htmlReturn;
}

export interface IMarkdownRenderOptions {
  debug?: boolean;
  linkify?: boolean;
  emoji?: boolean;
  expandTabs?: boolean;
  lazyHeaders?: boolean;
  taskLists?: boolean;
  abbr?: boolean;
  anchor?: boolean;
  attrs?: boolean;
  deflist?: boolean;
  footnote?: boolean;
  highlightjs?: boolean;
  ins?: boolean;
  mark?: boolean;
  sub?: boolean;
  sup?: boolean;
  mermaid?: boolean;
}
export interface IMermaidLessPluginOptions {
  debug?: boolean;
  returnHead?: string;
  rootWebPath?: string;
}
export interface IMermaid2htmlReturn {
  body?: string;
  head?: string;
}
// import {MarkdownIt } from "markdown-it";
// let taskLists = require('markdown-it-task-lists');
export class MarkdownRender implements IMarkdownRender {
  private modules: any;
  private options: IMarkdownRenderOptions;
  private mermaidOptions: IMermaidLessPluginOptions;
  public constructor(options?: IMarkdownRenderOptions) {
    this.options = options || {};
    this.modules = {};
    this.mermaidOptions = {};
    return this;
  }

  public renderToHtml(mdContent: string): IMermaid2htmlReturn {
    this.loadModules();
    const renderer = this.getRenderer();
    const b: string = renderer.render(mdContent);
    const h: string = this.mermaidOptions.returnHead || '';
    return {
      body: b,
      head: h,
    };
  }
  private async getInitOptions(markdownContent: string): Promise<string[]> {
    if (this.options.mermaid) {
      if (typeof markdownContent !== 'string') {
        throw Error('first argument must be a string');
      }

      const defaultRootWebPath = path.join(__dirname, '..');
      // console.log('defaultRootWebPath= ', defaultRootWebPath);
      const options = {
        rootWebPath: defaultRootWebPath,
      };

      const cms: string[] = await this.modules.mermaid.mermaid_pro_plugin_init_everytime(
        markdownContent
      );

      return cms;
    }
    return [];
  }
  private loadModules() {
    this.modules.MarkdownIt = require('markdown-it');
    if (this.options.taskLists) {
      this.modules.taskLists = require('markdown-it-task-lists');
    }
    if (this.options.lazyHeaders) {
      this.modules.lazyHeaders = require('markdown-it-lazy-headers');
    }
    if (this.options.emoji) {
      this.modules.emoji = require('markdown-it-emoji');
    }
    if (this.options.expandTabs) {
      this.modules.expandTabs = require('markdown-it-expand-tabs');
    }
    if (this.options.abbr) {
      this.modules.abbr = require('markdown-it-abbr');
    }
    if (this.options.anchor) {
      this.modules.anchor = require('markdown-it-anchor');
    }
    if (this.options.attrs) {
      this.modules.attrs = require('markdown-it-attrs');
    }
    if (this.options.deflist) {
      this.modules.deflist = require('markdown-it-deflist');
    }
    if (this.options.footnote) {
      this.modules.footnote = require('markdown-it-footnote');
    }
    if (this.options.highlightjs) {
      this.modules.highlightjs = require('markdown-it-highlightjs');
    }
    if (this.options.ins) {
      this.modules.ins = require('markdown-it-ins');
    }
    if (this.options.mark) {
      this.modules.mark = require('markdown-it-mark');
    }
    if (this.options.sub) {
      this.modules.sub = require('markdown-it-sub');
    }
    if (this.options.sup) {
      this.modules.sup = require('markdown-it-sup');
    }
    if (this.options.mermaid) {
      this.modules.mermaid = require('markdown-it-mermaid-less');
    }
  }
  private getRenderer(): any {
    const mdOptions = {
      html: true,
      langPrefix: 'highlight ',
      linkify: this.options.linkify,
    };
    const renderer = new this.modules.MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
    });
    if (this.options.taskLists) {
      renderer.use(this.modules.taskLists, { enabled: true, label: true });
    }
    if (this.options.lazyHeaders) {
      renderer.use(this.modules.lazyHeaders, {});
    }
    if (this.options.emoji) {
      renderer.use(this.modules.emoji, { shortcuts: {} });
    }
    if (this.options.expandTabs) {
      renderer.use(this.modules.expandTabs, { tabWidth: 4 });
    }
    if (this.options.abbr) {
      renderer.use(this.modules.abbr, {});
    }
    if (this.options.anchor) {
      renderer.use(this.modules.anchor, {});
    }
    if (this.options.attrs) {
      renderer.use(this.modules.attrs, {});
    }
    if (this.options.deflist) {
      renderer.use(this.modules.deflist, {});
    }
    if (this.options.footnote) {
      renderer.use(this.modules.footnote, {});
    }
    if (this.options.highlightjs) {
      renderer.use(this.modules.highlightjs, {});
    }
    if (this.options.ins) {
      renderer.use(this.modules.ins, {});
    }
    if (this.options.mark) {
      renderer.use(this.modules.mark, {});
    }
    if (this.options.sub) {
      renderer.use(this.modules.sub, {});
    }
    if (this.options.sup) {
      renderer.use(this.modules.sup, {});
    }
    if (this.options.mermaid) {
      // markdown - it does not support Promise yet, so we have a trick otherwhere
      renderer.use(this.modules.mermaid, this.mermaidOptions);
    }
    return renderer;
  }
}
