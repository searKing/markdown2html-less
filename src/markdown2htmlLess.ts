import { defaults } from "lodash";
import {
	IMarkdownRender,
	IMarkdownRenderOptions,
	IMermaid2htmlReturn,
	MarkdownRender,
} from "./render/render";
import { IDefaultOptions } from "./utils/configuration";
import { Log } from "./utils/log";

export interface IMarkdown2HtmlLess {
	markdown2html(markdown: string): IMermaid2htmlReturn;
}

export class Markdown2HtmlLess implements IMarkdown2HtmlLess {
	private options: IDefaultOptions;
	// tslint:disable-next-line:member-ordering
	private defaultOptions: IDefaultOptions = {
		abbr: true,
		anchor: true,
		attrs: true,
		debug: false,
		deflist: true,
		emoji: true,
		expandTabs: true,
		footnote: true,
		highlightjs: true,
		ins: true,
		lazyHeaders: true,
		mark: true,
		mermaid: true,
		sub: true,
		sup: true,
		taskLists: true,
	};

	constructor(options: IDefaultOptions = {}) {
		if (typeof options !== "object") {
			throw Error("second argument must be an object");
		}
		options = options || {};
		defaults(options, this.defaultOptions);
		this.options = options;
		return this;
	}

	public markdown2html(markdown: string): IMermaid2htmlReturn {
		this.log(this.banner());
		const markdownRenderOptions: IMarkdownRenderOptions = {
			abbr: this.options.abbr,
			anchor: this.options.anchor,
			attrs: this.options.attrs,
			debug: this.options.debug,
			deflist: this.options.deflist,
			emoji: this.options.emoji,
			expandTabs: this.options.expandTabs,
			footnote: this.options.footnote,
			highlightjs: this.options.highlightjs,
			ins: this.options.ins,
			lazyHeaders: this.options.lazyHeaders,
			mark: this.options.mark,
			mermaid: this.options.mermaid,
			sub: this.options.sub,
			sup: this.options.sup,
			taskLists: this.options.taskLists,
		};
		const render: IMarkdownRender = new MarkdownRender(markdownRenderOptions);
		const html: IMermaid2htmlReturn = render.renderToHtml(markdown);

		if (this.options.debug) {
			html.body = this.debugHeader() + "\n" + html.body;
		}

		return html;
	}

	private log(msg: string): void {
		if (this.options.debug) {
			Log.print(msg);
		}
	}

	private banner(): string {
		let banner: string = "\n\n" + "markdown2html-pro";
		banner += "Parse markdown into HTML and add syntax highlighting";
		return banner;
	}

	private debugHeader(): string {
		const info = require("../package.json") || {};
		return (
			"<!--" +
			" this HTML was generated using markdown-it-mermaid-less version " +
			info.version +
			"." +
			" see an issue? file at " +
			info.bugs +
			"." +
			" please include the version in your issue. thanks for using markdown2html-pro!" +
			" to learn more, visit " +
			info.repository +
			"." +
			"  -->"
		);
	}
}
