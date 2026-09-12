import { useId } from 'react';
import { faqs } from '../data/siteContent';
export function FAQAccordion(){const id=useId();return <div className="faq-list">{faqs.map((faq,i)=><details key={faq.question} name={id}><summary><span className="faq-number">{String(i+1).padStart(2,'0')}</span><span>{faq.question}</span><span className="faq-plus" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>;}
