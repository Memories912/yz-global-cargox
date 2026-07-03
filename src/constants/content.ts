export type IconName =
  | "search"
  | "shield"
  | "package"
  | "badge"
  | "factory"
  | "warehouse"
  | "truck"
  | "globe"
  | "handshake"
  | "clock"
  | "message"
  | "boxes"
  | "clipboard"
  | "tag"
  | "refresh"
  | "battery"
  | "plane";

export const quickQuoteSteps = [
  "Send Product Image",
  "Quote Within 24 Hours",
  "Sample in 3–7 Days",
  "Confirm Order",
  "Production",
  "Inspection",
  "Shipping",
];

export const homeSolutions = [
  {
    icon: "search" as IconName,
    title: "Unreliable Suppliers",
    pain: "New importers often worry about fake factories, unstable suppliers and hidden middlemen.",
    solution: "We verify suppliers, evaluate factories and match the right partner for your project.",
  },
  {
    icon: "clock" as IconName,
    title: "Slow Response",
    pain: "Delayed quotations and unanswered messages can stop a good project before it starts.",
    solution: "We coordinate fast quotations, supplier feedback and sample follow-up from one point of contact.",
  },
  {
    icon: "package" as IconName,
    title: "High MOQ",
    pain: "Large minimum orders create unnecessary inventory pressure and testing risk.",
    solution: "We search lower-MOQ factories, ready-stock options and practical launch quantities.",
  },
  {
    icon: "badge" as IconName,
    title: "Quality Issues",
    pain: "Product quality can drift between samples, production and later batches.",
    solution: "We align standards, follow production and inspect goods before shipment.",
  },
  {
    icon: "shield" as IconName,
    title: "Certification Problems",
    pain: "Testing, battery files and market documentation are easy to miss or misunderstand.",
    solution: "We coordinate KC, PSE, CE, CB and UN38.3 requirements with factories and labs.",
  },
  {
    icon: "refresh" as IconName,
    title: "After-Sales Trouble",
    pain: "Defects and complaints become expensive when nobody owns the follow-up.",
    solution: "We document issues, negotiate solutions and hold suppliers accountable.",
  },
];

export const guarantees = [
  ["Fast Response", "Clear project feedback and quotation coordination without avoidable waiting."],
  ["Transparent Communication", "Visible milestones, honest trade-offs and one accountable point of contact."],
  ["Supplier Verification", "Background screening and capability checks before you commit."],
  ["Quality Inspection Support", "Appearance, function, packaging and quantity checks before dispatch."],
  ["Warehousing & Consolidation", "Receiving, inspection, labeling, repacking and multi-supplier consolidation."],
  ["Certification Coordination", "KC / PSE / CE / CB / UN38.3 certification coordination."],
  ["After-Sales Assistance", "Defect analysis, replacement follow-up and compensation negotiation."],
  ["Long-Term Partnership", "Supplier performance management that improves across repeat orders."],
];

export const services = [
  ["search", "Product Sourcing", "Research products, pricing and practical supplier options."],
  ["factory", "OEM & ODM Development", "Turn an idea into a manufacturable, market-ready product."],
  ["handshake", "Supplier Matching", "Match factory type, quantity and customization needs."],
  ["shield", "Factory Verification", "Check background, capability and cooperation fit."],
  ["package", "Sampling", "Coordinate sample details, revisions and approval."],
  ["clock", "Production Follow-up", "Track milestones, timing and quality expectations."],
  ["badge", "Quality Inspection", "Inspect appearance, function, packaging and quantity."],
  ["warehouse", "Yiwu Warehousing", "Receive and manage goods from multiple factories."],
  ["tag", "Labeling & Repacking", "Prepare labels, cartons and retail-ready presentation."],
  ["boxes", "Consolidation", "Combine orders to reduce complexity and freight waste."],
  ["globe", "International Shipping", "Coordinate sea, air, express and door-to-door plans."],
  ["refresh", "After-Sales Coordination", "Resolve defects and improve the next production run."],
] as const;

export const marketFocus = {
  korea: [
    "KC certification coordination",
    "Battery and charger documentation support",
    "Fast quotation communication",
    "Product quality feedback",
    "Long-term supplier management",
  ],
  japan: [
    "PSE / METI / UN38.3 coordination",
    "Packaging and labeling details",
    "Stable quality control",
    "Supplier communication",
    "Logistics planning",
  ],
};

export const processSteps = [
  {
    title: "Tell Us What You Need",
    description: "Send us your product idea, image, link or specification. We evaluate feasibility and clarify the project requirements.",
    chinese: "提交产品图片、链接、想法或参数，我们先梳理需求与项目可行性。",
    items: ["Product images", "Product links", "Product ideas", "Product specifications"],
    icon: "message" as IconName,
  },
  {
    title: "Product Research",
    description: "We research the category, supplier landscape, cost structure and competitive references before recommending a direction.",
    chinese: "从市场、供应商、成本和竞品多个维度完成产品调研。",
    items: ["Market research", "Supplier screening", "Factory evaluation", "Cost analysis", "Competitor analysis"],
    icon: "search" as IconName,
  },
  {
    title: "Supplier Matching",
    description: "We match your project with suitable factories or suppliers based on product type, quantity, market and customization needs.",
    chinese: "根据产品、数量、市场与定制需求匹配合适的供应商。",
    items: ["OEM factories", "ODM factories", "Ready-stock suppliers"],
    icon: "handshake" as IconName,
  },
  {
    title: "Quotation",
    description: "You receive a clear quotation that separates the major cost drivers and expected logistics assumptions.",
    chinese: "报价清晰拆分产品、包装、模具、认证与预估物流成本。",
    items: ["Product cost", "Packaging cost", "Mold cost", "Certification cost", "Estimated shipping cost"],
    icon: "clipboard" as IconName,
  },
  {
    title: "Sampling",
    description: "We coordinate samples and revisions so the product is checked before production starts.",
    chinese: "在量产前确认外观、包装、功能与规格细节。",
    items: ["Appearance", "Packaging", "Function", "Specifications"],
    icon: "package" as IconName,
  },
  {
    title: "Production",
    description: "During production, we coordinate factory progress, quality requirements and delivery timing.",
    chinese: "生产中持续跟进进度、质量与交期。",
    items: ["Progress follow-up", "Quality checking", "Delivery time control"],
    icon: "factory" as IconName,
  },
  {
    title: "Quality Inspection",
    description: "We inspect the agreed checkpoints and provide photo and video feedback before shipment.",
    chinese: "按标准检查外观、功能、包装与数量，并提供图像反馈。",
    items: ["Appearance check", "Function test", "Packaging check", "Quantity check", "Photo and video feedback"],
    icon: "badge" as IconName,
  },
  {
    title: "Warehousing",
    description: "Our Yiwu warehouse receives goods, prepares packaging and consolidates orders from different suppliers.",
    chinese: "义乌仓库负责收货、验货、贴标、换包与拼货。",
    items: ["Receiving goods", "Inspection", "Repacking", "Labeling", "Consolidation"],
    icon: "warehouse" as IconName,
  },
  {
    title: "Shipping",
    description: "We recommend and coordinate the logistics method that fits your timing, destination and product requirements.",
    chinese: "根据时效、目的地与产品属性安排合适的运输方案。",
    items: ["Sea freight", "Air freight", "Express", "Door-to-door delivery"],
    icon: "globe" as IconName,
  },
  {
    title: "After-Sales Support",
    description: "We continue to follow product feedback, supplier improvement and new development opportunities after delivery.",
    chinese: "交付后继续处理反馈、质量改善与新品开发。",
    items: ["Product feedback", "Quality improvement", "New product development", "Long-term cooperation"],
    icon: "refresh" as IconName,
  },
];

export const detailedSolutions = [
  ["Hard to Find Reliable Factories", "New importers may not know if a factory is real, reliable or suitable for long-term cooperation.", "We screen suppliers, check factory background, evaluate production capability and match reliable partners.", "search"],
  ["Slow Response", "Emails are not answered for days. Quotations take too long. Projects move slowly.", "We provide fast response, quick quotation, supplier matching and sample follow-up.", "clock"],
  ["High MOQ", "Factories often request 1,000, 2,000 or 5,000 units, creating high pressure for importers.", "We help find lower MOQ factories, ready-stock solutions and flexible starting options.", "package"],
  ["Unstable Product Quality", "The first batch may be good, but later batches may have quality problems, complaints and returns.", "We follow production, confirm quality standards, inspect before shipment and manage supplier performance.", "badge"],
  ["Defective Goods", "Customers may receive broken products, missing items, damaged packaging or functional defects.", "We analyze defects, negotiate compensation, arrange replacement and follow up supplier responsibility.", "refresh"],
  ["Exclusive Distribution Negotiation", "Importers worry about large orders, market risk and inventory pressure.", "We help negotiate exclusive distribution, regional agency, buyout cooperation, market protection and price protection.", "handshake"],
  ["Factory Bypassing Customer", "Some factories may try to contact clients directly and bypass the cooperation rules.", "We manage supplier communication, protect business cooperation rules and support long-term project coordination.", "shield"],
  ["KC Certification Problems", "Korean importers worry about KC testing, batteries, chargers and documentation issues.", "We support certification planning, documentation preparation, supplier coordination and testing communication.", "battery"],
  ["PSE Certification Problems", "Japanese importers worry about PSE, METI, UN38.3 and transport compliance.", "We coordinate certification planning, testing support, documents and logistics suggestions.", "shield"],
  ["Multi-Supplier Purchasing", "Products, packaging, manuals and accessories may come from different factories, making management complicated.", "We manage unified purchasing, inspection, warehousing and shipment.", "boxes"],
  ["Warehousing & Consolidation", "Goods are scattered across different factories, shipment times differ and freight costs become high.", "We provide Yiwu warehousing, receiving, inspection, labeling, repacking, consolidation and container loading.", "warehouse"],
  ["Logistics Risk", "Importers worry about lost goods, delay, extra cost and customs clearance problems.", "We design logistics plans and coordinate sea freight, air freight, express and door-to-door delivery.", "truck"],
  ["New Product Development", "Some clients only have an idea but no product, no factory and no clear development path.", "We support product development, structure optimization, packaging design, OEM and ODM solutions.", "factory"],
  ["Amazon Seller Support", "Amazon sellers may struggle with product development, cost control, packaging and factory management.", "We support product selection, sampling, custom packaging, FBA shipment and supply chain management.", "globe"],
] as const;

export type ContactChannel = "whatsapp" | "wechat" | "kakao" | "line" | "email";

export const contactDetails: ReadonlyArray<readonly [ContactChannel, string]> = [
  ["whatsapp", "+86 138 0579 8888"],
  ["wechat", "YZGlobal-Sourcing"],
  ["kakao", "yzglobal"],
  ["line", "@yzglobal"],
  ["email", "sourcing@yzglobal.com"],
];
