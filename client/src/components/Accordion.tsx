import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
}

export default function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="space-y-0 w-full border border-gray-200 rounded-lg overflow-hidden">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200 last:border-b-0">
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-gray-900 text-left">
              {item.title}
            </h3>
            <div className="flex-shrink-0 text-gray-600 hover:text-gray-900 transition-colors">
              {openIndex === index ? (
                <Minus size={24} />
              ) : (
                <Plus size={24} />
              )}
            </div>
          </button>

          {openIndex === index && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="text-gray-700 leading-relaxed">
                {typeof item.content === "string" ? (
                  <p>{item.content}</p>
                ) : (
                  item.content
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
