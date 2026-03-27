export type Lang = "zh" | "en";

type ScenarioItem = { tag: string; bold: string; desc: string };

type Content = {
  nav: {
    brand: string;
    links: { label: string; href: string }[];
    cta: string;
  };
  hero: {
    headline: string;
    sub: string;
    cta1: string;
    cta2: string;
  };
  vision: {
    tag: string;
    title: string;
    desc: string;
    old: { title: string; items: string[] };
    new: { title: string; items: string[] };
  };
  capabilities: {
    tag: string;
    title: string;
    cards: { icon: string; title: string; desc: string; example: string }[];
  };
  scenarios: {
    tag: string;
    title: string;
    sub: string;
    items: ScenarioItem[];
  };
  architecture: {
    tag: string;
    title: string;
    sub: string;
    modules: { icon: string; title: string; desc: string }[];
  };
  market: {
    tag: string;
    title: string;
    stats: { value: string; label: string }[];
  };
  warmth: {
    title: string;
    lines: string[];
  };
  cta: {
    title: string;
    sub: string;
    btn1: string;
    btn2: string;
  };
  footer: {
    copy: string;
    tagline: string;
  };
};

export const content: Record<Lang, Content> = {
  zh: {
    nav: {
      brand: "taylon",
      links: [
        { label: "愿景", href: "#vision" },
        { label: "能力", href: "#capabilities" },
        { label: "场景", href: "#scenarios" },
        { label: "架构", href: "#architecture" },
        { label: "市场", href: "#market" },
      ],
      cta: "预约演示",
    },
    hero: {
      headline: "不是工具，是同事。",
      sub: "给你的团队加一个会主动干活的 AI 员工——它有自己的账号、自己的记忆，走进办公室就知道今天该干什么。",
      cta1: "预约演示",
      cta2: "了解更多",
    },
    vision: {
      tag: "认知颠覆",
      title: "AI 员工 ≠ 流程自动化",
      desc: "市面上大多数「AI 员工」还是 RPA 换了层皮——触发条件 → 执行动作。真正的 AI 同事，是你还没开口，它就已经在干了。",
      old: {
        title: "传统自动化",
        items: [
          "收到表单 → 发送邮件",
          "触发条件 → 执行脚本",
          "定时任务 → 生成报表",
          "等人指令 → 机械执行",
        ],
      },
      new: {
        title: "AI 同事",
        items: [
          "发现没人跟进 → 主动追问",
          "识别异常 → 整理建议推给你",
          "会议结束 → 纪要已发出",
          "主动思考 → 自己找活干",
        ],
      },
    },
    capabilities: {
      tag: "核心能力",
      title: "不是听命行事，而是并肩作战",
      cards: [
        {
          icon: "radar",
          title: "主动找活",
          desc: "扫描 Slack 频道、邮件和文档更新，自己发现哪些事没人跟进、哪些流程卡住了。",
          example: "就像一个经验丰富的同事，走进办公室就知道今天该干什么。",
        },
        {
          icon: "handshake",
          title: "主动协作",
          desc: "频道里有人提到一个项目，它直接给出项目背景、上次讨论结论和当前进展。",
          example: "某件事三天没人动，它会在频道里礼貌追问进度。",
        },
        {
          icon: "lightbulb",
          title: "主动思考",
          desc: "发现客户投诉集中在同一个问题，主动整理分析并建议产品改进方向。",
          example: "甚至在协作中判断「这里缺一个工具」，自己动手做一个。",
        },
      ],
    },
    scenarios: {
      tag: "真实场景",
      title: "这也行？",
      sub: "不是我们说它行，是它真的已经在干了。",
      items: [
        {
          tag: "招聘",
          bold: "岗位挂了三周没人投？它分析完原因，改好了 JD 发给你。",
          desc: "不只是提醒你「该招人了」——它会看转化数据、对比渠道、给出具体调整建议。",
        },
        {
          tag: "法务",
          bold: "两份合同的付款条款互相矛盾？它在你签字之前就标出来了。",
          desc: "自动交叉比对关联合同，标注风险条款、到期节点、和历史争议先例。法务的眼睛不够用时，它替你多看几遍。",
        },
        {
          tag: "项目管理",
          bold: "会议结束，纪要已经发出来了——还标注了跟上次结论矛盾的地方。",
          desc: "不只是记录，是在帮你思考。它记得过去三个月每次会议说了什么，比任何人都清楚项目全貌。",
        },
        {
          tag: "采购",
          bold: "供应商今年第三次涨价？它已经拉好了市场对标和备选清单。",
          desc: "它追踪每一笔采购的价格走势，在你收到涨价函之前，替代方案已经在你桌上了。",
        },
        {
          tag: "财务",
          bold: "一笔报销跟历史模式差了三倍？它先标记，再礼貌地问一句。",
          desc: "不是冷冰冰地拦截，而是像一个细心的财务同事提醒你。季度关账前，它把待处理清单推给每个相关人。",
        },
        {
          tag: "市场",
          bold: "竞品昨晚更新了定价页面？今早你的收件箱里已经躺着对比分析了。",
          desc: "它 24 小时盯着竞品动态——产品更新、招聘变化、社交媒体发声——然后把值得你关注的变化翻译成一句话摘要。",
        },
        {
          tag: "客户成功",
          bold: "客户两周没回邮件？跟进策略和邮件草稿已经躺在你收件箱了。",
          desc: "它记得每一个客户的沟通历史、偏好和雷区，比你自己记得还清楚。当五个客户同时反映同一个问题，它直接整理好推给产品团队。",
        },
        {
          tag: "行政",
          bold: "三个城市、五个人、两天出差——航班酒店会议室全排好了，还避开了每个人的日程冲突。",
          desc: "不只是订票，它理解出差的目的，知道谁跟谁需要面对面聊、哪个会议最关键，行程安排是有优先级的。",
        },
        {
          tag: "入职",
          bold: "新同事入职一周还没被拉进项目群？它比你先发现。",
          desc: "它追踪每一个新员工的融入路径——系统权限、知识库访问、关键人介绍——确保没有人在第一周就被遗漏。",
        },
        {
          tag: "质量管理",
          bold: "这个月第三次客诉都指向同一批次？它已经关联了生产记录和检验报告。",
          desc: "当人工还在逐条登记投诉时，它已经完成了交叉分析——批次号、供应商、产线、时间段，异常模式一目了然。",
        },
      ],
    },
    architecture: {
      tag: "产品架构",
      title: "四个模块，一位同事",
      sub: "企业只需配置角色，即可部署一个有账号、有记忆、会主动工作的 AI 同事。",
      modules: [
        {
          icon: "user",
          title: "角色定义",
          desc: "告诉它「你是谁、负责什么」，它就知道怎么工作。预置岗位职责、行为模式与主动行为触发规则。",
        },
        {
          icon: "brain",
          title: "组织记忆",
          desc: "越用越懂你的业务——结构化数据、文档、对话历史、流程记忆，持续积累业务上下文。",
        },
        {
          icon: "shield",
          title: "权限边界",
          desc: "该看的看，该批的批。权限跟角色走，关键操作需审批，所有行为可审计。",
        },
        {
          icon: "plug",
          title: "无缝接入",
          desc: "Lark / Slack / Email / Calendar——用它已有的账号加入你的团队，无需改变工作方式。",
        },
      ],
    },
    market: {
      tag: "市场趋势",
      title: "AI Agent 正在爆发",
      stats: [
        { value: "$471亿", label: "2030 年全球 AI Agent 市场规模" },
        { value: "44.8%", label: "年复合增长率 (CAGR)" },
        { value: "75%", label: "联合利华 AI 筛选后招聘时间缩短" },
        { value: "98%", label: "AI 入职助理候选人满意度" },
        { value: "4,822h", label: "山东高速集团月节省工时" },
        { value: "~300万", label: "年节省用工成本 (元)" },
      ],
    },
    warmth: {
      title: "我们不是要用机器取代人。",
      lines: [
        "我们是要把人从重复劳动中解放出来，去做真正需要人的事。",
        "你的 AI 同事处理流程、追踪进度、整理信息——",
        "而你，做判断、做决策、做那些只有人才能做的事。",
      ],
    },
    cta: {
      title: "部署你的第一位 AI 同事",
      sub: "从 HR 或运营协调角色开始，两周内上线。",
      btn1: "预约演示",
      btn2: "联系我们",
    },
    footer: {
      copy: "© 2025 taylon. All rights reserved.",
      tagline: "企业数字员工运行平台",
    },
  },
  en: {
    nav: {
      brand: "taylon",
      links: [
        { label: "Vision", href: "#vision" },
        { label: "Capabilities", href: "#capabilities" },
        { label: "Scenarios", href: "#scenarios" },
        { label: "Architecture", href: "#architecture" },
        { label: "Market", href: "#market" },
      ],
      cta: "Book a Demo",
    },
    hero: {
      headline: "Not a tool. A teammate.",
      sub: "Add an AI employee to your team — one with its own account, its own memory, who walks in knowing what needs to be done.",
      cta1: "Book a Demo",
      cta2: "Learn More",
    },
    vision: {
      tag: "A New Paradigm",
      title: "AI Employee ≠ Process Automation",
      desc: "Most \"AI employees\" on the market are just RPA with a language model skin — trigger → action. A real AI colleague starts working before you even ask.",
      old: {
        title: "Traditional Automation",
        items: [
          "Receive form → Send email",
          "Trigger condition → Run script",
          "Scheduled task → Generate report",
          "Wait for command → Execute mechanically",
        ],
      },
      new: {
        title: "AI Colleague",
        items: [
          "Spot untracked work → Follow up proactively",
          "Detect anomalies → Compile suggestions for you",
          "Meeting ends → Minutes already sent",
          "Think ahead → Find its own tasks",
        ],
      },
    },
    capabilities: {
      tag: "Core Capabilities",
      title: "Not taking orders. Taking initiative.",
      cards: [
        {
          icon: "radar",
          title: "Proactive Discovery",
          desc: "Scans Slack channels, emails, and doc updates to find untracked work and stalled processes on its own.",
          example: "Like a seasoned colleague who walks into the office already knowing what needs doing today.",
        },
        {
          icon: "handshake",
          title: "Active Collaboration",
          desc: "When someone mentions a project, it surfaces the background, last discussion, and current status — no \"which project?\" questions.",
          example: "If something sits untouched for three days, it politely follows up in the channel.",
        },
        {
          icon: "lightbulb",
          title: "Insight & Initiative",
          desc: "Notices customer complaints clustering around one issue and proactively drafts an analysis with improvement suggestions.",
          example: "It even recognizes \"we need a tool here\" and builds one itself.",
        },
      ],
    },
    scenarios: {
      tag: "Real Scenarios",
      title: "Wait, it can do that?",
      sub: "We don't just claim it works. It's already doing it.",
      items: [
        {
          tag: "Recruiting",
          bold: "A role's been open for 3 weeks with no applicants? It analyzes why and rewrites the JD for you.",
          desc: "Not just a reminder to \"go hire\" — it reviews conversion data, compares channels, and gives specific suggestions.",
        },
        {
          tag: "Legal",
          bold: "Two contracts have contradicting payment terms? It flags them before you sign.",
          desc: "Auto cross-references related contracts, highlights risky clauses, expiry dates, and historical dispute precedents. When your legal team can't review everything, it takes another pass for them.",
        },
        {
          tag: "Project Mgmt",
          bold: "Meeting over? Minutes are out — with contradictions to last time flagged.",
          desc: "Not just recording. Thinking alongside you. It remembers what was said in every meeting for the past three months — better than anyone on the team.",
        },
        {
          tag: "Procurement",
          bold: "Supplier raised prices for the third time this year? Market benchmarks and alternatives are on your desk.",
          desc: "It tracks pricing trends for every purchase. Before you even receive the price increase letter, backup options are already prepared.",
        },
        {
          tag: "Finance",
          bold: "An expense claim 3x the historical average? It flags it first, then asks politely.",
          desc: "Not a cold rejection — more like a thoughtful finance colleague giving you a heads-up. Before quarter-end close, it pushes the open-items checklist to everyone involved.",
        },
        {
          tag: "Marketing",
          bold: "Competitor updated their pricing page last night? A comparison analysis is in your inbox this morning.",
          desc: "It monitors competitors 24/7 — product updates, hiring changes, social media activity — and translates what matters into one-line summaries.",
        },
        {
          tag: "Customer Success",
          bold: "Client hasn't replied in two weeks? A follow-up plan and draft email are waiting for you.",
          desc: "It remembers every client's communication history, preferences, and red flags — better than you do. When five clients report the same issue, it compiles the findings and pushes them to the product team.",
        },
        {
          tag: "Admin",
          bold: "Three cities, five people, two-day trip — flights, hotels, and meeting rooms sorted, with zero calendar conflicts.",
          desc: "Not just booking tickets. It understands the purpose of the trip, knows who needs face-time with whom, which meeting is critical, and prioritizes the itinerary accordingly.",
        },
        {
          tag: "Onboarding",
          bold: "New hire hasn't been added to the project channel after a week? It notices before you do.",
          desc: "It tracks every new employee's onboarding path — system access, knowledge base, key introductions — making sure no one falls through the cracks in week one.",
        },
        {
          tag: "Quality",
          bold: "Third complaint this month pointing to the same batch? It's already linked production logs and inspection reports.",
          desc: "While others are still logging complaints manually, it's finished cross-referencing batch numbers, suppliers, production lines, and timelines. The anomaly pattern is already clear.",
        },
      ],
    },
    architecture: {
      tag: "Product Architecture",
      title: "Four modules. One colleague.",
      sub: "Configure a role, deploy an AI colleague with its own account, memory, and initiative.",
      modules: [
        {
          icon: "user",
          title: "Role Definition",
          desc: "Tell it \"who you are and what you own\" — it knows how to work. Pre-built role templates with responsibilities, behaviors, and proactive triggers.",
        },
        {
          icon: "brain",
          title: "Org Memory",
          desc: "Gets smarter the more you use it — structured data, docs, conversation history, and process memory that compounds over time.",
        },
        {
          icon: "shield",
          title: "Permission & Boundary",
          desc: "See what it should, approve what matters. Permissions follow roles, critical actions need approval, everything is auditable.",
        },
        {
          icon: "plug",
          title: "Seamless Integration",
          desc: "Lark / Slack / Email / Calendar — it joins your team with a real account. No workflow changes required.",
        },
      ],
    },
    market: {
      tag: "Market Trends",
      title: "AI Agents are exploding.",
      stats: [
        { value: "$47.1B", label: "Global AI Agent market by 2030" },
        { value: "44.8%", label: "Compound annual growth rate" },
        { value: "75%", label: "Hiring time reduced (Unilever, AI screening)" },
        { value: "98%", label: "Candidate satisfaction (AI onboarding)" },
        { value: "4,822h", label: "Monthly hours saved (Shandong Expressway)" },
        { value: "~$430K", label: "Annual labor cost savings" },
      ],
    },
    warmth: {
      title: "We're not here to replace people.",
      lines: [
        "We're here to free people from repetitive work — so they can do what only humans can.",
        "Your AI colleague handles processes, tracks progress, organizes information —",
        "While you make the calls, the decisions, and the things that truly need a human touch.",
      ],
    },
    cta: {
      title: "Deploy your first AI teammate.",
      sub: "Start with an HR or Ops Coordinator role. Live in two weeks.",
      btn1: "Book a Demo",
      btn2: "Contact Us",
    },
    footer: {
      copy: "© 2025 taylon. All rights reserved.",
      tagline: "Enterprise AI Employee Runtime Platform",
    },
  },
};
