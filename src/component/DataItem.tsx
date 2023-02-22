import { DataItemType } from "./DataList";

type ItemProps = {
  editable?: boolean;
  horizontal?: boolean;
  item: DataItemType;
};

export function DataItem({ item, editable, horizontal }: ItemProps) {
  return (
    <div
      className="dataitem"
      key={item.id}
      style={{ display: horizontal ? "flex" : "block" }}
    >
      <div>
        <span>id:{item.id}</span>
        <span>name:{item.name}</span>
      </div>

      {editable && (
        <div>
          <button>编辑</button>
          <button>删除</button>
        </div>
      )}
    </div>
  );
}
