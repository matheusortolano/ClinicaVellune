export interface Media { src: string; alt: string; label: string }
export interface Treatment { slug: string; name: string; eyebrow: string; headline: string; shortDescription: string; longDescription: string; benefits: string[]; indications: string[]; technologies: string[]; price: number | null; cta: string; image: Media; gallery: Media[]; howItWorks: string; audience: string; detail: boolean }
export interface Technology { slug: string; name: string; description: string; applications: string[]; related: string[]; image: Media }
export interface FAQ { question: string; answer: string }
export interface Testimonial { id: string; quote: string; name: string; role: string; rating: string }
export interface Result { id: string; beforeImage: Media; afterImage: Media; treatment: string; objective: string; period: string; category: string }
export interface ContactInfo { phone: string; whatsapp: string; instagram: string; address: string[]; addressNote: string; hours: { day: string; time: string }[] }
