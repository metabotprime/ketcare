import { SITE_URL } from '@/lib/utils';

type ItemListItem = {
  name: string;
  /** Relative path or absolute URL */
  url: string;
  position?: number;
};

type ItemListSchemaProps = {
  items: ItemListItem[];
  name?: string;
};

export function ItemListSchema({ items, name }: ItemListSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    ...(name && { name }),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: item.position ?? index + 1,
      url: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
      name: item.name,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
