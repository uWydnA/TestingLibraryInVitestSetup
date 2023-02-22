import { DataItem } from "./DataItem";

interface Props {
  createable?: boolean;
  flex?: boolean;
  data: DataItemType[];
}
export type DataItemType = { name: string; id: string };

export function DataList({ data, createable, flex }: Props) {
  return (
    <div>
      {data.map((item) => (
        <DataItem
          key={item.id}
          createable={createable}
          item={item}
          flex={flex}
        />
      ))}
    </div>
  );
}
