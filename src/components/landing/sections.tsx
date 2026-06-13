import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white/40 tracking-widest uppercase text-xs">Новая коллекция 2026</Badge>,
    title: "Одевайся свободно.",
    showButton: true,
    buttonText: 'Смотреть коллекцию',
    bgImage: 'https://cdn.poehali.dev/projects/3727e022-bfb2-43f8-9122-265dd1c84981/files/b15cad15-89fc-4df9-ad90-a9a883f68e2c.jpg'
  },
  {
    id: 'about',
    title: 'Свобода — это стиль.',
    content: 'Freedom — бренд для тех, кто не боится выделяться. Мы создаём одежду, в которой ты чувствуешь себя собой: без компромиссов, без ограничений.'
  },
  {
    id: 'features',
    title: 'Качество в каждой детали.',
    content: 'Премиальные ткани, продуманный крой и актуальные силуэты — каждая вещь Freedom создана, чтобы служить долго и выглядеть безупречно.'
  },
  {
    id: 'testimonials',
    title: 'Носят и любят.',
    content: 'Тысячи людей уже выбрали Freedom как свой повседневный стиль. Потому что настоящая свобода начинается с того, что ты надеваешь утром.'
  },
  {
    id: 'join',
    title: 'Стань частью движения.',
    content: 'Новая коллекция уже в магазине. Выбери свой образ — и носи его с гордостью.',
    showButton: true,
    buttonText: 'Перейти в каталог'
  },
]