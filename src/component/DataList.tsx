import { DataItem } from "./DataItem";

type Props = {
  editable?: boolean;
  horizontal?: boolean;
  data: DataItemType[];
};
export type DataItemType = { name: string; id: string };

export function DataList({ data, editable, horizontal }: Props) {
  return (
    <div>
      {data.map((item) => {
        return (
          <DataItem
            key={item.id}
            editable={editable}
            item={item}
            horizontal={horizontal}
          />
        );
      })}
    </div>
  );
}
