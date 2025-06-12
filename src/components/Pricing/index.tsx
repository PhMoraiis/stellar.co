"use client";

import { CurrencyCircleDollarIcon } from "@phosphor-icons/react/dist/ssr";
import { ArrowUpRight } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

// Types
type ServiceType = "branding" | "web-design" | "product-design";
type BrandingType = "logo-design" | "essential-visual" | "complete-brand";
type WebDesignType = "landing-page" | "frontend" | "ecommerce" | "backend";
type ProductDesignType = "ui-design" | "ux-research" | "complete-product";
type UrgencyType = "very-urgent" | "still-important" | "flexible";
type ExtraType =
  | "stationery"
  | "illustrations"
  | "motion"
  | "optimization"
  | "animations"
  | "cms"
  | "prototype"
  | "usability"
  | "designSystem";

interface PricingData {
  branding: Record<BrandingType, number>;
  webDesign: Record<WebDesignType, number>;
  productDesign: Record<ProductDesignType, number>;
  urgency: Record<UrgencyType, number>;
  extras: Record<ExtraType, number>;
}

// Constants
const PRICING_DATA: PricingData = {
  branding: {
    "logo-design": 500,
    "essential-visual": 1500,
    "complete-brand": 2500,
  },
  webDesign: {
    "landing-page": 500,
    frontend: 1800,
    backend: 2000,
    ecommerce: 4000,
  },
  productDesign: {
    "ui-design": 1000,
    "ux-research": 1500,
    "complete-product": 4000,
  },
  urgency: {
    "very-urgent": 800,
    "still-important": 400,
    flexible: 0,
  },
  extras: {
    stationery: 400,
    illustrations: 800,
    motion: 1500,
    optimization: 1000,
    animations: 1500,
    cms: 3000,
    prototype: 2000,
    usability: 1500,
    designSystem: 3000,
  },
};

const SERVICE_TABS = [
  { key: "branding" as const, label: "Branding" },
  { key: "web-design" as const, label: "Desenvolvimento" },
  { key: "product-design" as const, label: "Product Design" },
];

const BRANDING_OPTIONS = [
  { key: "logo-design" as const, label: "Logo Design" },
  { key: "essential-visual" as const, label: "Identidade Visual Essencial" },
  { key: "complete-brand" as const, label: "Estratégia Completa de Marca" },
];

const WEB_DESIGN_OPTIONS = [
  { key: "landing-page" as const, label: "Landing Page" },
  { key: "ecommerce" as const, label: "E-commerce" },
  { key: "frontend" as const, label: "Front-end" },
  { key: "backend" as const, label: "Back-end" },
];

const PRODUCT_DESIGN_OPTIONS = [
  { key: "ui-design" as const, label: "UI Design" },
  { key: "ux-research" as const, label: "UX Research" },
  { key: "complete-product" as const, label: "Produto Completo" },
];

const URGENCY_OPTIONS = [
  { key: "very-urgent" as const, label: "Muito Urgente" },
  { key: "still-important" as const, label: "Ainda Importante" },
  { key: "flexible" as const, label: "Flexível" },
];

const EXTRAS_BY_SERVICE = {
  branding: [
    { key: "stationery" as const, label: "Design para Papéis" },
    { key: "illustrations" as const, label: "Ilustrações Customizadas" },
    { key: "motion" as const, label: "Motion Design" },
  ],
  "web-design": [
    { key: "optimization" as const, label: "SEO Otimização" },
    { key: "animations" as const, label: "Animações Personalizadas" },
    { key: "cms" as const, label: "Integração CMS" },
  ],
  "product-design": [
    { key: "prototype" as const, label: "Prototipagem" },
    { key: "usability" as const, label: "Testes de Usabilidade" },
    { key: "designSystem" as const, label: "Design System" },
  ],
};

// Utility functions
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const getButtonClassName = (isSelected: boolean): string => {
  return `px-4 py-2 rounded-xs border border-gray-600 text-sm ${
    isSelected
      ? "border-gray-400 bg-gray-800 text-white"
      : "bg-transparent text-gray-400 hover:border-gray-400 hover:text-gray-300"
  }`;
};

// Custom hooks
const usePricingState = () => {
  const [activeService, setActiveService] = useState<ServiceType>("branding");
  const [selectedBranding, setSelectedBranding] = useState<BrandingType | null>(
    null,
  );
  const [selectedWebDesign, setSelectedWebDesign] =
    useState<WebDesignType | null>(null);
  const [selectedProductDesign, setSelectedProductDesign] =
    useState<ProductDesignType | null>(null);
  const [selectedUrgency, setSelectedUrgency] = useState<UrgencyType | null>(
    null,
  );
  const [brandingExtras, setBrandingExtras] = useState<Set<ExtraType>>(
    new Set(),
  );
  const [webDesignExtras, setWebDesignExtras] = useState<Set<ExtraType>>(
    new Set(),
  );
  const [productDesignExtras, setProductDesignExtras] = useState<
    Set<ExtraType>
  >(new Set());

  const toggleExtra = useCallback(
    (extra: ExtraType) => {
      const setterMap = {
        branding: setBrandingExtras,
        "web-design": setWebDesignExtras,
        "product-design": setProductDesignExtras,
      };

      const getterMap = {
        branding: brandingExtras,
        "web-design": webDesignExtras,
        "product-design": productDesignExtras,
      };

      const currentExtras = getterMap[activeService];
      const setter = setterMap[activeService];

      const newExtras = new Set(currentExtras);
      if (currentExtras.has(extra)) {
        newExtras.delete(extra);
      } else {
        newExtras.add(extra);
      }
      setter(newExtras);
    },
    [activeService, brandingExtras, webDesignExtras, productDesignExtras],
  );

  const getCurrentExtras = useCallback(() => {
    const extrasMap = {
      branding: brandingExtras,
      "web-design": webDesignExtras,
      "product-design": productDesignExtras,
    };
    return extrasMap[activeService];
  }, [activeService, brandingExtras, webDesignExtras, productDesignExtras]);

  const calculateTotal = useMemo(() => {
    let total = 0;

    // Add selected services
    if (selectedBranding) {
      total += PRICING_DATA.branding[selectedBranding];
    }
    if (selectedWebDesign) {
      total += PRICING_DATA.webDesign[selectedWebDesign];
    }
    if (selectedProductDesign) {
      total += PRICING_DATA.productDesign[selectedProductDesign];
    }

    // Add urgency
    if (selectedUrgency) {
      total += PRICING_DATA.urgency[selectedUrgency];
    }

    // Add extras from all services
    const allExtras = [brandingExtras, webDesignExtras, productDesignExtras];
    // biome-ignore lint/complexity/noForEach: <explanation>
    allExtras.forEach((extras) => {
      // biome-ignore lint/complexity/noForEach: <explanation>
      extras.forEach((extra) => {
        total += PRICING_DATA.extras[extra];
      });
    });

    return total;
  }, [
    selectedBranding,
    selectedWebDesign,
    selectedProductDesign,
    selectedUrgency,
    brandingExtras,
    webDesignExtras,
    productDesignExtras,
  ]);

  return {
    activeService,
    setActiveService,
    selectedBranding,
    setSelectedBranding,
    selectedWebDesign,
    setSelectedWebDesign,
    selectedProductDesign,
    setSelectedProductDesign,
    selectedUrgency,
    setSelectedUrgency,
    brandingExtras,
    webDesignExtras,
    productDesignExtras,
    toggleExtra,
    getCurrentExtras,
    calculateTotal,
  };
};

// Sub-components
interface ServiceTabsProps {
  activeService: ServiceType;
  onServiceChange: (service: ServiceType) => void;
}

const ServiceTabs = ({ activeService, onServiceChange }: ServiceTabsProps) => (
  <div className="flex lg:flex-row flex-col gap-4 mb-8">
    {SERVICE_TABS.map(({ key, label }) => (
      <Button
        key={key}
        className="px-6 py-3 rounded-xs"
        variant={activeService === key ? "default" : "outline"}
        onClick={() => onServiceChange(key)}
      >
        {label}
      </Button>
    ))}
  </div>
);

interface OptionSelectorProps<T> {
  title: string;
  options: readonly { key: T; label: string }[];
  selected: T | null;
  onSelect: (value: T | null) => void;
}

const OptionSelector = <T extends string>({
  title,
  options,
  selected,
  onSelect,
}: OptionSelectorProps<T>) => (
  <div className="mb-12">
    <h2 className="text-xl font-semibold mb-6 text-gray-300">{title}</h2>
    <div className="flex flex-wrap gap-4">
      {options.map(({ key, label }) => (
        <Button
          key={key}
          className={getButtonClassName(selected === key)}
          onClick={() => onSelect(selected === key ? null : key)}
        >
          {label}
        </Button>
      ))}
    </div>
  </div>
);

interface ExtrosSelectorProps {
  title: string;
  extras: readonly { key: ExtraType; label: string }[];
  selectedExtras: Set<ExtraType>;
  onToggle: (extra: ExtraType) => void;
}

const ExtrasSelector = ({
  title,
  extras,
  selectedExtras,
  onToggle,
}: ExtrosSelectorProps) => (
  <div className="mb-12">
    <h2 className="text-xl font-semibold mb-6 text-gray-300">{title}</h2>
    <div className="flex flex-wrap gap-4">
      {extras.map(({ key, label }) => (
        <Button
          key={key}
          className={getButtonClassName(selectedExtras.has(key))}
          onClick={() => onToggle(key)}
        >
          {label}
        </Button>
      ))}
    </div>
  </div>
);

interface ServiceContentProps {
  activeService: ServiceType;
  selectedBranding: BrandingType | null;
  setSelectedBranding: (value: BrandingType | null) => void;
  selectedWebDesign: WebDesignType | null;
  setSelectedWebDesign: (value: WebDesignType | null) => void;
  selectedProductDesign: ProductDesignType | null;
  setSelectedProductDesign: (value: ProductDesignType | null) => void;
  selectedUrgency: UrgencyType | null;
  setSelectedUrgency: (value: UrgencyType | null) => void;
  getCurrentExtras: () => Set<ExtraType>;
  toggleExtra: (extra: ExtraType) => void;
}

const ServiceContent = ({
  activeService,
  selectedBranding,
  setSelectedBranding,
  selectedWebDesign,
  setSelectedWebDesign,
  selectedProductDesign,
  setSelectedProductDesign,
  selectedUrgency,
  setSelectedUrgency,
  getCurrentExtras,
  toggleExtra,
}: ServiceContentProps) => {
  const currentExtras = getCurrentExtras();

  return (
    <>
      {activeService === "branding" && (
        <>
          <OptionSelector
            title="1. Tipo de Branding:"
            options={BRANDING_OPTIONS}
            selected={selectedBranding}
            onSelect={setSelectedBranding}
          />
          <OptionSelector
            title="2. Urgência do Projeto:"
            options={URGENCY_OPTIONS}
            selected={selectedUrgency}
            onSelect={setSelectedUrgency}
          />
          <ExtrasSelector
            title="3. Entregas Extra"
            extras={EXTRAS_BY_SERVICE.branding}
            selectedExtras={currentExtras}
            onToggle={toggleExtra}
          />
        </>
      )}

      {activeService === "web-design" && (
        <>
          <OptionSelector
            title="1. Tipo de Desenvolvimento:"
            options={WEB_DESIGN_OPTIONS}
            selected={selectedWebDesign}
            onSelect={setSelectedWebDesign}
          />
          <OptionSelector
            title="2. Urgência do Projeto:"
            options={URGENCY_OPTIONS}
            selected={selectedUrgency}
            onSelect={setSelectedUrgency}
          />
          <ExtrasSelector
            title="3. Entregas Extras"
            extras={EXTRAS_BY_SERVICE["web-design"]}
            selectedExtras={currentExtras}
            onToggle={toggleExtra}
          />
        </>
      )}

      {activeService === "product-design" && (
        <>
          <OptionSelector
            title="1. Tipo de Product Design:"
            options={PRODUCT_DESIGN_OPTIONS}
            selected={selectedProductDesign}
            onSelect={setSelectedProductDesign}
          />
          <OptionSelector
            title="2. Urgência do Projeto:"
            options={URGENCY_OPTIONS}
            selected={selectedUrgency}
            onSelect={setSelectedUrgency}
          />
          <ExtrasSelector
            title="3. Entregas Extras"
            extras={EXTRAS_BY_SERVICE["product-design"]}
            selectedExtras={currentExtras}
            onToggle={toggleExtra}
          />
        </>
      )}
    </>
  );
};

interface ContactSectionProps {
  selectedBranding: BrandingType | null;
  selectedWebDesign: WebDesignType | null;
  selectedProductDesign: ProductDesignType | null;
  selectedUrgency: UrgencyType | null;
  brandingExtras: Set<ExtraType>;
  webDesignExtras: Set<ExtraType>;
  productDesignExtras: Set<ExtraType>;
  totalPrice: number;
}

const ContactSection = ({
  selectedBranding,
  selectedWebDesign,
  selectedProductDesign,
  selectedUrgency,
  brandingExtras,
  webDesignExtras,
  productDesignExtras,
  totalPrice,
}: ContactSectionProps) => {
  const generateEmailBody = () => {
    let body = "Olá! Gostaria de solicitar um orçamento com as seguintes especificações:\n\n";
    
    // Add selected services
    const services = [];
    if (selectedBranding) {
      const brandingLabel = BRANDING_OPTIONS.find(opt => opt.key === selectedBranding)?.label;
      services.push(`Branding: ${brandingLabel}`);
    }
    if (selectedWebDesign) {
      const webDesignLabel = WEB_DESIGN_OPTIONS.find(opt => opt.key === selectedWebDesign)?.label;
      services.push(`Desenvolvimento: ${webDesignLabel}`);
    }
    if (selectedProductDesign) {
      const productDesignLabel = PRODUCT_DESIGN_OPTIONS.find(opt => opt.key === selectedProductDesign)?.label;
      services.push(`Product Design: ${productDesignLabel}`);
    }
    
    if (services.length > 0) {
      body += "SERVIÇOS SELECIONADOS:\n";
      for (const service of services) {
        body += `- ${service}\n`;
      }
      body += "\n";
    }
    
    // Add urgency
    if (selectedUrgency) {
      const urgencyLabel = URGENCY_OPTIONS.find(opt => opt.key === selectedUrgency)?.label;
      body += `URGÊNCIA DO PROJETO: ${urgencyLabel}\n\n`;
    }
    
    // Add extras
    const allExtras = [...brandingExtras, ...webDesignExtras, ...productDesignExtras];
    if (allExtras.length > 0) {
      body += "ENTREGAS EXTRAS:\n";
      for (const extra of allExtras) {
        let extraLabel = "";
        
        // Find the label for each extra
        for (const serviceExtras of Object.values(EXTRAS_BY_SERVICE)) {
          const found = serviceExtras.find(e => e.key === extra);
          if (found) extraLabel = found.label;
        }
        
        if (extraLabel) {
          body += `- ${extraLabel}\n`;
        }
      }
      body += "\n";
    }
    
    body += `ESTIMATIVA TOTAL: ${formatPrice(totalPrice)}\n\n`;
    body += "Aguardo retorno para mais detalhes!\n\nObrigado(a)!";
    
    return encodeURIComponent(body);
  };

  const handleContactClick = () => {
    const subject = encodeURIComponent("Novo Orçamento");
    const body = generateEmailBody();
    const mailtoUrl = `mailto:hello@stellarstudio.tech?subject=${subject}&body=${body}`;
    window.open(mailtoUrl);
  };

  return (
    <button 
      type="button"
      className="bg-white text-black p-6 lg:min-w-[400px] h-full rounded-lg cursor-pointer hover:bg-gray-50 transition-colors text-left"
      onClick={handleContactClick}
    >
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-orange-500 font-movatif-regular text-lg">
            Contato
          </h2>
          <h3 className="text-black font-movatif-book text-lg max-w-[180px] leading-tight">
            Pronto para elevar sua marca?
          </h3>
        </div>
        <div className="flex items-end">
          <ArrowUpRight className="size-6" />
        </div>
      </div>
    </button>
  );
};

// Main component
const Pricing = () => {
  const {
    activeService,
    setActiveService,
    selectedBranding,
    setSelectedBranding,
    selectedWebDesign,
    setSelectedWebDesign,
    selectedProductDesign,
    setSelectedProductDesign,
    selectedUrgency,
    setSelectedUrgency,
    brandingExtras,
    webDesignExtras,
    productDesignExtras,
    toggleExtra,
    getCurrentExtras,
    calculateTotal,
  } = usePricingState();

  return (
    <div className="py-16 px-4 md:py-36">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-8">
          <h4 className="text-lg font-medium uppercase mb-4 flex gap-2 items-center">
            <CurrencyCircleDollarIcon className="size-6" /> Orçamento
          </h4>

          <ServiceTabs
            activeService={activeService}
            onServiceChange={setActiveService}
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <Card className="bg-primary text-white border-0 rounded-md">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div />
                <div className="bg-primaryds text-black px-6 py-2 font-bold text-lg">
                  Est: {formatPrice(calculateTotal)}
                </div>
              </div>

              <ServiceContent
                activeService={activeService}
                selectedBranding={selectedBranding}
                setSelectedBranding={setSelectedBranding}
                selectedWebDesign={selectedWebDesign}
                setSelectedWebDesign={setSelectedWebDesign}
                selectedProductDesign={selectedProductDesign}
                setSelectedProductDesign={setSelectedProductDesign}
                selectedUrgency={selectedUrgency}
                setSelectedUrgency={setSelectedUrgency}
                getCurrentExtras={getCurrentExtras}
                toggleExtra={toggleExtra}
              />

              <hr className="border-gray-700 my-8" />

              <div className="flex lg:flex-row flex-col justify-between items-start gap-8">
                <div className="max-w-sm">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Nossa calculadora de preços fornece uma estimativa rápida
                    para você começar, mas sua visão única pode envolver
                    necessidades específicas que podem ajustar o custo final. O
                    preço aqui não é fixo e dependerá muito do escopo final do
                    seu projeto.
                  </p>
                </div>

                <ContactSection
                  selectedBranding={selectedBranding}
                  selectedWebDesign={selectedWebDesign}
                  selectedProductDesign={selectedProductDesign}
                  selectedUrgency={selectedUrgency}
                  brandingExtras={brandingExtras}
                  webDesignExtras={webDesignExtras}
                  productDesignExtras={productDesignExtras}
                  totalPrice={calculateTotal}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
