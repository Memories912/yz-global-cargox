import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "ja" | "zh" | "en" | "ko";

export const languages: { code: Locale; short: string; label: string }[] = [
  { code: "ja", short: "日", label: "日本語" },
  { code: "zh", short: "中", label: "中文" },
  { code: "en", short: "EN", label: "English" },
  { code: "ko", short: "한", label: "한국어" },
];

const documentTitles: Record<Locale, string> = {
  en: "Y&Z Global | China Sourcing & Supply Chain Solutions",
  zh: "Y&Z Global | 中国采购与供应链解决方案",
  ja: "Y&Z Global | 中国調達・サプライチェーン支援",
  ko: "Y&Z Global | 중국 소싱 및 공급망 솔루션",
};

const messages: Record<Locale, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.process": "Process",
    "nav.solutions": "Solutions",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.quote": "Get a Quote",
    "mobile.tagline": "China sourcing built for speed and certainty.",
    "hero.eyebrow": "China Sourcing & Supply Chain Solutions",
    "hero.title1": "More Than", "hero.title2": "Sourcing",
    "hero.promise": "We help importers reduce risk, save time and build long-term, dependable supply chains in China.",
    "hero.lead": "China sourcing built for importers who value speed and certainty.",
    "hero.detail": "We manage product sourcing, supplier verification, inspection, warehousing, shipping and after-sales coordination in China.",
    "hero.primary": "Get a Quote in 24 Hours",
    "hero.secondary": "View Business Process",
    "hero.map": "From factories to warehouses, every step stays visible and under control.",
    "hero.flow": "From request to delivery",
    "hero.route": "China → Korea · Japan · Europe · USA",
    "quick.title": "Fast Quote Process",
    "quick.subtitle": "Send us a product image or link. We help you move fast.",
    "solve.title": "What We Solve",
    "solve.subtitle": "Importing from China should not feel risky, slow or unclear.",
    "guarantee.title": "What We Guarantee",
    "guarantee.subtitle": "Real support, not empty promises.",
    "guarantee.intro": "Our responsibility is to make the process visible, keep decisions moving and help suppliers meet the standard you approved.",
    "services.title": "One-Stop China Supply Chain Service",
    "services.subtitle": "One accountable team across sourcing, production, quality, warehousing and delivery.",
    "services.eyebrow": "Core Services", "services.pageTitle": "One-Stop China Supply Chain", "services.pageSubtitle": "From product research to after-sales coordination, one team keeps your China supply chain moving, visible and accountable.", "services.outcome": "What this service delivers", "services.group1": "Source & Develop", "services.group2": "Control & Prepare", "services.group3": "Deliver & Improve", "services.viewAll": "Explore All Core Services",
    "market.title": "Focused on Korea & Japan Markets",
    "market.subtitle": "We understand the details importers care about — certification, packaging, communication speed and long-term supplier control.",
    "market.korea": "Korea Market",
    "market.japan": "Japan Market",
    "market.more": "See market-specific solutions",
    "process.eyebrow": "Our Business Process",
    "process.step": "Step",
    "process.title": "How We Work",
    "process.subtitle": "From the first product idea to final delivery, Y&Z Global manages every step with transparency, speed and quality control.",
    "solutions.eyebrow": "Y&Z Global Solutions",
    "solutions.number": "No.",
    "solutions.title": "Problems We Help Importers Solve",
    "solutions.subtitle": "Most importers are not only worried about price. They worry about risk, delays, quality problems, supplier communication and after-sales responsibility.",
    "card.pain": "Pain Point",
    "card.solution": "Our Solution",
    "contact.eyebrow": "Start a Project",
    "contact.title": "Tell Us What You Need",
    "contact.subtitle": "Send a product image, product link, specification, target price or target market. The clearer the request, the faster we can evaluate it.",
    "contact.asideTitle": "One Message. One Accountable Team.",
    "contact.asideBody": "Share what you know now. Product images, links, parameters, target quantities and target prices all help us move faster.",
    "contact.upload": "Product Image Upload",
    "contact.uploadAction": "Upload a product image",
    "contact.confidential": "Your request stays confidential.",
    "contact.send": "Send Project Request",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell us about product specifications, packaging, certification or delivery requirements.",
    "contact.fileNote": "JPG, PNG or WEBP",
    "contact.successTitle": "Thank You.",
    "contact.successBody": "Our team will review your request and reply within 24 hours.",
    "contact.another": "Send another request",
    "cta.title": "Start Your Project Today",
    "cta.subtitle": "Send us your product image, link or idea. Our team will evaluate the project and reply within 24 hours.",
    "cta.contact": "Contact Us",
    "channel.whatsapp": "WhatsApp", "channel.wechat": "WeChat", "channel.kakao": "KakaoTalk", "channel.line": "LINE", "channel.email": "Email",
    "footer.summary": "China sourcing and supply-chain solutions for importers who value speed, visibility and long-term control.",
    "footer.rights": "All rights reserved.",
    "footer.motto": "Reduce risk. Save time. Source better.",
  },
  zh: {
    "nav.home": "首页", "nav.process": "业务流程", "nav.solutions": "解决方案", "nav.services": "核心服务", "nav.contact": "联系我们", "nav.quote": "获取报价",
    "mobile.tagline": "更快速、更确定的中国采购服务。",
    "hero.eyebrow": "中国采购与供应链解决方案",
    "hero.title1": "不仅仅是", "hero.title2": "采购",
    "hero.promise": "我们帮助进口商降低风险、节省时间，并在中国建立长期稳定的供应链。",
    "hero.lead": "为重视速度与确定性的进口商打造的中国采购服务。",
    "hero.detail": "我们在中国协调产品采购、供应商审核、质量检验、仓储、运输及售后服务。",
    "hero.primary": "24 小时内获取报价", "hero.secondary": "查看业务流程", "hero.map": "从工厂到仓库，从检验到国际交付，每一步都清晰可控。", "hero.flow": "从需求到交付", "hero.route": "中国 → 韩国 · 日本 · 欧洲 · 美国",
    "quick.title": "快速报价流程", "quick.subtitle": "发送产品图片或链接，我们帮您快速推进项目。",
    "solve.title": "我们解决的问题", "solve.subtitle": "从中国进口不应该充满风险、缓慢或不透明。",
    "guarantee.title": "我们的服务保障", "guarantee.subtitle": "真正的支持，而不是空泛承诺。", "guarantee.intro": "我们的责任是让流程清晰可见，推动决策，并帮助供应商达到您确认的标准。",
    "services.title": "一站式中国供应链服务", "services.subtitle": "一个负责到底的团队，覆盖采购、生产、质量、仓储与交付。",
    "services.eyebrow": "核心服务", "services.pageTitle": "一站式中国供应链", "services.pageSubtitle": "从产品调研到售后协调，一个团队让您的中国供应链持续推进、清晰可见、责任明确。", "services.outcome": "服务带来的结果", "services.group1": "寻源与开发", "services.group2": "质量与备货", "services.group3": "交付与改善", "services.viewAll": "查看全部核心服务",
    "market.title": "专注韩国与日本市场", "market.subtitle": "我们理解进口商重视的细节：认证、包装、沟通速度和长期供应商管理。", "market.korea": "韩国市场", "market.japan": "日本市场", "market.more": "查看市场专项解决方案",
    "process.eyebrow": "我们的业务流程", "process.step": "步骤", "process.title": "我们的工作方式", "process.subtitle": "从最初的产品想法到最终交付，Y&Z Global 以透明、高效和质量控制管理每一个环节。",
    "solutions.eyebrow": "Y&Z Global 解决方案", "solutions.number": "编号", "solutions.title": "我们帮助进口商解决的问题", "solutions.subtitle": "进口商担心的不只是价格，还包括风险、延误、质量、供应商沟通与售后责任。",
    "card.pain": "客户痛点", "card.solution": "我们的方案",
    "contact.eyebrow": "启动项目", "contact.title": "告诉我们您的需求", "contact.subtitle": "发送产品图片、链接、规格、目标价格或目标市场。信息越清晰，我们评估得越快。", "contact.asideTitle": "一条消息，一个负责到底的团队。", "contact.asideBody": "请分享您目前掌握的信息。产品图片、链接、参数、数量和目标价格都能帮助我们加快进度。", "contact.upload": "上传产品图片", "contact.uploadAction": "选择产品图片", "contact.fileNote": "支持 JPG、PNG 或 WEBP", "contact.confidential": "您的项目需求将被严格保密。", "contact.send": "发送项目需求", "contact.message": "项目说明", "contact.messagePlaceholder": "请说明产品规格、包装、认证或交付要求。", "contact.successTitle": "感谢您的提交。", "contact.successBody": "我们的团队将在 24 小时内审核并回复您的需求。", "contact.another": "提交另一个需求",
    "cta.title": "今天就启动您的项目", "cta.subtitle": "发送产品图片、链接或想法，我们将在 24 小时内完成初步评估并回复。", "cta.contact": "联系我们",
    "channel.whatsapp": "WhatsApp", "channel.wechat": "微信", "channel.kakao": "KakaoTalk", "channel.line": "LINE", "channel.email": "电子邮箱",
    "footer.summary": "为重视速度、透明度与长期供应链管理的进口商提供中国采购解决方案。", "footer.rights": "版权所有。", "footer.motto": "降低风险，节省时间，更好地采购。",
  },
  ja: {
    "nav.home": "ホーム", "nav.process": "業務プロセス", "nav.solutions": "ソリューション", "nav.services": "サービス", "nav.contact": "お問い合わせ", "nav.quote": "見積依頼",
    "mobile.tagline": "スピードと確実性を重視した中国調達。",
    "hero.eyebrow": "中国調達・サプライチェーンソリューション",
    "hero.title1": "調達を超えた", "hero.title2": "価値",
    "hero.promise": "輸入事業者のリスクを減らし、時間を節約し、中国で長期的に安定したサプライチェーンを構築します。",
    "hero.lead": "スピードと確実性を重視する輸入事業者のための中国調達。",
    "hero.detail": "商品調達、サプライヤー確認、品質検査、倉庫、配送、アフターサービスまで中国で一括管理します。",
    "hero.primary": "24時間以内に見積取得", "hero.secondary": "業務プロセスを見る", "hero.map": "工場から倉庫、検品から国際配送まで、すべての工程を可視化し管理します。", "hero.flow": "ご依頼から納品まで", "hero.route": "中国 → 韓国・日本・欧州・米国",
    "quick.title": "迅速な見積プロセス", "quick.subtitle": "商品画像またはリンクをお送りください。迅速に対応します。",
    "solve.title": "解決できる課題", "solve.subtitle": "中国からの輸入を、不安・遅延・不透明さから解放します。",
    "guarantee.title": "サービス保証", "guarantee.subtitle": "空約束ではなく、実務で支援します。", "guarantee.intro": "工程を可視化し、意思決定を前進させ、承認済み基準をサプライヤーが満たすよう支援します。",
    "services.title": "中国ワンストップ・サプライチェーンサービス", "services.subtitle": "調達、生産、品質、倉庫、納品まで一つのチームが責任を持って対応します。",
    "services.eyebrow": "コアサービス", "services.pageTitle": "中国ワンストップ供給管理", "services.pageSubtitle": "商品調査からアフターサービスまで、一つのチームが中国サプライチェーンを前進させ、可視化し、責任を持って管理します。", "services.outcome": "提供する成果", "services.group1": "調達・開発", "services.group2": "品質・出荷準備", "services.group3": "配送・改善", "services.viewAll": "すべてのコアサービスを見る",
    "market.title": "韓国・日本市場に特化", "market.subtitle": "認証、包装、連絡速度、長期的なサプライヤー管理など、輸入事業者が重視する点を理解しています。", "market.korea": "韓国市場", "market.japan": "日本市場", "market.more": "市場別ソリューションを見る",
    "process.eyebrow": "業務プロセス", "process.step": "ステップ", "process.title": "私たちの進め方", "process.subtitle": "最初の商品アイデアから最終納品まで、Y&Z Global が透明性、スピード、品質管理をもって全工程を管理します。",
    "solutions.eyebrow": "Y&Z Global ソリューション", "solutions.number": "番号", "solutions.title": "輸入事業者の課題を解決", "solutions.subtitle": "価格だけでなく、リスク、遅延、品質、サプライヤーとの連絡、アフターサービスの責任まで対応します。",
    "card.pain": "課題", "card.solution": "解決策",
    "contact.eyebrow": "プロジェクト開始", "contact.title": "ご要望をお聞かせください", "contact.subtitle": "商品画像、リンク、仕様、目標価格、市場情報をお送りください。情報が明確なほど迅速に評価できます。", "contact.asideTitle": "一つの窓口、一つの責任チーム。", "contact.asideBody": "商品画像、リンク、仕様、数量、目標価格など、現時点の情報を共有してください。", "contact.upload": "商品画像アップロード", "contact.uploadAction": "商品画像を選択", "contact.fileNote": "JPG、PNG、WEBPに対応", "contact.confidential": "ご依頼内容は機密として取り扱います。", "contact.send": "プロジェクト依頼を送信", "contact.message": "メッセージ", "contact.messagePlaceholder": "商品仕様、包装、認証、配送条件をご記入ください。", "contact.successTitle": "ありがとうございます。", "contact.successBody": "担当チームが内容を確認し、24時間以内にご返信します。", "contact.another": "別の依頼を送信",
    "cta.title": "今日からプロジェクトを開始", "cta.subtitle": "商品画像、リンク、アイデアをお送りください。24時間以内に評価してご返信します。", "cta.contact": "お問い合わせ",
    "channel.whatsapp": "WhatsApp", "channel.wechat": "WeChat", "channel.kakao": "KakaoTalk", "channel.line": "LINE", "channel.email": "メール",
    "footer.summary": "スピード、可視性、長期管理を重視する輸入事業者のための中国調達・サプライチェーン支援。", "footer.rights": "無断転載を禁じます。", "footer.motto": "リスクを減らし、時間を節約し、より良く調達する。",
  },
  ko: {
    "nav.home": "홈", "nav.process": "업무 절차", "nav.solutions": "솔루션", "nav.services": "서비스", "nav.contact": "문의하기", "nav.quote": "견적 요청",
    "mobile.tagline": "속도와 확실성을 위한 중국 소싱.",
    "hero.eyebrow": "중국 소싱 및 공급망 솔루션",
    "hero.title1": "소싱을 넘어", "hero.title2": "더 큰 가치",
    "hero.promise": "수입업체의 위험을 줄이고 시간을 절약하며 중국에서 장기적으로 안정적인 공급망을 구축합니다.",
    "hero.lead": "속도와 확실성을 중시하는 수입업체를 위한 중국 소싱.",
    "hero.detail": "제품 소싱, 공급업체 검증, 품질 검사, 창고, 배송 및 사후 관리를 중국에서 통합 관리합니다.",
    "hero.primary": "24시간 내 견적 받기", "hero.secondary": "업무 절차 보기", "hero.map": "공장에서 창고, 검사에서 국제 배송까지 모든 단계를 투명하게 관리합니다.", "hero.flow": "요청부터 배송까지", "hero.route": "중국 → 한국 · 일본 · 유럽 · 미국",
    "quick.title": "빠른 견적 절차", "quick.subtitle": "제품 이미지나 링크를 보내주시면 신속하게 진행합니다.",
    "solve.title": "해결하는 문제", "solve.subtitle": "중국 수입은 위험하거나 느리거나 불투명할 필요가 없습니다.",
    "guarantee.title": "서비스 보장", "guarantee.subtitle": "빈 약속이 아닌 실질적인 지원입니다.", "guarantee.intro": "프로세스를 투명하게 만들고 의사결정을 앞당기며 공급업체가 승인된 기준을 충족하도록 지원합니다.",
    "services.title": "원스톱 중국 공급망 서비스", "services.subtitle": "소싱, 생산, 품질, 창고 및 배송을 하나의 책임팀이 관리합니다.",
    "services.eyebrow": "핵심 서비스", "services.pageTitle": "원스톱 중국 공급망", "services.pageSubtitle": "제품 조사부터 사후 관리까지 하나의 팀이 중국 공급망을 지속적으로 운영하고 투명하게 관리합니다.", "services.outcome": "제공되는 결과", "services.group1": "소싱 및 개발", "services.group2": "품질 및 출하 준비", "services.group3": "배송 및 개선", "services.viewAll": "전체 핵심 서비스 보기",
    "market.title": "한국 및 일본 시장 특화", "market.subtitle": "인증, 포장, 커뮤니케이션 속도, 장기 공급업체 관리 등 수입업체가 중요하게 생각하는 부분을 이해합니다.", "market.korea": "한국 시장", "market.japan": "일본 시장", "market.more": "시장별 솔루션 보기",
    "process.eyebrow": "업무 프로세스", "process.step": "단계", "process.title": "업무 진행 방식", "process.subtitle": "첫 제품 아이디어부터 최종 배송까지 Y&Z Global이 투명성, 속도 및 품질 관리를 바탕으로 모든 단계를 관리합니다.",
    "solutions.eyebrow": "Y&Z Global 솔루션", "solutions.number": "번호", "solutions.title": "수입업체의 문제를 해결합니다", "solutions.subtitle": "가격뿐 아니라 위험, 지연, 품질, 공급업체 커뮤니케이션 및 사후 책임까지 해결합니다.",
    "card.pain": "문제점", "card.solution": "해결 방법",
    "contact.eyebrow": "프로젝트 시작", "contact.title": "필요한 제품을 알려주세요", "contact.subtitle": "제품 이미지, 링크, 사양, 목표 가격 또는 목표 시장을 보내주세요. 정보가 명확할수록 빠르게 검토할 수 있습니다.", "contact.asideTitle": "하나의 메시지, 하나의 책임팀.", "contact.asideBody": "제품 이미지, 링크, 사양, 수량 및 목표 가격 등 현재 정보를 공유해 주세요.", "contact.upload": "제품 이미지 업로드", "contact.uploadAction": "제품 이미지 선택", "contact.fileNote": "JPG, PNG, WEBP 지원", "contact.confidential": "요청 내용은 기밀로 보호됩니다.", "contact.send": "프로젝트 요청 보내기", "contact.message": "메시지", "contact.messagePlaceholder": "제품 사양, 포장, 인증 또는 배송 요구사항을 입력해 주세요.", "contact.successTitle": "감사합니다.", "contact.successBody": "담당팀이 요청을 검토하고 24시간 이내에 답변드리겠습니다.", "contact.another": "다른 요청 보내기",
    "cta.title": "오늘 프로젝트를 시작하세요", "cta.subtitle": "제품 이미지, 링크 또는 아이디어를 보내주시면 24시간 이내에 검토하고 답변드리겠습니다.", "cta.contact": "문의하기",
    "channel.whatsapp": "WhatsApp", "channel.wechat": "WeChat", "channel.kakao": "KakaoTalk", "channel.line": "LINE", "channel.email": "이메일",
    "footer.summary": "속도, 가시성 및 장기 관리를 중시하는 수입업체를 위한 중국 소싱 및 공급망 솔루션.", "footer.rights": "모든 권리 보유.", "footer.motto": "위험을 줄이고, 시간을 절약하고, 더 나은 소싱을 시작하세요.",
  },
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem("yz-global-language");
    return languages.some((language) => language.code === saved) ? (saved as Locale) : "en";
  });

  useEffect(() => {
    localStorage.setItem("yz-global-language", locale);
    document.documentElement.lang = locale;
    document.title = documentTitles[locale];
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t: (key: string) => messages[locale][key] ?? messages.en[key] ?? key }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
