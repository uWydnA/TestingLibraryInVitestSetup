import { DataItemType } from "./DataList";

interface Props {
  createable?: boolean;
  flex?: boolean;
  item: DataItemType;
}

export function DataItem({ item, createable, flex }: Props) {
  return (
    <div
      className="dataItem"
      key={item.id}
      style={{ display: flex ? "flex" : "block" }}
    >
      <div>
        <span>id:{item.id}</span>
        <span>name:{item.name}</span>
      </div>

      {createable && (
        <div>
          <button>create</button>
          <button>delete</button>
        </div>
      )}
    </div>
  );
}
