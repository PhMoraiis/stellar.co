'use client'

import { CurrencyCircleDollarIcon } from '@phosphor-icons/react/dist/ssr'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useCallback, useMemo, useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { useDictionary } from '@/hooks/useDictionary'

// Types
type ServiceType = 'web-design' | 'product-design'
type WebDesignType = 'landing-page' | 'frontend' | 'ecommerce' | 'backend'
type ProductDesignType = 'ui-design' | 'ux-research' | 'complete-product'
type UrgencyType = 'very-urgent' | 'still-important' | 'flexible'
type ExtraType =
  | 'stationery'
  | 'illustrations'
  | 'motion'
  | 'optimization'
  | 'animations'
  | 'cms'
  | 'prototype'
  | 'usability'
  | 'designSystem'

interface PricingData {
  webDesign: Record<WebDesignType, number>
  productDesign: Record<ProductDesignType, number>
  urgency: Record<UrgencyType, number>
  extras: Record<ExtraType, number>
}

// Constants
const PRICING_DATA: PricingData = {
  webDesign: {
    'landing-page': 500,
    frontend: 1800,
    backend: 2000,
    ecommerce: 4000,
  },
  productDesign: {
    'ui-design': 1000,
    'ux-research': 1500,
    'complete-product': 4000,
  },
  urgency: {
    'very-urgent': 800,
    'still-important': 400,
    flexible: 0,
  },
  extras: {
    stationery: 400,
    illustrations: 800,
    motion: 1200,
    optimization: 1000,
    animations: 1500,
    cms: 3000,
    prototype: 2000,
    usability: 1500,
    designSystem: 3000,
  },
}



// Utility functions
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

const getButtonClassName = (isSelected: boolean): string => {
  return `px-4 py-2 rounded-xs border border-gray-600 text-sm ${
    isSelected
      ? 'border-gray-400 bg-gray-800 text-white'
      : 'bg-transparent text-gray-400 hover:border-gray-400 hover:text-gray-300'
  }`
}

// Custom hooks
const usePricingState = () => {
  const [activeService, setActiveService] = useState<ServiceType>('web-design')
  const [selectedWebDesign, setSelectedWebDesign] =
    useState<WebDesignType | null>(null)
  const [selectedProductDesign, setSelectedProductDesign] =
    useState<ProductDesignType | null>(null)
  const [selectedUrgency, setSelectedUrgency] = useState<UrgencyType | null>(
    null
  )
  const [webDesignExtras, setWebDesignExtras] = useState<Set<ExtraType>>(
    new Set()
  )
  const [productDesignExtras, setProductDesignExtras] = useState<
    Set<ExtraType>
  >(new Set())

  const toggleExtra = useCallback(
    (extra: ExtraType) => {
      const setterMap = {
        'web-design': setWebDesignExtras,
        'product-design': setProductDesignExtras,
      }

      const getterMap = {
        'web-design': webDesignExtras,
        'product-design': productDesignExtras,
      }

      const currentExtras = getterMap[activeService]
      const setter = setterMap[activeService]

      const newExtras = new Set(currentExtras)
      if (currentExtras.has(extra)) {
        newExtras.delete(extra)
      } else {
        newExtras.add(extra)
      }
      setter(newExtras)
    },
    [activeService, webDesignExtras, productDesignExtras]
  )

  const getCurrentExtras = useCallback(() => {
    const extrasMap = {
      'web-design': webDesignExtras,
      'product-design': productDesignExtras,
    }
    return extrasMap[activeService]
  }, [activeService, webDesignExtras, productDesignExtras])

  const calculateTotal = useMemo(() => {
    let total = 0

    // Add selected services
    if (selectedWebDesign) {
      total += PRICING_DATA.webDesign[selectedWebDesign]
    }
    if (selectedProductDesign) {
      total += PRICING_DATA.productDesign[selectedProductDesign]
    }

    // Add urgency
    if (selectedUrgency) {
      total += PRICING_DATA.urgency[selectedUrgency]
    }

    // Add extras from all services
    const allExtras = [webDesignExtras, productDesignExtras]
    // biome-ignore lint/complexity/noForEach: <explanation>
    allExtras.forEach(extras => {
      // biome-ignore lint/complexity/noForEach: <explanation>
      extras.forEach(extra => {
        total += PRICING_DATA.extras[extra]
      })
    })

    return total
  }, [
    selectedWebDesign,
    selectedProductDesign,
    selectedUrgency,
    webDesignExtras,
    productDesignExtras,
  ])

  return {
    activeService,
    setActiveService,
    selectedWebDesign,
    setSelectedWebDesign,
    selectedProductDesign,
    setSelectedProductDesign,
    selectedUrgency,
    setSelectedUrgency,
    webDesignExtras,
    productDesignExtras,
    toggleExtra,
    getCurrentExtras,
    calculateTotal,
  }
}

// Sub-components
interface ServiceTabsProps {
  activeService: ServiceType
  onServiceChange: (service: ServiceType) => void
  tabs: readonly { key: ServiceType; label: string }[]
}

const ServiceTabs = ({ activeService, onServiceChange, tabs }: ServiceTabsProps) => (
  <div className="flex lg:flex-row flex-col gap-4 mb-8">
    {tabs.map(({ key, label }) => (
      <Button
        key={key}
        className="px-6 py-3 rounded-xs"
        variant={activeService === key ? 'default' : 'outline'}
        onClick={() => onServiceChange(key)}
      >
        {label}
      </Button>
    ))}
  </div>
)

interface OptionSelectorProps<T> {
  title: string
  options: readonly { key: T; label: string }[]
  selected: T | null
  onSelect: (value: T | null) => void
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
)

interface ExtrosSelectorProps {
  title: string
  extras: readonly { key: ExtraType; label: string }[]
  selectedExtras: Set<ExtraType>
  onToggle: (extra: ExtraType) => void
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
)

interface ServiceContentProps {
  activeService: ServiceType
  selectedWebDesign: WebDesignType | null
  setSelectedWebDesign: (value: WebDesignType | null) => void
  selectedProductDesign: ProductDesignType | null
  setSelectedProductDesign: (value: ProductDesignType | null) => void
  selectedUrgency: UrgencyType | null
  setSelectedUrgency: (value: UrgencyType | null) => void
  getCurrentExtras: () => Set<ExtraType>
  toggleExtra: (extra: ExtraType) => void
  webDesignOptions: readonly { key: WebDesignType; label: string }[]
  productDesignOptions: readonly { key: ProductDesignType; label: string }[]
  urgencyOptions: readonly { key: UrgencyType; label: string }[]
  extrasByService: Record<string, readonly { key: ExtraType; label: string }[]>
}

const ServiceContent = ({
  activeService,
  selectedWebDesign,
  setSelectedWebDesign,
  selectedProductDesign,
  setSelectedProductDesign,
  selectedUrgency,
  setSelectedUrgency,
  getCurrentExtras,
  toggleExtra,
  webDesignOptions,
  productDesignOptions,
  urgencyOptions,
  extrasByService,
}: ServiceContentProps) => {
  const currentExtras = getCurrentExtras()

  const dict = useDictionary()

  return (
    <>
      {activeService === 'web-design' && (
        <>
          <OptionSelector
            title={dict.pricing.optionDev}
            options={webDesignOptions}
            selected={selectedWebDesign}
            onSelect={setSelectedWebDesign}
          />
          <OptionSelector
            title={dict.pricing.optionDev2}
            options={urgencyOptions}
            selected={selectedUrgency}
            onSelect={setSelectedUrgency}
          />
          <ExtrasSelector
            title={dict.pricing.optionDev3}
            extras={extrasByService['web-design']}
            selectedExtras={currentExtras}
            onToggle={toggleExtra}
          />
        </>
      )}

      {activeService === 'product-design' && (
        <>
          <OptionSelector
            title={dict.pricing.optionDes}
            options={productDesignOptions}
            selected={selectedProductDesign}
            onSelect={setSelectedProductDesign}
          />
          <OptionSelector
            title={dict.pricing.optionDes2}
            options={urgencyOptions}
            selected={selectedUrgency}
            onSelect={setSelectedUrgency}
          />
          <ExtrasSelector
            title={dict.pricing.optionDes3}
            extras={extrasByService['product-design']}
            selectedExtras={currentExtras}
            onToggle={toggleExtra}
          />
        </>
      )}
    </>
  )
}

interface ContactSectionProps {
  selectedWebDesign: WebDesignType | null
  selectedProductDesign: ProductDesignType | null
  selectedUrgency: UrgencyType | null
  webDesignExtras: Set<ExtraType>
  productDesignExtras: Set<ExtraType>
  totalPrice: number
  webDesignOptions: readonly { key: WebDesignType; label: string }[]
  productDesignOptions: readonly { key: ProductDesignType; label: string }[]
  urgencyOptions: readonly { key: UrgencyType; label: string }[]
  extrasByService: Record<string, readonly { key: ExtraType; label: string }[]>
}

const ContactSection = ({
  selectedWebDesign,
  selectedProductDesign,
  selectedUrgency,
  webDesignExtras,
  productDesignExtras,
  totalPrice,
  webDesignOptions,
  productDesignOptions,
  urgencyOptions,
  extrasByService,
}: ContactSectionProps) => {
  const generateEmailBody = () => {
    let body =
      'Olá! Gostaria de solicitar um orçamento com as seguintes especificações:\n\n'

    // Add selected services
    const services = []
    if (selectedWebDesign) {
      const webDesignLabel = webDesignOptions.find(
        opt => opt.key === selectedWebDesign
      )?.label
      services.push(`Desenvolvimento: ${webDesignLabel}`)
    }
    if (selectedProductDesign) {
      const productDesignLabel = productDesignOptions.find(
        opt => opt.key === selectedProductDesign
      )?.label
      services.push(`Product Design: ${productDesignLabel}`)
    }

    if (services.length > 0) {
      body += 'SERVIÇOS SELECIONADOS:\n'
      for (const service of services) {
        body += `- ${service}\n`
      }
      body += '\n'
    }

    // Add urgency
    if (selectedUrgency) {
      const urgencyLabel = urgencyOptions.find(
        opt => opt.key === selectedUrgency
      )?.label
      body += `URGÊNCIA DO PROJETO: ${urgencyLabel}\n\n`
    }

    // Add extras
    const allExtras = [...webDesignExtras, ...productDesignExtras]
    if (allExtras.length > 0) {
      body += 'ENTREGAS EXTRAS:\n'
      for (const extra of allExtras) {
        let extraLabel = ''

        // Find the label for each extra
        for (const serviceExtras of Object.values(extrasByService)) {
          const found = serviceExtras.find(e => e.key === extra)
          if (found) extraLabel = found.label
        }

        if (extraLabel) {
          body += `- ${extraLabel}\n`
        }
      }
      body += '\n'
    }

    body += `ESTIMATIVA TOTAL: ${formatPrice(totalPrice)}\n\n`
    body += 'Aguardo retorno para mais detalhes!\n\nObrigado(a)!'

    return encodeURIComponent(body)
  }

  const handleContactClick = () => {
    const subject = encodeURIComponent('Novo Orçamento')
    const body = generateEmailBody()
    const mailtoUrl = `mailto:hello@stellarstudio.tech?subject=${subject}&body=${body}`
    window.open(mailtoUrl)
  }

  const dict = useDictionary()

  return (
    <button
      type="button"
      className="bg-white text-black p-6 lg:min-w-[400px] h-full rounded-lg cursor-pointer hover:bg-gray-50 transition-colors text-left"
      onClick={handleContactClick}
    >
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-orange-500 font-movatif-regular text-lg">
            {dict.pricing.contact}
          </h2>
          <h3 className="text-black font-movatif-book text-lg max-w-[180px] leading-tight">
          {dict.pricing.h3Contact}
          </h3>
        </div>
        <div className="flex items-end">
          <ArrowUpRight className="size-6" />
        </div>
      </div>
    </button>
  )
}

// Main component
const Pricing = () => {
  const {
    activeService,
    setActiveService,
    selectedWebDesign,
    setSelectedWebDesign,
    selectedProductDesign,
    setSelectedProductDesign,
    selectedUrgency,
    setSelectedUrgency,
    webDesignExtras,
    productDesignExtras,
    toggleExtra,
    getCurrentExtras,
    calculateTotal,
  } = usePricingState()

  const dict = useDictionary()

  const SERVICE_TABS = [
    { key: 'web-design' as const, label: dict.pricing['web-design-label']},
    { key: 'product-design' as const, label: 'Product Design' },
  ]

  const WEB_DESIGN_OPTIONS = [
    { key: 'landing-page' as const, label: 'Landing Page' },
    { key: 'ecommerce' as const, label: 'E-commerce' },
    { key: 'frontend' as const, label: 'Front-end' },
    { key: 'backend' as const, label: 'Back-end' },
  ]

  const PRODUCT_DESIGN_OPTIONS = [
    { key: 'ui-design' as const, label: 'UI Design' },
    { key: 'ux-research' as const, label: 'UX Research' },
    { key: 'complete-product' as const, label: dict.pricing['complete-product-label'] },
  ]

  const URGENCY_OPTIONS = [
    { key: 'very-urgent' as const, label: dict.pricing['very-urgent'] },
    { key: 'still-important' as const, label: dict.pricing['still-important'] },
    { key: 'flexible' as const, label: dict.pricing['flexible'] },
  ]

  const EXTRAS_BY_SERVICE = {
    branding: [
      { key: 'stationery' as const, label: dict.pricing.stationery },
      { key: 'illustrations' as const, label: dict.pricing.illustrations },
      { key: 'motion' as const, label: 'Motion Design' },
    ],
    'web-design': [
      { key: 'optimization' as const, label: dict.pricing.optimization },
      { key: 'animations' as const, label: dict.pricing.animations },
      { key: 'cms' as const, label: dict.pricing.cms },
    ],
    'product-design': [
      { key: 'prototype' as const, label: dict.pricing.prototype },
      { key: 'usability' as const, label: dict.pricing.usability },
      { key: 'designSystem' as const, label: 'Design System' },
    ],
  }

  return (
    <div id="pricing" className="py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col gap-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-movatif-regular leading-tight">
             {dict.pricing.titulo}
                <span className="text-primaryds">.</span>
              <span className="block">
              </span>
            </h2>
          </motion.div>

          <ServiceTabs
            activeService={activeService}
            onServiceChange={setActiveService}
            tabs={SERVICE_TABS}
          />
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
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
                selectedWebDesign={selectedWebDesign}
                setSelectedWebDesign={setSelectedWebDesign}
                selectedProductDesign={selectedProductDesign}
                setSelectedProductDesign={setSelectedProductDesign}
                selectedUrgency={selectedUrgency}
                setSelectedUrgency={setSelectedUrgency}
                getCurrentExtras={getCurrentExtras}
                toggleExtra={toggleExtra}
                webDesignOptions={WEB_DESIGN_OPTIONS}
                productDesignOptions={PRODUCT_DESIGN_OPTIONS}
                urgencyOptions={URGENCY_OPTIONS}
                extrasByService={EXTRAS_BY_SERVICE}
              />

              <hr className="border-gray-700 my-8" />

              <div className="flex lg:flex-row flex-col justify-between items-start gap-8">
                <div className="max-w-sm">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {dict.pricing.paragraph}
                  </p>
                </div>

                <ContactSection
                  selectedWebDesign={selectedWebDesign}
                  selectedProductDesign={selectedProductDesign}
                  selectedUrgency={selectedUrgency}
                  webDesignExtras={webDesignExtras}
                  productDesignExtras={productDesignExtras}
                  totalPrice={calculateTotal}
                  webDesignOptions={WEB_DESIGN_OPTIONS}
                  productDesignOptions={PRODUCT_DESIGN_OPTIONS}
                  urgencyOptions={URGENCY_OPTIONS}
                  extrasByService={EXTRAS_BY_SERVICE}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Pricing
